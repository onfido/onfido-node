import { Applicant, Check, Document, Webhook, OnfidoDownload } from "onfido-node";

import { createNock, onfido, getExpectedObject, createApplicant, cleanUpApplicants, uploadDocument, createWebhook, createCheck, cleanUpWebhooks } from "../testHelpers";
import { exampleCheck } from "../testExamples";

function getExpectedCheck(exampleCheck: Check, overrideProperties={})
{
  return getExpectedObject(exampleCheck, {
    applicantId: expect.stringMatching(/^[0-9a-z-]+$/),
    resultsUri: expect.stringMatching(/^https\:\/\/dashboard\.onfido\.com\/checks\/[0-9a-z-]+$/),
    privacyNoticesReadConsentGiven: null,
    reportIds: [expect.stringMatching(/^[0-9a-z-]+$/), expect.stringMatching(/^[0-9a-z-]+$/)],
    webhookIds: expect.arrayContaining([webhook1.id, webhook2.id]),
    result: expect.anything(),
    status: expect.anything(),
    version: "3.5",
    sandbox: true,
    paused: false,
    ... overrideProperties
   });
}

let applicant: Applicant;
let document: Document;
let webhook1: Webhook;
let webhook2: Webhook;
let check: Check;

async function init() {
  applicant = await createApplicant();
  document = await uploadDocument(applicant.id);
  webhook1 = await createWebhook();
  webhook2 = await createWebhook();
}

beforeAll(() => {
  return init();
});

afterAll(() => {
  return Promise.all([cleanUpApplicants(), cleanUpWebhooks()]);
});

it("creates a check", async () => {
  check = await createCheck(applicant.id, document.id, { webhook_ids: [webhook1.id, webhook2.id] });

  expect(check).toEqual(getExpectedCheck(exampleCheck, {applicantId: applicant.id, result: null, status: "in_progress"}));
});

it("creates a check for generating a rejected sub-result for document report in the sandbox", async () => {
  const anotherApplicant = await createApplicant();
  const anotherDocument = await uploadDocument(anotherApplicant.id);
  const anotherCheck = await createCheck(anotherApplicant.id, anotherDocument.id, { webhook_ids: [webhook1.id, webhook2.id], sub_result: "rejected" });

  expect(anotherCheck).toEqual(getExpectedCheck(exampleCheck, {applicantId: anotherApplicant.id, result: null, status: "in_progress"}));
});

it("creates a check for generating a consider result for a report in the sandbox", async () => {
  const anotherApplicant = await createApplicant();
  const anotherDocument = await uploadDocument(anotherApplicant.id);
  const anotherCheck = await createCheck(anotherApplicant.id, anotherDocument.id, { webhook_ids: [webhook1.id, webhook2.id], consider: ["identity_enhanced"] });

  expect(anotherCheck).toEqual(getExpectedCheck(exampleCheck, {applicantId: anotherApplicant.id, result: null, status: "in_progress"}));
});

it("finds a check", async () => {
  createNock()
    .get("/checks/" + check.id)
    .reply(200, JSON.stringify(exampleCheck));

  const lookupCheck = await onfido.check.find(check.id);

  // Providing actual status and result as parameter as it might change overtime
  expect(lookupCheck).toEqual(getExpectedCheck(exampleCheck, {applicantId: applicant.id, status: lookupCheck.status, result: lookupCheck.result}));
});

it("lists checks", async () => {
  const anotherDocument = await uploadDocument(applicant.id);
  const extraCheck = await createCheck(applicant.id, anotherDocument.id, { webhook_ids: [webhook1.id, webhook2.id] });

  createNock()
    .get("/checks/")
    .query({ applicant_id: applicant.id })
    .reply(200, JSON.stringify({ checks: [exampleCheck, extraCheck] }));

  const checks = await onfido.check.list(applicant.id);

  // Providing actual status and result as parameter as they might change overtime
  expect(checks).toEqual([
    getExpectedCheck(exampleCheck, {status: checks[0].status, result: checks[0].result}),
    getExpectedCheck(extraCheck, {status: checks[1].status, result: checks[1].result})]);
});

it("resumes a check", async () => {
  createNock()
    .post("/checks/" + check.id + "/resume")
    .reply(204);

  expect(await onfido.check.resume(check.id)).toBeUndefined();
});

it("downloads a check", async () => {
  createNock()
    .get("/checks/" + check.id + "/download")
    .reply(200, {});

  const file = await onfido.check.download(check.id);

  expect(file).toBeInstanceOf(OnfidoDownload);
});
