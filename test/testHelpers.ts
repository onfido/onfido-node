import nock from "nock";
import snakecaseKeys from "snakecase-keys";
import { createReadStream } from "fs";

import { Onfido, Region } from "onfido-node";

import { exampleApplicant, exampleCheck, exampleDocument, exampleWebhook } from "./testExamples";

export const onfido = new Onfido({ region: Region.EU, apiToken: process.env.ONFIDO_API_TOKEN || "api_token" });

export const createNock = (): nock.Scope =>
  nock("https://api.eu.onfido.com/v3.4");

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
    expectedObject.href = expect.stringMatching(/^\/v3.4\/.+$/);

  if ('createdAt' in expectedObject)
    expectedObject.createdAt = expect.stringMatching(/^[0-9TZ:-]+$/);

  return expectedObject;
}

export async function createApplicant()
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
    }
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
      expect(await onfido.applicant.delete(applicant.id)).toBeUndefined();
    }
  });
}

export async function uploadDocument(applicant_id: string)
{
  createNock()
    .post("/documents/")
    .reply(201, JSON.stringify(exampleDocument));

  return onfido.document.upload({
    applicantId: applicant_id,
    file: createReadStream("test/media/sample_driving_licence.png"),
    type: "driving_licence",
    location: {
      ipAddress: "127.0.0.1",
      countryOfResidence: "GBR"
    }
  });
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

export async function createCheck(applicant_id: string, document_id: string, overrideProperties={}) {
  const requestPayload = {
    applicantId: applicant_id,
    reportNames: ["document", "identity_enhanced"],
    documentIds: [document_id],
    ... overrideProperties
  }

  createNock()
    .post("/checks/", snakecaseKeys(requestPayload))
    .reply(201, JSON.stringify(exampleCheck));

  return onfido.check.create(requestPayload);
}
