import { Applicant, SigningDocument } from "onfido-node";
import { AxiosError } from "axios";

import {
  onfido,
  createApplicant,
  cleanUpApplicants,
  uploadSigningDocument,
} from "../test-helpers";

const nonExistingId = "00000000-0000-0000-0000-000000000000";

let applicant: Applicant;
let signingDocument: SigningDocument;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
  signingDocument = (await uploadSigningDocument(applicant)).data;
});

afterAll(() => {
  return cleanUpApplicants();
});

it("uploads a signing document", () => {
  expect(signingDocument.applicant_id).toEqual(applicant.id);
  expect(signingDocument.file_name).toEqual("sample_signing_document.pdf");
  expect(signingDocument.file_type).toEqual("pdf");
  expect(signingDocument.href).toBeTruthy();
  expect(signingDocument.download_href).toBeTruthy();
  expect(signingDocument.file_size).toBeGreaterThan(0);
});

it("downloads a signing document", async () => {
  const file = await onfido.downloadSigningDocument(signingDocument.id);

  expect(file.status).toEqual(200);
  expect(file.headers["content-type"]).toMatch(/pdf/);
  expect(file.data.buffer.slice(0, 4).toString()).toEqual("%PDF");
  expect(file.data.filename).toBeTruthy();
});

it("finds a signing document", async () => {
  const found = (await onfido.findSigningDocument(signingDocument.id)).data;

  expect(found.id).toEqual(signingDocument.id);
  expect(found.file_name).toEqual("sample_signing_document.pdf");
  expect(found.file_type).toEqual("pdf");
  expect(found.applicant_id).toEqual(applicant.id);
  expect(found.download_href).toBeTruthy();
});

it("lists signing documents", async () => {
  const documents = (await onfido.listSigningDocuments(applicant.id)).data
    .signing_documents;

  expect(documents.some((doc) => doc.id === signingDocument.id)).toBeTruthy();
});

it("throws an error when uploading a signing document with null params", async () => {
  await expect(
    onfido.uploadSigningDocument(undefined as any, undefined as any),
  ).rejects.toThrow(/Required parameter applicantId/);
});

it("throws an error if the signing document is not found", async () => {
  try {
    await onfido.downloadSigningDocument(nonExistingId);
  } catch (error) {
    expect(error).toBeInstanceOf(AxiosError);
    expect((error as AxiosError).response?.status).toEqual(404);
  }
});
