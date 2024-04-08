import { Applicant, WorkflowRun } from "onfido-node";

import { exampleWorkflowRun } from "../test-examples";
import {
  cleanUpApplicants,
  cleanUpWebhooks,
  createApplicant,
  createWorkflowRun,
  getExpectedObject,
  onfido
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
    output: null,
    reasons: expect.anything(),
    sdk_token: null,
    error: null,
    link: expect.anything(),
    created_at: expect.anything(),
    updated_at: expect.anything(),
    ...overrideProperties
  });
}

let applicant: Applicant;
const workflow_id = "e8c921eb-0495-44fe-b655-bcdcaffdafe5";

beforeEach(async () => {
  applicant = (await createApplicant()).data;
});

afterAll(() => {
  return Promise.all([cleanUpApplicants(), cleanUpWebhooks()]);
});

it("creates a workflow run", async () => {
  const workflowRun = await createWorkflowRun(applicant, workflow_id);

  expect(workflowRun.data).toEqual(getExpectedWorkflowRun(exampleWorkflowRun));
});

it("finds a workflow run", async () => {
  const workflowRun = await createWorkflowRun(applicant, workflow_id);

  const lookupworkflowRun = await onfido.findWorkflowRun(workflowRun.data.id);

  // Providing actual status and result as parameter since they might have changed overtime
  expect(lookupworkflowRun.data).toEqual(
    getExpectedWorkflowRun(exampleWorkflowRun)
  );
});

it("lists workflow runs", async () => {
  await createWorkflowRun(applicant, workflow_id);
  await createWorkflowRun(applicant, workflow_id);

  const workflowRuns = await onfido.listWorkflowRuns();

  expect(workflowRuns.data).toEqual(
    expect.arrayContaining([
      getExpectedWorkflowRun(exampleWorkflowRun),
      getExpectedWorkflowRun(exampleWorkflowRun)
    ])
  );
});

it("downloads a signed evidence file", async () => {
  const workflowRun = await createWorkflowRun(applicant, workflow_id);

  const file = await onfido.downloadSignedEvidenceFile(workflowRun.data.id);

  expect(file.status).toEqual(200);
  expect(file.headers["content-type"]).toEqual("application/pdf");
  expect(file.data.slice(0, 5)).toEqual("%PDF-");
});
