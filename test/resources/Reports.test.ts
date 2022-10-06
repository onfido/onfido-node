import { Applicant, Check, Document, Report } from "onfido-node";

import { createNock, onfido, getExpectedObject, createApplicant, uploadDocument, createCheck } from "../testHelpers";

function getExpectedReport(exampleReport: Report, overrideProperties={})
{
  return getExpectedObject(exampleReport, {
    checkId: expect.stringMatching(/^[0-9a-z-]+$/),
    documents: expect.anything(),
    breakdown: expect.anything(),
    properties: expect.anything(),
    status: expect.anything(),
    ... overrideProperties
   });
}

function sort_by_name( a: Report, b: Report ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

let applicant: Applicant;
let document: Document;
let check: Check;
let report: Report;

async function init() {
  applicant = await createApplicant();
  document = await uploadDocument(applicant.id);
  check = await createCheck(applicant.id, document.id, { webhook_ids: [] });
}

beforeAll(() => {
  return init();
});

const exampleReport: Report = {
  id: "abc-123",
  createdAt: "2020-01-01T00:00:00Z",
  name: "document",
  href: "https://api.onfido.com/v3.5/reports/123-abc",
  status: "awaiting_data",
  result: null,
  subResult: null,
  properties: {},
  breakdown: null,
  documents: [{ id: "document-id" }],
  checkId: "aa111111-1111-1111-1111-111111111111"
};

it("finds a report", async () => {
  createNock()
    .get("/reports/" + check.reportIds[1])
    .reply(200, JSON.stringify(exampleReport));

  report = await onfido.report.find(check.reportIds[1]);

  expect(report).toEqual(getExpectedReport(exampleReport));
});

it("lists reports", async () => {
  createNock()
    .get("/reports/")
    .query({ check_id: check.id })
    .reply(200, JSON.stringify({ reports: [exampleReport, exampleReport] }));

  const report = (await onfido.report.list(check.id)).sort(sort_by_name);

  // Providing actual result and subresult as parameter as they might change overtime
  expect(report).toEqual([getExpectedReport(exampleReport, { name: 'document',
                                                             result: report[0].result,
                                                             subResult: report[0].result }),
                          getExpectedReport(exampleReport, { name: 'identity_enhanced',
                                                             result: report[1].result,
                                                             subResult: report[1].result })]);
  });

it("resumes a report", async () => {
  createNock()
    .post("/reports/" + report.id + "/resume")
    .reply(204);

  expect(await onfido.report.resume(report.id)).toBeUndefined();
});

it("cancels a report", async () => {
  createNock()
    .post("/reports/" + report.id + "/cancel")
    .reply(204);

  expect(await onfido.report.cancel(report.id)).toBeUndefined();
});
