import { Applicant, Document } from "onfido-node";

import { createNock, onfido, getExpectedObject, createApplicant, cleanUpApplicants, nockEnabled, uploadDocument } from "../testHelpers";

// Fake data, taken from documentation.
const exampleAutofillMock = {
  documentId: "21345-xxx",
  documentClassification: {
    issuingCountry: "FRA",
    documentType: "national_identity_card"
  },
  extractedData: {
    dateOfBirth: "1990-07-21",
    dateOfExpiry: "2025-07-07",
    documentNumber: "200407512345",
    firstName: "AMANDINE CHANTAL",
    gender: "Female",
    lastName: "MAVARINE",
    mrzLine1: "IDFRAMAVARINE<<<<<<<<<<<<<<<<<075123",
    mrzLine2: "2000000000000AMANDINE<CHANT9007219F5",
    nationality: "FRA",
    addressLine1: "address 1",
    addressLine2: "address 2"
  }
};

const exampleAutofillE2e = {
  documentId: "21345-xxx",
  documentClassification: {
    issuingCountry: "GBR",
    documentType: "driving_licence"
  },
  extractedData: {
    dateOfBirth: "1976-03-11",
    dateOfExpiry: "2023-01-18",
    documentNumber: "200407512345",
    firstName: "SARAH",
    gender: "Female",
    lastName: "MORGAN"
  }
};

let applicant: Applicant;
let document: Document;

async function init() {
  applicant = await createApplicant();
  document = await uploadDocument(applicant.id);
}

beforeAll(() => {
  return init();
});

afterAll(() => {
  return cleanUpApplicants();
});

it("performs autofill", async () => {
  createNock()
    .post("/extractions/", {
      document_id: document.id
    })
    .reply(201, getExpectedObject(exampleAutofillMock));

  const result = await onfido.autofill.perform(document.id);

  expect(result).toEqual(nockEnabled() ? exampleAutofillMock : getExpectedObject(exampleAutofillE2e, {documentId: document.id}));
});
