import { createNock, onfido } from "../testHelpers";

// Fake data, taken from documentation.
const exampleAutofillJson = {
  document_id: "21345-xxx",
  document_classification: {
    issuing_country: "FRA",
    document_type: "national_identity_card"
  },
  extracted_data: {
    date_of_birth: "1990-07-21",
    date_of_expiry: "2025-07-07",
    document_number: "200407512345",
    first_name: "AMANDINE CHANTAL",
    gender: "Female",
    last_name: "MAVARINE",
    mrz_line1: "IDFRAMAVARINE<<<<<<<<<<<<<<<<<075123",
    mrz_line2: "2000000000000AMANDINE<CHANT9007219F5",
    nationality: "FRA"
  }
};

const exampleAutofillResult = {
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
    nationality: "FRA"
  }
};

it("performs autofill", async () => {
  createNock()
    .post("/extractions/", {
      document_id: "21345-xxx"
    })
    .reply(201, exampleAutofillJson);

  const result = await onfido.autofill.perform("21345-xxx");
  expect(result).toEqual(exampleAutofillResult);
});
