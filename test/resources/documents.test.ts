import { Applicant, Document } from "onfido-node";

import {
  onfido,
  getExpectedObject,
  createApplicant,
  cleanUpApplicants,
  uploadDocument,
  sortByDocumentType
} from "../test-helpers";
import { exampleDocument } from "../test-examples";

function getExpectedDocument(
  exampleDocument: Document,
  overrideProperties = {}
) {
  return getExpectedObject(exampleDocument, {
    applicant_id: applicant.id,
    download_href: expect.stringMatching(/^\/.+/),
    ...overrideProperties
  });
}

let applicant: Applicant;
let document: Document;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
  document = (await uploadDocument(applicant)).data;
});

afterAll(() => {
  return cleanUpApplicants();
});

it("uploads a document", async () => {
  expect(document).toEqual(getExpectedDocument(exampleDocument));
});

it("uploads a document with location", async () => {
  document = (
    await uploadDocument(applicant, "driving_licence", {
      country_of_residence: "FRA"
    })
  ).data;
});

it("downloads a document", async () => {
  const file = await onfido.downloadDocument(document.id);

  expect(file.status).toEqual(200);
  expect(file.headers["content-type"]).toEqual("image/png");
  expect(file.data.buffer.slice(1, 4)).toEqual("PNG");
  expect(file.data.filename).toBeTruthy();
});

it("finds a document", async () => {
  document = (await onfido.findDocument(document.id)).data;

  expect(document).toEqual(getExpectedDocument(exampleDocument));
});

it("lists documents", async () => {
  const anotherDocument = (await uploadDocument(applicant, "passport")).data;
  const documents = (
    await onfido.listDocuments(applicant.id)
  ).data.documents.sort(sortByDocumentType);

  expect(documents).toEqual([
    getExpectedDocument(exampleDocument, {
      id: document.id,
      type: "driving_licence"
    }),
    getExpectedDocument(exampleDocument, {
      id: anotherDocument.id,
      type: "passport"
    })
  ]);
});
