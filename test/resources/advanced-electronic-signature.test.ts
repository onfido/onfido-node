import {
  cleanUpApplicants,
  cleanUpWebhooks,
  createApplicant,
  repeatRequestUntilTaskOutputChanges,
  createWorkflowRunWithCustomInputs,
  onfido
} from "../test-helpers";

import { WorkflowRunBuilder } from "onfido-node";

afterAll(() => {
  return Promise.all([cleanUpApplicants(), cleanUpWebhooks()]);
});

it("downloads a signed document file", async () => {
  const applicant = (await createApplicant()).data;

  const workflowRunBuilder: WorkflowRunBuilder = {
    applicant_id: applicant.id,
    workflow_id: "9554c27e-9886-4052-992d-816467d97d24",
    custom_data: {
      doc_result: "clear",
      face_result: "clear",
      transaction_id: "995bf84c-d708-4977-8b88-d4b66bebdaf6"
    }
  };

  const workflowRun = await createWorkflowRunWithCustomInputs(
    workflowRunBuilder
  );
  const taskId = (await onfido.listTasks(workflowRun.data.id)).data[1].id;

  const output = (
    await repeatRequestUntilTaskOutputChanges(
      "findTask",
      [workflowRun.data.id, taskId],
      10,
      3000
    )
  )["output"];

  const signedDocumentFileId =
    output["properties"]["signed_documents"][0]["id"];
  const receiptDocumentFileId = output["properties"]["receipt_document"]["id"];

  const signedDocument = await onfido.downloadAesDocument(
    workflowRun.data.id,
    signedDocumentFileId
  );
  const receiptDocument = await onfido.downloadAesDocument(
    workflowRun.data.id,
    receiptDocumentFileId
  );

  expect(signedDocument.status).toEqual(200);
  expect(signedDocument.headers["content-type"]).toEqual("application/pdf");
  expect(signedDocument.data.buffer.slice(0, 5)).toEqual("%PDF-");

  expect(receiptDocument.status).toEqual(200);
  expect(receiptDocument.headers["content-type"]).toEqual("application/pdf");
  expect(receiptDocument.data.buffer.slice(0, 5)).toEqual("%PDF-");
});
