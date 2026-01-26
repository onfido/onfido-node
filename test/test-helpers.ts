import { isAxiosError } from "axios";
import { readFileSync } from "fs";
import "dotenv/config";

import {
  Applicant,
  CompleteTaskBuilder,
  Configuration,
  DefaultApi,
  Document,
  DocumentReport,
  FacialSimilarityPhotoReport,
  FileTransfer,
  LiveVideo,
  LocationBuilder,
  MotionCapture,
  Report,
  WatchlistMonitorReportNameEnum,
  WorkflowRunBuilder,
  DocumentTypes,
} from "onfido-node";

export const onfido = new DefaultApi(
  new Configuration({
    apiToken: process.env.ONFIDO_API_TOKEN,
    baseOptions: { timeout: 60_000 },
  }),
);

jest.setTimeout(60_000);

export const sampleapplicant_id =
  process.env.ONFIDO_SAMPLE_APPLICANT_ID || "sample_applicant_id";

export function getExpectedObject(exampleObject: any, overrideProperties = {}) {
  var expectedObject = { ...exampleObject, ...overrideProperties };

  if ("id" in expectedObject)
    expectedObject.id = expect.stringMatching(/^[0-9a-z-_]+$/);

  if ("href" in expectedObject)
    expectedObject.href = expect.stringMatching(/^\/v3.6\/.+$/);

  if ("created_at" in expectedObject)
    expectedObject.created_at = expect.stringMatching(/^[0-9TZ:\-\.]+$/);

  return expectedObject;
}

export async function createApplicant(overrideProperties = {}) {
  return onfido.createApplicant({
    first_name: "Test",
    last_name: "Applicant",
    address: {
      postcode: "AB12 3AB",
      country: "GBR",
    },
    location: {
      ip_address: "127.0.0.1",
      country_of_residence: "GBR",
    },
    email: "first.last@gmail.com",
    phone_number: "351911111111",
    ...overrideProperties,
  });
}

export async function cleanUpApplicants() {
  // Don't perform any clean-up when sample applicant id is not good
  if (sampleapplicant_id.length != 36) {
    return;
  }

  const applicants = await onfido.listApplicants(1, 20, false);

  applicants.data.applicants.forEach(async function (applicant) {
    try {
      if (applicant.id != sampleapplicant_id) {
        await onfido.deleteApplicant(applicant.id);
      }
    } catch (error) {
      if (
        !isAxiosError(error) ||
        error.response?.data.error?.type != "deletion_incomplete_checks"
      ) {
        // Only ignore "Applicants with checks in progress cannot be deleted." error
        throw error;
      }
    }
  });
}

export async function uploadDocument(
  applicant: Applicant,
  documentType: DocumentTypes = DocumentTypes.DrivingLicence,
  location?: LocationBuilder,
  filePath: string = "test/media/sample_driving_licence.png",
) {
  let fileTransfer = new FileTransfer(filePath);

  return onfido.uploadDocument(
    documentType,
    applicant.id,
    fileTransfer,
    undefined,
    undefined,
    undefined,
    undefined,
    location,
  );
}

export async function uploadLivePhoto(
  applicant: Applicant,
  advancedValidation?: boolean,
) {
  let buffer = readFileSync("test/media/sample_photo.png");

  return onfido.uploadLivePhoto(
    applicant.id,
    new FileTransfer(buffer, "sample_photo.png"),
    advancedValidation,
  );
}

export async function uploadIdPhoto(applicant: Applicant) {
  let fileTransfer = new FileTransfer("test/media/sample_photo.png");

  return onfido.uploadIdPhoto(applicant.id, fileTransfer);
}

export async function uploadSigningDocument(
  applicant: Applicant,
  filePath: string = "test/media/sample_signing_document.pdf",
) {
  const fileTransfer = new FileTransfer(filePath);

  return onfido.uploadSigningDocument(applicant.id, fileTransfer);
}

export async function createWebhook() {
  return onfido.createWebhook({
    url: "https://example.com",
    events: ["check.completed", "report.completed"],
  });
}

export async function cleanUpWebhooks() {
  const webhooks = await onfido.listWebhooks();

  webhooks.data.webhooks.forEach(async function (webhook) {
    expect((await onfido.deleteWebhook(webhook.id)).status).toEqual(204);
  });
}

export async function createCheck(
  applicant: Applicant,
  document: Document,
  overrideProperties = {},
) {
  return onfido.createCheck({
    applicant_id: applicant.id,
    report_names: ["document", "identity_enhanced"],
    document_ids: [document.id],
    ...overrideProperties,
  });
}

export async function createWatchlistMonitor(
  applicant: Applicant,
  reportName: WatchlistMonitorReportNameEnum,
) {
  return onfido.createWatchlistMonitor({
    applicant_id: applicant.id,
    report_name: reportName,
  });
}

export function sortByApplicantfirst_name(a: Applicant, b: Applicant) {
  if (a.first_name < b.first_name) {
    return -1;
  }
  if (a.first_name > b.first_name) {
    return 1;
  }
  return 0;
}

export function sortByDocumentType(a: Document, b: Document) {
  if (a.type < b.type) {
    return -1;
  }
  if (a.type > b.type) {
    return 1;
  }
  return 0;
}

export function sortByLiveVideoId(a: LiveVideo, b: LiveVideo) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}

export function sortByMotionCaptureId(a: MotionCapture, b: MotionCapture) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}

export function sortByReportName(a: Report, b: Report) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export function createWorkflowRun(applicant: Applicant, workflow_id: string) {
  return onfido.createWorkflowRun({
    applicant_id: applicant.id,
    workflow_id: workflow_id,
  });
}

export function createWorkflowRunWithCustomInputs(
  workflowRunBuilder: WorkflowRunBuilder,
) {
  return onfido.createWorkflowRun(workflowRunBuilder);
}

export function completeTask(
  workflowRunId: string,
  taskId: string,
  taskData: CompleteTaskBuilder,
) {
  return onfido.completeTask(workflowRunId, taskId, taskData);
}

export async function sleep(msec: number) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

export function getExpectedDocumentReport(
  exampleReport: DocumentReport,
  overrideProperties = {},
) {
  return getExpectedObject(exampleReport, {
    check_id: expect.stringMatching(/^[0-9a-z-]+$/),
    documents: expect.anything(),
    breakdown: expect.anything(),
    properties: expect.anything(),
    status: expect.anything(),
    ...overrideProperties,
  });
}

export function getExpectedFacialSimilarityPhotoReport(
  exampleReport: FacialSimilarityPhotoReport,
  overrideProperties = {},
) {
  return getExpectedObject(exampleReport, {
    check_id: expect.stringMatching(/^[0-9a-z-]+$/),
    documents: expect.anything(),
    breakdown: expect.anything(),
    properties: expect.anything(),
    status: expect.anything(),
    ...overrideProperties,
  });
}

export async function repeatRequestUntilStatusChanges(
  fn: string,
  params: any[],
  expectedStatus: string,
  maxRetries = 15,
  sleepTime = 1000,
): Promise<any> {
  let instance = (await onfido[fn](...params)).data;
  let iteration = 0;

  while (instance.status != expectedStatus) {
    if (iteration >= maxRetries) {
      throw new Error("Status did not change in time");
    }
    iteration += 1;
    await sleep(sleepTime);

    instance = (await onfido[fn](...params)).data;
  }
  return instance;
}

export async function repeatRequestUntilTaskOutputChanges(
  fn: string,
  params: any[],
  maxRetries = 15,
  sleepTime = 1000,
): Promise<any> {
  let instance = (await onfido[fn](...params)).data;
  let iteration = 0;

  while (instance["output"] === null) {
    if (iteration >= maxRetries) {
      throw new Error("Task output did not change in time");
    }
    iteration += 1;
    await sleep(sleepTime);

    instance = (await onfido[fn](...params)).data;
  }
  return instance;
}

export async function repeatRequestUntilHttpCodeChanges(
  fn: string,
  params: any[],
  maxRetries: number = 15,
  sleepTime: number = 1000,
): Promise<any> {
  let iteration = 0;
  let instance: any;

  while (iteration <= maxRetries) {
    try {
      instance = await onfido[fn](...params);
      break;
    } catch (error) {
      await sleep(sleepTime);
      iteration += 1;
    }
  }
  return instance;
}
