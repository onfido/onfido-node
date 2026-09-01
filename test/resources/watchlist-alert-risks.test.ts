import {
  Applicant,
  Task,
  WatchlistMeshAlertRisk,
  WorkflowRunBuilder,
} from "onfido-node";

import {
  cleanUpApplicants,
  createApplicant,
  createWorkflowRunWithCustomInputs,
  onfido,
  repeatRequestUntilTaskOutputChanges,
} from "../test-helpers";

const workflowId = "18effbfe-73c3-4680-ae43-e1c474767ff4";

let applicant: Applicant;

beforeEach(async () => {
  applicant = (
    await createApplicant({
      first_name: "Donald",
      last_name: "Consider",
      dob: "1990-01-01",
      address: {
        country: "PRT",
        town: "Town",
        street: "Street",
        building_number: "12",
        postcode: "12345",
      },
    })
  ).data;
});

afterAll(() => cleanUpApplicants());

it("lists watchlist mesh alert risks", async () => {
  const workflowRunBuilder: WorkflowRunBuilder = {
    applicant_id: applicant.id,
    workflow_id: workflowId,
    custom_data: {
      national_id: {
        type: "passport",
        value: "P1234567",
      },
      nationality: "PRT",
    },
  };
  const workflowRun =
    await createWorkflowRunWithCustomInputs(workflowRunBuilder);
  const task = (await onfido.listTasks(workflowRun.data.id)).data.find(
    (workflowTask) =>
      workflowTask.task_def_id === "query_watchlists_complyadvantage_mesh",
  );

  expect(task).toBeDefined();

  const watchlistTask = await repeatRequestUntilTaskOutputChanges(
    "findTask",
    [workflowRun.data.id, (task as Task).id],
    30,
    2000,
  );
  const alertIdentifier = (
    watchlistTask.output as {
      properties: { alert_identifier: string };
    }
  ).properties.alert_identifier;

  expect(alertIdentifier).toBeDefined();

  const risks: WatchlistMeshAlertRisk[] = (
    await onfido.listWatchlistMeshAlertRisks(alertIdentifier, 1, 1)
  ).data;

  expect(risks.length).toBeGreaterThan(0);
  expect(risks.length).toBeLessThanOrEqual(1);
  expect(risks[0].identifier).toBeDefined();
  expect(risks[0].decision).toBeDefined();
  expect(risks[0].detail).toBeDefined();
});
