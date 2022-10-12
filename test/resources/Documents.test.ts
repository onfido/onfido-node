
import { Applicant, Document, OnfidoDownload } from "onfido-node";

import { createNock, onfido, getExpectedObject, createApplicant, cleanUpApplicants, uploadDocument, sortByDocumentType } from "../testHelpers";
import { exampleDocument } from "../testExamples";

function getExpectedDocument(exampleDocument: Document, overrideProperties={})
{
  return getExpectedObject(exampleDocument, {
    'applicantId': applicant.id,
    'downloadHref': expect.stringMatching(/^\/.+/),
    ... overrideProperties });
}

let applicant: Applicant;
let document: Document;

beforeEach(async () => {
  applicant = await createApplicant();
  document = await uploadDocument(applicant);
});

afterAll(() => {
  return cleanUpApplicants();
});

it("uploads a document", async () => {
  expect(document).toEqual(getExpectedDocument(exampleDocument));
});

it("downloads a document", async () => {
  createNock()
    .get("/documents/" + document.id + "/download")
    .reply(200, {});

  const file = await onfido.document.download(document.id);

  expect(file).toBeInstanceOf(OnfidoDownload);
});

it("finds a document", async () => {
  createNock()
    .get("/documents/" + document.id)
    .reply(200, JSON.stringify(exampleDocument));

  document = await onfido.document.find(document.id);

  expect(document).toEqual(getExpectedDocument(exampleDocument));
});

it("lists documents", async () => {
  const anotherDocument = await uploadDocument(applicant, "passport");

  createNock()
    .get("/documents/")
    .query({ applicant_id: applicant.id })
    .reply(200, JSON.stringify({ documents: [exampleDocument, exampleDocument] }));

  const documents = (await onfido.document.list(applicant.id)).sort(sortByDocumentType);

  expect(documents).toEqual([getExpectedDocument(exampleDocument, {'id': document.id, 'type': 'driving_licence'}),
                             getExpectedDocument(exampleDocument, {'id': anotherDocument.id, 'type': 'passport'})]);
});
