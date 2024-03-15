import { Applicant, Document } from "onfido-node";

import {
  onfido,
  getExpectedObject,
  createApplicant,
  cleanUpApplicants,
  uploadDocument
} from "../test-helpers";

const exampleAutofillE2e = {
  document_id: "21345-xxx",
  document_classification: {
    issuing_country: "GBR",
    document_type: "driving_licence"
  },
  extracted_data: {
    date_of_birth: "1976-03-11",
    date_of_expiry: "2031-05-28",
    document_number: "200407512345",
    first_name: "SARAH",
    gender: "Female",
    last_name: "MORGAN"
  }
};

let applicant: Applicant;
let document: Document;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
  document = (await uploadDocument(applicant)).data;
});

afterAll(() => {
  return cleanUpApplicants();
});

it("performs autofill", async () => {
  const result = await onfido.extract({ document_id: document.id });

  expect(result.data).toEqual(
    getExpectedObject(exampleAutofillE2e, { document_id: document.id })
  );
});
