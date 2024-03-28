// import nock from "nock";
// import snakecaseKeys from "snakecase-keys";
import { createReadStream, ReadStream } from "fs";

import {
  Applicant,
  Document,
  LiveVideo,
  MotionCapture,
  Configuration,
  DefaultApi,
  Report
} from "onfido-node";

export const onfido = new DefaultApi(
  new Configuration({
    apiToken: process.env.ONFIDO_API_TOKEN,
    baseOptions: { timeout: 60_000 }
  })
);

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
      country: "GBR"
    },
    location: {
      ip_address: "127.0.0.1",
      country_of_residence: "GBR"
    },
    ...overrideProperties
  });
}

export async function cleanUpApplicants() {
  // Don't perform any clean-up when sample applicant id is not good
  if (sampleapplicant_id.length != 36) {
    return;
  }

  const applicants = await onfido.listApplicants(1, 20, false);

  applicants.data.applicants.forEach(async function(applicant) {
    if (applicant.id != sampleapplicant_id) {
      await onfido.deleteApplicant(applicant.id);
    }
  });
}

export async function uploadDocumentFromStream(
  applicant: Applicant,
  readStream: File,
  documentType = "driving_licence"
) {
  return onfido.uploadDocument(documentType, applicant.id, readStream);
  // , undefined, undefined, undefined, undefined, new Location(
  //   {
  //     ip_address: "127.0.0.1",
  //     country_of_residence: "GBR"
  //   }
  // );
}

export async function uploadDocument(
  applicant: Applicant,
  documentType = "driving_licence"
) {
  let readStream: any = createReadStream(
    "test/media/sample_driving_licence.png"
  );
  return uploadDocumentFromStream(applicant, readStream, documentType);
}

export async function createWebhook() {
  return onfido.createWebhook({
    url: "https://example.com",
    events: ["check.completed", "report.completed"]
  });
}

export async function cleanUpWebhooks() {
  const webhooks = await onfido.listWebhooks();

  webhooks.data.webhooks.forEach(async function(webhook) {
    expect((await onfido.deleteWebhook(webhook.id)).status).toEqual(204);
  });
}

export async function createCheck(
  applicant: Applicant,
  document: Document,
  overrideProperties = {}
) {
  return onfido.createCheck({
    applicant_id: applicant.id,
    report_names: ["document", "identity_enhanced"],
    document_ids: [document.id],
    ...overrideProperties
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
    workflow_id: workflow_id
  });
}

export function completeTask(
  workflowRunId: string,
  taskId: string,
  overrideProperties = {}
) {
  const taskData = {
    data: {
      first_name: "Test",
      last_name: "Applicant",
      ...overrideProperties
    }
  };
  return onfido.completeTask(workflowRunId, taskId, taskData);
}
