import { Applicant, Document, DocumentTypes } from "onfido-node";

import {
  onfido,
  getExpectedObject,
  createApplicant,
  cleanUpApplicants,
  uploadDocument,
  sortByDocumentType,
} from "../test-helpers";
import { exampleDocument } from "../test-examples";
import { AxiosError } from "axios";

function getExpectedDocument(
  exampleDocument: Document,
  overrideProperties = {},
) {
  return getExpectedObject(exampleDocument, {
    applicant_id: applicant.id,
    download_href: expect.stringMatching(/^\/.+/),
    ...overrideProperties,
  });
}

let applicant: Applicant;
let document: Document;

const nonExistingId = "00000000-0000-0000-0000-000000000000";

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
    await uploadDocument(applicant, DocumentTypes.DrivingLicence, {
      country_of_residence: "FRA",
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
  const anotherDocument = (
    await uploadDocument(applicant, DocumentTypes.Passport)
  ).data;
  const documents = (
    await onfido.listDocuments(applicant.id)
  ).data.documents.sort(sortByDocumentType);

  expect(documents).toEqual([
    getExpectedDocument(exampleDocument, {
      id: document.id,
      type: "driving_licence",
    }),
    getExpectedDocument(exampleDocument, {
      id: anotherDocument.id,
      type: "passport",
    }),
  ]);
});

it("downloads an NFC face", async () => {
  const nfcFace = (
    await uploadDocument(
      applicant,
      DocumentTypes.Passport,
      {},
      "test/media/nfc_data.json",
    )
  ).data;

  const file = await onfido.downloadNfcFace(nfcFace.id);

  expect(file.status).toEqual(200);
  expect(file.headers["content-type"]).toEqual("image/png");
  expect(file.data.buffer.slice(1, 4)).toEqual("PNG");
  expect(file.data.filename).toBeTruthy();
});

it("throws an error if the NFC face is not found", async () => {
  try {
    await onfido.downloadNfcFace(nonExistingId);
  } catch (error) {
    expect(error).toBeInstanceOf(AxiosError);
    expect(error.response.status).toEqual(404);
  }
});
