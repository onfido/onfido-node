import { Report } from "onfido-node";
import { createNock, onfido } from "../testHelpers";

const exampleReport: Report = {
  id: "abc-123",
  createdAt: "2020-01-01T00:00:00Z",
  name: "document",
  href: "https://api.onfido.com/v3.1/reports/123-abc",
  status: "in_progress",
  result: null,
  subResult: null,
  properties: null,
  breakdown: null,
  documents: [{ id: "document-id" }],
  checkId: "aa111111-1111-1111-1111-111111111111"
};

const exampleReportJson = {
  id: "abc-123",
  created_at: "2020-01-01T00:00:00Z",
  name: "document",
  href: "https://api.onfido.com/v3.1/reports/123-abc",
  status: "in_progress",
  result: null,
  sub_result: null,
  properties: null,
  breakdown: null,
  documents: [{ id: "document-id" }],
  check_id: "aa111111-1111-1111-1111-111111111111"
};

it("finds a report", async () => {
  createNock()
    .get("/reports/123-abc")
    .reply(200, exampleReportJson);

  const report = await onfido.report.find("123-abc");

  expect(report).toEqual(exampleReport);
});

it("lists reports", async () => {
  createNock()
    .get("/reports/")
    .query({ check_id: "check-123" })
    .reply(200, { reports: [exampleReportJson, exampleReportJson] });

  const report = await onfido.report.list("check-123");

  expect(report).toEqual([exampleReport, exampleReport]);
});

it("resumes a report", async () => {
  createNock()
    .post("/reports/abc-123/resume")
    .reply(204);

  expect(await onfido.report.resume("abc-123")).toBeUndefined();
});

it("cancels a report", async () => {
  createNock()
    .post("/reports/abc-123/cancel")
    .reply(204);

  expect(await onfido.report.cancel("abc-123")).toBeUndefined();
});
