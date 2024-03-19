import { Applicant, Task } from "onfido-node";

import { exampleTask } from "../test-examples";
import {
  cleanUpApplicants,
  cleanUpWebhooks,
  createApplicant,
  completeTask,
  createWorkflowRun,
  getExpectedObject,
  onfido
} from "../test-helpers";

function getExpectedTask(exampleTask: Task, overrideProperties = {}) {
  return getExpectedObject(exampleTask, {
    task_def_id: expect.stringMatching(/^[0-9a-z-_]+$/),
    task_def_version: null,
    workflow_run_id: expect.stringMatching(/^[0-9a-z-]+$/),
    created_at: expect.anything(),
    updated_at: expect.anything(),
    ...overrideProperties
  });
}

const workflow_id = "e8c921eb-0495-44fe-b655-bcdcaffdafe5";
let applicant: Applicant;
let workflowRunId: string;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
  workflowRunId = (await createWorkflowRun(applicant, workflow_id)).data.id;
});

afterAll(() => {
  return Promise.all([cleanUpApplicants()]);
});

it("lists tasks", async () => {
  const tasks = await onfido.listTasks(workflowRunId);

  expect(tasks.data).toEqual([
    getExpectedTask(exampleTask),
    getExpectedTask(exampleTask)
  ]);
});

it("finds a task", async () => {
  const taskId = (await onfido.listTasks(workflowRunId)).data[0].id;

  const task = await onfido.retrieveTask(workflowRunId, taskId);

  expect(task.data).toEqual(
    getExpectedTask(exampleTask, { input: expect.anything(), output: null })
  );
});

it("completes a task", async () => {
  const taskId = (await onfido.listTasks(workflowRunId)).data.filter(
    task => task.id !== "start"
  )[0].id;

  const completedTask = await completeTask(workflowRunId, taskId);
  expect(completedTask.status).toEqual(200);
  expect(completedTask.data).toEqual({});
});
