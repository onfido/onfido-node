import nock from "nock";
import { Check, Onfido } from "onfido-node";

const onfido = new Onfido({ apiToken: "api_token" });

const exampleCheck: Check = {
  id: "abc-123",
  reportIds: ["report-1", "report-2"],
  createdAt: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3/checks/123-abc",
  applicantId: "applicant-123",
  applicantProvidesData: false,
  status: "in_progress",
  tags: [],
  result: null,
  formUri: null,
  redirectUri: null,
  resultsUri: "https://dashboard.onfido.com/checks/123-abc"
};

const exampleCheckJson = {
  id: "abc-123",
  report_ids: ["report-1", "report-2"],
  created_at: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3/checks/123-abc",
  applicant_id: "applicant-123",
  applicant_provides_data: false,
  status: "in_progress",
  tags: [],
  result: null,
  form_uri: null,
  redirect_uri: null,
  results_uri: "https://dashboard.onfido.com/checks/123-abc"
};

it("creates a check", async () => {
  nock("https://api.onfido.com/v3")
    .post("/checks/", {
      applicant_id: "applicant-123",
      report_names: ["document", "identity_standard"],
      document_ids: ["document-123"]
    })
    .reply(201, exampleCheckJson);

  const check = await onfido.check.create({
    applicantId: "applicant-123",
    reportNames: ["document", "identity_standard"],
    documentIds: ["document-123"]
  });

  expect(check).toEqual(exampleCheck);
});

it("finds a check", async () => {
  nock("https://api.onfido.com/v3")
    .get("/checks/123-abc")
    .reply(200, exampleCheckJson);

  const check = await onfido.check.find("123-abc");

  expect(check).toEqual(exampleCheck);
});

it("lists checks", async () => {
  nock("https://api.onfido.com/v3")
    .get("/checks/")
    .query({ applicant_id: "applicant-123" })
    .reply(200, { checks: [exampleCheckJson, exampleCheckJson] });

  const checks = await onfido.check.list("applicant-123");

  expect(checks).toEqual([exampleCheck, exampleCheck]);
});

it("resumes a check", async () => {
  nock("https://api.onfido.com/v3")
    .post("/checks/abc-123/resume")
    .reply(204);

  expect(await onfido.check.resume("abc-123")).toBeUndefined();
});
