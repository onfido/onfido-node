
import { Applicant, Document, OnfidoDownload } from "onfido-node";

import { createNock, onfido, getExpectedObject, createApplicant, cleanUpApplicants, uploadDocument } from "../testHelpers";
import { exampleDocument } from "../testExamples";

function getExpectedDocument(exampleDocument: Document, overrideProperties={})
{
  return getExpectedObject(exampleDocument, {
    'applicantId': applicant.id,
    'downloadHref': expect.stringMatching(/^\/.+/),
    ... overrideProperties });
}

function sortByType( a: Document, b: Document ) {
  if ( a.type < b.type ){
    return -1;
  }
  if ( a.type > b.type ){
    return 1;
  }
  return 0;
}

let applicant: Applicant;
let document: Document;

async function init() {
  applicant = await createApplicant();
  document = await uploadDocument(applicant);
}

beforeEach(() => {
  return init();
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

  const documents = (await onfido.document.list(applicant.id)).sort(sortByType);

  expect(documents).toEqual([getExpectedDocument(exampleDocument, {'id': document.id, 'type': 'driving_licence'}),
                             getExpectedDocument(exampleDocument, {'id': anotherDocument.id, 'type': 'passport'})]);
});
