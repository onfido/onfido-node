import { faker } from "@faker-js/faker";
import { Applicant, WorkflowRun } from "onfido-node";

import {
  exampleWorkflowRun,
  exampleWorkflowRunOutputDocumentReport,
  exampleWorkflowRunOutputFacialSimilarityReport,
  exampleWorkflowRunOutputProfileDataCapture
} from "../test-examples";
import {
  cleanUpApplicants,
  completeTask,
  createApplicant,
  createWorkflowRun,
  getExpectedObject,
  onfido,
  sleep,
  uploadDocument,
  uploadLivePhoto
} from "../test-helpers";

function getExpectedWorkflowRun(
  exampleWorkflowRun: WorkflowRun,
  overrideProperties = {}
) {
  return getExpectedObject(exampleWorkflowRun, {
    applicant_id: expect.stringMatching(/^[0-9a-z-]+$/),
    id: expect.stringMatching(/^[0-9a-z-]+$/),
    workflow_id: expect.stringMatching(/^[0-9a-z-]+$/),
    workflow_version_id: expect.anything(),
    dashboard_url: expect.anything(),
    status: expect.anything(),
    output: expect.anything(),
    reasons: expect.anything(),
    sdk_token: null,
    error: null,
    link: expect.anything(),
    created_at: expect.anything(),
    updated_at: expect.anything(),
    ...overrideProperties
  });
}

function getExpectedWorkflowRunOutput(
  exampleWorkflowRunOutput: object,
  expectedObject = {}
) {
  return getExpectedObject(exampleWorkflowRunOutput, expectedObject);
}

let applicant: Applicant;

describe("workflow runs outputs", () => {
  beforeEach(async () => {
    applicant = (await createApplicant()).data;
  });

  afterAll(() => {
    return Promise.all([cleanUpApplicants()]);
  });

  it("allows profile data capture as output", async () => {
    const workflow_id = "d27e510b-27a8-44c3-a3cc-bf4c0648a4ba";
    const workflowRunId = (await createWorkflowRun(applicant, workflow_id)).data
      .id;

    const taskId = (await onfido.listTasks(workflowRunId)).data.filter(
      task => task.id !== "start"
    )[0].id;

    const taskData = {
      country_residence: faker.location.countryCode("alpha-3"),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      // birthdate().toISOString() yields 1977-07-10T01:37:30.719Z format, discard the time
      dob: faker.date
        .birthdate()
        .toISOString()
        .split("T")[0],
      email: faker.internet.email(),
      phone_number: faker.helpers.fromRegExp(/[\+]3519[1236][0-9]{7}/),
      nationality: faker.location.countryCode("alpha-3"),
      phone_number_consent_granted: true,
      address: {
        country: faker.location.countryCode("alpha-3"),
        line1: faker.location.streetAddress(),
        line2: faker.location.street(),
        line3: faker.location.street(),
        town: faker.location.city(),
        postcode: faker.location.zipCode()
      }
    };

    await completeTask(workflowRunId, taskId, {
      data: taskData
    });

    const workflowRun = await onfido.findWorkflowRun(workflowRunId);

    expect(workflowRun.data).toEqual(
      getExpectedWorkflowRun(exampleWorkflowRun)
    );

    // workflow run has configured as output the result of the
    // profile data capture task `profile_capture_data`
    expect(workflowRun.data.output["profile_capture_data"]).toEqual(
      getExpectedWorkflowRunOutput(exampleWorkflowRunOutputProfileDataCapture, {
        address: {
          country: expect.stringMatching(/^[A-Za-z\s]+$/),
          line1: expect.stringMatching(/^[0-9A-Za-z\s-]+$/),
          line2: expect.stringMatching(/^[0-9A-Za-z\s-]+$/),
          line3: expect.stringMatching(/^[0-9A-Za-z\s-]+$/),
          postcode: expect.stringMatching(/^[0-9A-Za-z\s-]+$/),
          town: expect.stringMatching(/^[A-Za-z\s]+$/)
        },
        country_residence: expect.stringMatching(/^[A-Z]{3}$/),
        dob: expect.stringMatching(/^[0-9-]+$/),
        email: expect.stringMatching(/^[0-9A-Za-z@\.]+$/),
        first_name: expect.stringMatching(/^[A-Za-z\s]+$/),
        last_name: expect.stringMatching(/^[A-Za-z\s]+$/),
        nationality: expect.stringMatching(/^[A-Z]{3}$/),
        phone_number: expect.stringMatching(/^\+[0-9]+$/),
        phone_number_consent_granted: expect.anything()
      })
    );
  });

  it.only("allows document and facial similarity photo reports as outputs", async () => {
    const workflow_id = "5025d9fd-7842-4805-bce1-a7bfd7131b4e";
    const workflowRunId = (await createWorkflowRun(applicant, workflow_id)).data
      .id;

    const profileDataCaptureTaskId = (
      await onfido.listTasks(workflowRunId)
    ).data.filter(task => task.id.includes("profile"))[0].id;

    await completeTask(workflowRunId, profileDataCaptureTaskId, {
      data: {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName()
      }
    });

    const documentCaptureTaskId = (
      await onfido.listTasks(workflowRunId)
    ).data.filter(task => task.id.includes("document_photo"))[0].id;

    const documentId = (await uploadDocument(applicant)).data.id;
    await completeTask(workflowRunId, documentCaptureTaskId, {
      data: [{ id: documentId }]
    });

    const photoCaptureTaskId = (
      await onfido.listTasks(workflowRunId)
    ).data.filter(task => task.id.includes("face_photo"))[0].id;

    const photoId = (await uploadLivePhoto(applicant)).data.id;
    await completeTask(workflowRunId, photoCaptureTaskId, {
      data: [{ id: photoId }]
    });

    let workflowRun = await onfido.findWorkflowRun(workflowRunId);
    while (workflowRun.data.status === "processing") {
      await sleep(1000);
      workflowRun = await onfido.findWorkflowRun(workflowRunId);
    }

    expect(workflowRun.data).toEqual(
      getExpectedWorkflowRun(exampleWorkflowRun)
    );

    // workflow run has configured as output the result of the document
    // report `doc` and the facial similarity report `selfie`
    expect(workflowRun.data.output["doc"]).toEqual(
      getExpectedWorkflowRunOutput(exampleWorkflowRunOutputDocumentReport, {
        breakdown: expect.anything(),
        properties: expect.anything(),
        status: expect.stringMatching(/^[a-z]+$/),
        result: expect.stringMatching(/^[a-z]+$/),
        sub_result: expect.stringMatching(/^[a-z]+$/),
        uuid: expect.stringMatching(/^[0-9A-Za-z-]+$/)
      })
    );

    expect(workflowRun.data.output["selfie"]).toEqual(
      getExpectedWorkflowRunOutput(
        exampleWorkflowRunOutputFacialSimilarityReport,
        {
          breakdown: expect.anything(),
          properties: expect.anything(),
          status: expect.stringMatching(/^[a-z]+$/),
          result: expect.stringMatching(/^[a-z]+$/),
          sub_result: null,
          uuid: expect.stringMatching(/^[0-9A-Za-z-]+$/)
        }
      )
    );
  }, 30000);
});
