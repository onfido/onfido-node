import nock from "nock";
import snakecaseKeys from "snakecase-keys";
import { createReadStream } from "fs";

import { Applicant, Document, FileLike, LiveVideo, MotionCapture, Onfido, Region, Report } from "onfido-node";

import { exampleApplicant, exampleCheck, exampleDocument, exampleWebhook, exampleWorkflowRun } from "./testExamples";

export const onfido = new Onfido({ region: Region.EU, apiToken: process.env.ONFIDO_API_TOKEN || "api_token" });

export const createNock = (): nock.Scope =>
  nock("https://api.eu.onfido.com/v3.6");

export const nockEnabled = (): boolean =>
  process.env.NOCK_OFF !== 'true'

export const sampleApplicantId = process.env.ONFIDO_SAMPLE_APPLICANT_ID || "sample_applicant_id"

export function getExpectedObject( exampleObject: any, overrideProperties={} ) {
  // Don't perform any change when replies are mocked up
  if ( nockEnabled() ) {
    return exampleObject;
  }

  var expectedObject = { ... exampleObject, ... overrideProperties };

  if ('id' in expectedObject)
    expectedObject.id = expect.stringMatching(/^[0-9a-z-]+$/);

  if ('href' in expectedObject)
    expectedObject.href = expect.stringMatching(/^\/v3.6\/.+$/);

  if ('createdAt' in expectedObject)
    expectedObject.createdAt = expect.stringMatching(/^[0-9TZ:\-\.]+$/);

  return expectedObject;
}

export async function createApplicant( overrideProperties={} )
{
  const requestPayload = {
    firstName: "Test",
    lastName: "Applicant",
    address: {
      postcode: "AB12 3AB",
      country: "GBR"
    },
    location: {
      ipAddress: "127.0.0.1",
      countryOfResidence: "GBR"
    },
    ... overrideProperties
  }

  createNock()
    .post("/applicants/", snakecaseKeys(requestPayload))
    .reply(201, JSON.stringify(exampleApplicant));

  return onfido.applicant.create(requestPayload);
}

export async function cleanUpApplicants() {
  // Don't perform any clean-up when mocking is enabled
  // or sample applicant id is not good
  if ( nockEnabled() || sampleApplicantId.length != 36 ) {
    return;
  }

  const applicants = await onfido.applicant.list({
    page: 1,
    perPage: 20,
    includeDeleted: false
  });

  applicants.forEach(async function(applicant){
    if ( applicant.id != sampleApplicantId ) {
      await onfido.applicant.delete(applicant.id);
    }
  });
}

export async function uploadDocumentFromStream(applicant: Applicant, file: FileLike, documentType="driving_licence")
{
  createNock()
    .post("/documents/")
    .reply(201, JSON.stringify(exampleDocument));

  return onfido.document.upload({
    applicantId: applicant.id,
    file: file,
    type: documentType,
    location: {
      ipAddress: "127.0.0.1",
      countryOfResidence: "GBR"
    }
  });
}

export async function uploadDocument(applicant: Applicant, documentType="driving_licence")
{
  return uploadDocumentFromStream(applicant, createReadStream("test/media/sample_driving_licence.png"), documentType);
}

export async function createWebhook()
{
  const requestPayload = {
    url: "https://example.com",
    events: ["check.completed", "report.completed"]
  }

  createNock()
    .post("/webhooks/", requestPayload)
    .reply(201, JSON.stringify(exampleWebhook));

  return onfido.webhook.create(requestPayload);
}

export async function cleanUpWebhooks() {
  // Don't perform any clean-up when mocking is enabled
  if ( nockEnabled() ) {
    return;
  }

  const webhooks = await onfido.webhook.list();

  webhooks.forEach(async function(webhook){
    expect(await onfido.webhook.delete(webhook.id)).toBeUndefined();
  });
}

export async function createCheck(applicant: Applicant, document: Document, overrideProperties={}) {
  const requestPayload = {
    applicantId: applicant.id,
    reportNames: ["document", "identity_enhanced"],
    documentIds: [document.id],
    ... overrideProperties
  }

  createNock()
    .post("/checks/", snakecaseKeys(requestPayload))
    .reply(201, JSON.stringify(exampleCheck));

  return onfido.check.create(requestPayload);
}

export function sortByApplicantFirstName( a: Applicant, b: Applicant ) {
  if ( a.firstName < b.firstName ){
    return -1;
  }
  if ( a.firstName > b.firstName ){
    return 1;
  }
  return 0;
}

export function sortByDocumentType( a: Document, b: Document ) {
  if ( a.type < b.type ){
    return -1;
  }
  if ( a.type > b.type ){
    return 1;
  }
  return 0;
}

export function sortByLiveVideoId( a: LiveVideo, b: LiveVideo ) {
  if ( a.id < b.id ){
    return -1;
  }
  if ( a.id > b.id ){
    return 1;
  }
  return 0;
}

export function sortByMotionCaptureId( a: MotionCapture, b: MotionCapture ) {
  if ( a.id < b.id ){
    return -1;
  }
  if ( a.id > b.id ){
    return 1;
  }
  return 0;
}

export function sortByReportName( a: Report, b: Report ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

export function createWorkflowRun(applicant: Applicant, workflowId: string) {
  const requestPayload = {
    applicantId: applicant.id,
    workflowId: workflowId
  }

  createNock()
    .post("/workflow_runs/", snakecaseKeys(requestPayload))
    .reply(201, JSON.stringify(exampleWorkflowRun));

    return onfido.workflowRun.create(requestPayload);
}
