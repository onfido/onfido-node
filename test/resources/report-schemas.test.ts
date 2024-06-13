import {
  Applicant,
  Check,
  Document,
  DocumentReport,
  Report
} from "onfido-node";
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
  repeatRequestUntilStatusChanges,
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

  const report: Report = await repeatRequestUntilStatusChanges(
    "findReport",
    [check.report_ids[0]],
    "complete"
  );

  expect(report).toEqual(getExpectedDocumentReport(exampleDocumentReport));
  expect(report.name).toEqual("document");

  const document_report = report as DocumentReport;

  expect(
    document_report.breakdown.data_comparison.breakdown.issuing_country.result
  ).toEqual("clear");
  expect(document_report.properties.date_of_birth).toEqual("1990-01-01");
}, 30000);

it("schema of facial similarity photo report should be valid", async () => {
  await uploadLivePhoto(applicant);
  const check: Check = (
    await createCheck(applicant, document, {
      report_names: ["facial_similarity_photo_fully_auto"]
    })
  ).data;

  const report: Report = await repeatRequestUntilStatusChanges(
    "findReport",
    [check.report_ids[0]],
    "complete"
  );

  expect(report).toEqual(
    getExpectedFacialSimilarityReport(exampleFacialSimilarityPhotoReport)
  );
}, 30000);
