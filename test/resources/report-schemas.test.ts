import {
  Applicant,
  Check,
  DeviceIntelligenceReport,
  Document,
  DocumentReport,
  DocumentWithAddressInformationReport,
  DocumentWithDrivingLicenceInformationReport,
  FacialSimilarityPhotoReport,
  Report,
  ReportConfigurationFacialSimilarityUseCaseEnum,
  ReportName,
} from "onfido-node";
import {
  exampleDocumentReport,
  exampleFacialSimilarityPhotoReport,
} from "../test-examples";
import {
  cleanUpApplicants,
  createApplicant,
  createCheck,
  getExpectedDocumentReport,
  getExpectedFacialSimilarityPhotoReport,
  repeatRequestUntilStatusChanges,
  uploadDocument,
  uploadLivePhoto,
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
      report_names: ["document"],
    })
  ).data;

  const report: Report = await repeatRequestUntilStatusChanges(
    "findReport",
    [check.report_ids[0]],
    "complete",
  );

  expect(report).toEqual(getExpectedDocumentReport(exampleDocumentReport));
  expect(report.name).toEqual("document");

  const document_report = report as DocumentReport;

  expect(
    document_report.breakdown.data_comparison.breakdown.issuing_country.result,
  ).toEqual("clear");
  expect(document_report.properties.date_of_birth).toEqual("1990-01-01");
  expect(document_report.properties.document_subtype).toBeUndefined();
}, 30000);

it("schema of facial similarity photo report should be valid", async () => {
  await uploadLivePhoto(applicant);

  const check: Check = (
    await createCheck(applicant, document, {
      report_names: [ReportName.FacialSimilarityPhotoFullyAuto],
      report_configuration: {
        facial_similarity_photo_fully_auto: {
          use_case:
            ReportConfigurationFacialSimilarityUseCaseEnum.Reverification,
        },
      },
    })
  ).data;

  const report: Report = await repeatRequestUntilStatusChanges(
    "findReport",
    [check.report_ids[0]],
    "complete",
  );

  expect(report).toEqual(
    getExpectedFacialSimilarityPhotoReport(exampleFacialSimilarityPhotoReport, {
      live_photos: [
        {
          id: (report as FacialSimilarityPhotoReport).live_photos[0].id,
        },
      ],
    }),
  );
}, 30000);

it("schema of document with address information report should be valid", async () => {
  await uploadLivePhoto(applicant);
  const check: Check = (
    await createCheck(applicant, document, {
      report_names: [ReportName.DocumentWithAddressInformation],
    })
  ).data;

  const report: Report = await repeatRequestUntilStatusChanges(
    "findReport",
    [check.report_ids[0]],
    "complete",
  );

  const document_report = report as DocumentWithAddressInformationReport;

  expect(document_report).toEqual(
    getExpectedDocumentReport(exampleDocumentReport, {
      name: "document_with_address_information",
    }),
  );

  expect(document_report.properties.barcode[0].document_type).toEqual(
    "driving_licence",
  );
}, 30000);

it("schema of document with driving license information report should be valid", async () => {
  await uploadLivePhoto(applicant);
  const check: Check = (
    await createCheck(applicant, document, {
      report_names: [ReportName.DocumentWithDrivingLicenceInformation],
    })
  ).data;

  const report: Report = await repeatRequestUntilStatusChanges(
    "findReport",
    [check.report_ids[0]],
    "complete",
  );

  const document_report = report as DocumentWithDrivingLicenceInformationReport;

  expect(document_report.name).toEqual(
    "document_with_driving_licence_information",
  );
  expect(document_report.properties.driving_licence_information).not.toBeNull();
}, 30000);

it("schema of device intelligence report should be valid", async () => {
  await uploadLivePhoto(applicant);
  const check: Check = (
    await createCheck(applicant, document, {
      report_names: [ReportName.DeviceIntelligence],
    })
  ).data;

  const report: Report = await repeatRequestUntilStatusChanges(
    "findReport",
    [check.report_ids[0]],
    "complete",
  );

  const device_intelligence = report as DeviceIntelligenceReport;

  expect(device_intelligence.name).toEqual("device_intelligence");
  expect(device_intelligence.breakdown).not.toBeNull();
  expect(device_intelligence.properties).not.toBeNull();
}, 30000);
