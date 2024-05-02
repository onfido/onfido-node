import { Applicant, Check, Document, Report } from "onfido-node";
import {
  exampleDocumentReport,
  exampleFacialSimilarityPhotoReport
} from "../test-examples";
import {
  cleanUpApplicants,
  createApplicant,
  createCheck,
  getExpectedDocumentReport,
  getExpectedFacialSimilarityReport,
  onfido,
  sleep,
  uploadDocument,
  uploadLivePhoto
} from "../test-helpers";

let applicant: Applicant;
let document: Document;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
  document = (await uploadDocument(applicant)).data;
});

afterAll(() => {
  return Promise.all([cleanUpApplicants()]);
});

it("schema of document report should be valid", async () => {
  const check: Check = (
    await createCheck(applicant, document, {
      webhook_ids: [],
      report_names: ["document"]
    })
  ).data;

  let report: Report = (await onfido.findReport(check.report_ids[0])).data;
  while (report.status !== "complete") {
    await sleep(1000);
    report = (await onfido.findReport(check.report_ids[0])).data;
  }

  expect(report).toEqual(getExpectedDocumentReport(exampleDocumentReport));
}, 30000);

it("schema of facial similarity photo report should be valid", async () => {
  await uploadLivePhoto(applicant);
  const check: Check = (
    await createCheck(applicant, document, {
      report_names: ["facial_similarity_photo_fully_auto"]
    })
  ).data;

  let report: Report = (await onfido.findReport(check.report_ids[0])).data;
  while (report.status !== "complete") {
    await sleep(1000);
    report = (await onfido.findReport(check.report_ids[0])).data;
  }

  expect(report).toEqual(
    getExpectedFacialSimilarityReport(exampleFacialSimilarityPhotoReport)
  );
}, 30000);
