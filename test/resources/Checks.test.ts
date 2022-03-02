import { Check, OnfidoDownload } from "onfido-node";
import { createNock, onfido } from "../testHelpers";

const exampleCheck: Check = {
  id: "abc-123",
  reportIds: ["report-1", "report-2"],
  createdAt: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.3/checks/123-abc",
  applicantId: "applicant-123",
  applicantProvidesData: false,
  status: "in_progress",
  tags: [],
  result: null,
  formUri: null,
  redirectUri: null,
  resultsUri: "https://dashboard.onfido.com/checks/123-abc",
  privacyNoticesReadConsentGiven: true,
  webhookIds: ["webhook-123"]
};

const exampleCheckJson = {
  id: "abc-123",
  report_ids: ["report-1", "report-2"],
  created_at: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.3/checks/123-abc",
  applicant_id: "applicant-123",
  applicant_provides_data: false,
  status: "in_progress",
  tags: [],
  result: null,
  form_uri: null,
  redirect_uri: null,
  results_uri: "https://dashboard.onfido.com/checks/123-abc",
  privacy_notices_read_consent_given: true,
  webhook_ids: ["webhook-123"]
};

it("creates a check", async () => {
  createNock()
    .post("/checks/", {
      applicant_id: "applicant-123",
      report_names: ["document", "identity_enhanced"],
      document_ids: ["document-123"],
      privacy_notices_read_consent_given: true,
      webhook_ids: ["abc", "def"]
    })
    .reply(201, exampleCheckJson);

  const check = await onfido.check.create({
    applicantId: "applicant-123",
    reportNames: ["document", "identity_enhanced"],
    documentIds: ["document-123"],
    privacyNoticesReadConsentGiven: true,
    webhookIds: ["abc", "def"]
  });
  
  expect(check).toEqual(exampleCheck);
});

it("creates a check for generating a rejected sub-result for document report in the sandbox", async () => {
  createNock()
    .post("/checks/", {
      applicant_id: "applicant-123",
      report_names: ["document", "identity_enhanced"],
      document_ids: ["document-123"],
      privacy_notices_read_consent_given: true,
      webhook_ids: ["abc", "def"],
      sub_result: "rejected"
    })
    .reply(201, exampleCheckJson);

  const subResultCheck = await onfido.check.create({
    applicantId: "applicant-123",
    reportNames: ["document", "identity_enhanced"],
    documentIds: ["document-123"],
    privacyNoticesReadConsentGiven: true,
    webhookIds: ["abc", "def"],
    subResult: "rejected"
  });

  expect(subResultCheck).toEqual(exampleCheck);
});

it("creates a check for generating a consider result for a report in the sandbox", async () => {
  createNock()
    .post("/checks/", {
      applicant_id: "applicant-123",
      report_names: ["document", "identity_enhanced"],
      document_ids: ["document-123"],
      privacy_notices_read_consent_given: true,
      webhook_ids: ["abc", "def"],
      consider: ["identity_enhanced"]
    })
    .reply(201, exampleCheckJson);

  const considerCheck = await onfido.check.create({
    applicantId: "applicant-123",
    reportNames: ["document", "identity_enhanced"],
    documentIds: ["document-123"],
    privacyNoticesReadConsentGiven: true,
    webhookIds: ["abc", "def"],
    consider: ["identity_enhanced"]
  });

  expect(considerCheck).toEqual(exampleCheck);
});

it("finds a check", async () => {
  createNock()
    .get("/checks/123-abc")
    .reply(200, exampleCheckJson);

  const check = await onfido.check.find("123-abc");

  expect(check).toEqual(exampleCheck);
});

it("lists checks", async () => {
  createNock()
    .get("/checks/")
    .query({ applicant_id: "applicant-123" })
    .reply(200, { checks: [exampleCheckJson, exampleCheckJson] });

  const checks = await onfido.check.list("applicant-123");

  expect(checks).toEqual([exampleCheck, exampleCheck]);
});

it("resumes a check", async () => {
  createNock()
    .post("/checks/abc-123/resume")
    .reply(204);

  expect(await onfido.check.resume("abc-123")).toBeUndefined();
});

it("downloads a check", async () => {
  createNock()
    .get("/checks/abc-123/download")
    .reply(200, {});

  const file = await onfido.check.download("abc-123");

  expect(file).toBeInstanceOf(OnfidoDownload);
});
