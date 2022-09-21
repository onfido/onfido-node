
import { Applicant, Document, OnfidoDownload } from "onfido-node";

import { createNock, onfido, getExpectedObject, createApplicant, cleanUpApplicants, uploadDocument } from "../testHelpers";
import { exampleDocument } from "../testExamples";

function getExpectedDocument(exampleDocument: Document)
{
  return getExpectedObject(exampleDocument, {
    'applicantId': applicant.id,
    'downloadHref': expect.stringMatching(/^\/.+/) });
}

let applicant: Applicant;
let document: Document;

async function init() {
  applicant = await createApplicant();
}

beforeAll(() => {
  return init();
});

afterAll(() => {
  return cleanUpApplicants();
});

it("uploads a document", async () => {
  document = await uploadDocument(applicant.id);
  expect(document).toEqual(getExpectedDocument(exampleDocument));
});

it("uploads another document", async () => {
  const anotherDocument = await uploadDocument(applicant.id);
  expect(anotherDocument).toEqual(getExpectedDocument(exampleDocument));
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
  createNock()
    .get("/documents/")
    .query({ applicant_id: applicant.id })
    .reply(200, JSON.stringify({ documents: [exampleDocument, exampleDocument] }));

  const documents = await onfido.document.list(applicant.id);

  expect(documents).toEqual([getExpectedDocument(exampleDocument),
                             getExpectedDocument(exampleDocument)]);
});
