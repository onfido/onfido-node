import {
  cleanUpApplicants,
  cleanUpWebhooks,
  createApplicant,
  repeatRequestUntilTaskOutputChanges,
  createWorkflowRunWithCustomInputs,
  onfido,
  sleep,
} from "../test-helpers";

import { WorkflowRunBuilder } from "onfido-node";

afterAll(() => {
  return Promise.all([cleanUpApplicants(), cleanUpWebhooks()]);
});

it("downloads a signed document file", async () => {
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  const applicant = (await createApplicant()).data;

  const workflowRunBuilder: WorkflowRunBuilder = {
    applicant_id: applicant.id,
    workflow_id: "8b74614f-9e7f-42fd-852a-5f2bcc852587",
    custom_data: {
      country_of_operation: "GBR",
      document_date_of_expiry: "2022-01-01",
      document_issuing_country: "FRA",
      document_issuing_date: "2022-01-01",
      document_number: "Example string",
      document_to_sign_url:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      document_type: "driving_licence",
    },
  };

  const workflowRun =
    await createWorkflowRunWithCustomInputs(workflowRunBuilder);
  const taskId = (await onfido.listTasks(workflowRun.data.id)).data[1].id;

  const output = (
    await repeatRequestUntilTaskOutputChanges(
      "findTask",
      [workflowRun.data.id, taskId],
      10,
      3000,
    )
  )["output"];

  const fileId = output["properties"]["signed_documents"][0]["id"];

  const file = await onfido.downloadQesDocument(workflowRun.data.id, fileId);

  expect(file.status).toEqual(200);
  expect(file.headers["content-type"]).toEqual("application/pdf");
  expect(file.data.buffer.slice(0, 5)).toEqual("%PDF-");
});
