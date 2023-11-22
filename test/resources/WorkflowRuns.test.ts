import { Applicant, WorkflowRun, OnfidoDownload } from "onfido-node";

import { exampleWorkflowRun } from "../testExamples";
import {
  cleanUpApplicants,
  cleanUpWebhooks,
  createApplicant,
  createNock,
  createWorkflowRun,
  getExpectedObject,
  onfido
} from "../testHelpers";

function getExpectedWorkflowRun(
  exampleWorkflowRun: WorkflowRun,
  overrideProperties = {}
) {
  return getExpectedObject(exampleWorkflowRun, {
    applicantId: expect.stringMatching(/^[0-9a-z-]+$/),
    id: expect.stringMatching(/^[0-9a-z-]+$/),
    workflowId: expect.stringMatching(/^[0-9a-z-]+$/),
    workflowVersionId: expect.anything(),
    dashboardUrl: expect.anything(),
    status: expect.anything(),
    output: null,
    reasons: expect.anything(),
    error: null,
    link: expect.anything(),
    createdAt: expect.anything(),
    updatedAt: expect.anything(),
    ...overrideProperties
  });
}

let applicant: Applicant;
const workflow_id = "e8c921eb-0495-44fe-b655-bcdcaffdafe5";

beforeEach(async () => {
  applicant = await createApplicant();
});

afterAll(() => {
  return Promise.all([cleanUpApplicants(), cleanUpWebhooks()]);
});

it("creates a workflow run", async () => {
  const workflowRun = await createWorkflowRun(applicant, workflow_id);

  expect(workflowRun).toEqual(getExpectedWorkflowRun(exampleWorkflowRun));
});

it("finds a workflow run", async () => {
  const workflowRun = await createWorkflowRun(applicant, workflow_id);

  createNock()
    .get("/workflow_runs/" + workflowRun.id)
    .reply(200, JSON.stringify(workflowRun));

  const lookupworkflowRun = await onfido.workflowRun.find(workflowRun.id);

  // Providing actual status and result as parameter as it might change overtime
  expect(lookupworkflowRun).toEqual(getExpectedWorkflowRun(exampleWorkflowRun));
});

it("lists workflow runs", async () => {
  await createWorkflowRun(applicant, workflow_id);
  await createWorkflowRun(applicant, workflow_id);

  createNock()
    .get("/workflow_runs/")
    .reply(200, JSON.stringify([exampleWorkflowRun, exampleWorkflowRun]));

  const workflowRuns = await onfido.workflowRun.list();

  expect(workflowRuns).toEqual(
    expect.arrayContaining([
      getExpectedWorkflowRun(exampleWorkflowRun),
      getExpectedWorkflowRun(exampleWorkflowRun)
    ])
  );
});

it("downloads a signed evidence file", async () => {
  const workflowRun = await createWorkflowRun(applicant, workflow_id);

  createNock()
    .get("/workflow_runs/" + workflowRun.id + "/signed_evidence_file")
    .reply(200, {});

  const file = await onfido.workflowRun.evidence(workflowRun.id);

  expect(file).toBeInstanceOf(OnfidoDownload);
});
