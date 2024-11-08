import { Applicant, Check, Document, Report } from "onfido-node";

import {
  onfido,
  getExpectedObject,
  createApplicant,
  uploadDocument,
  createCheck,
  sortByReportName
} from "../test-helpers";

function getExpectedReport(exampleReport: Report, overrideProperties = {}) {
  return getExpectedObject(exampleReport, {
    check_id: expect.stringMatching(/^[0-9a-z-]+$/),
    documents: expect.anything(),
    breakdown: expect.anything(),
    properties: expect.anything(),
    status: expect.anything(),
    ...overrideProperties
  });
}

let applicant: Applicant;
let document: Document;
let check: Check;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
  document = (await uploadDocument(applicant)).data;
  check = (await createCheck(applicant, document, { webhook_ids: [] })).data;
});

const exampleReport: Report = {
  id: "abc-123",
  created_at: "2020-01-01T00:00:00Z",
  name: "document",
  href: "https://api.onfido.com/v3.6/reports/123-abc",
  status: "awaiting_data",
  result: null,
  sub_result: null,
  documents: [{ id: "document-id" }],
  check_id: "aa111111-1111-1111-1111-111111111111"
};

it("finds a report", async () => {
  const report = await onfido.findReport(check.report_ids[1]);

  expect(report.data).toEqual(getExpectedReport(exampleReport));
});

it("lists reports", async () => {
  const reports = (await onfido.listReports(check.id)).data.reports.sort(
    sortByReportName
  );

  // Providing actual result and sub_result as parameter as they might change overtime
  expect(reports).toEqual([
    getExpectedReport(exampleReport, {
      name: "document",
      result: reports[0].result,
      sub_result: reports[0].sub_result
    }),
    getExpectedReport(exampleReport, {
      name: "identity_enhanced",
      result: reports[1].result,
      sub_result: reports[1].sub_result
    })
  ]);

  expect(reports.find(report => report.name === "document").name).toEqual(
    "document"
  );
});

it("resumes a report", async () => {
  expect((await onfido.resumeReport(check.report_ids[1])).status).toEqual(204);
});

it("cancels a report", async () => {
  expect((await onfido.cancelReport(check.report_ids[1])).status).toEqual(204);
});
