import { Applicant, Check, Document, Webhook } from "onfido-node";

import {
  onfido,
  getExpectedObject,
  createApplicant,
  cleanUpApplicants,
  uploadDocument,
  createWebhook,
  createCheck,
  cleanUpWebhooks
} from "../test-helpers";
import { exampleCheck } from "../test-examples";

function getExpectedCheck(exampleCheck: Check, overrideProperties = {}) {
  return getExpectedObject(exampleCheck, {
    applicant_id: expect.stringMatching(/^[0-9a-z-]+$/),
    results_uri: expect.stringMatching(
      /^https\:\/\/dashboard\.onfido\.com\/checks\/[0-9a-z-]+$/
    ),
    privacy_notices_read_consent_given: null,
    report_ids: [
      expect.stringMatching(/^[0-9a-z-]+$/),
      expect.stringMatching(/^[0-9a-z-]+$/)
    ],
    webhook_ids: expect.arrayContaining([webhook1.id, webhook2.id]),
    result: expect.anything(),
    status: expect.anything(),
    version: "3.6",
    sandbox: true,
    paused: false,
    ...overrideProperties
  });
}

let applicant: Applicant;
let document: Document;
let webhook1: Webhook;
let webhook2: Webhook;

beforeAll(async () => {
  webhook1 = (await createWebhook()).data;
  webhook2 = (await createWebhook()).data;
});

beforeEach(async () => {
  applicant = (await createApplicant()).data;
  document = (await uploadDocument(applicant)).data;
});

afterAll(() => {
  return Promise.all([cleanUpApplicants(), cleanUpWebhooks()]);
});

it("creates a check", async () => {
  const check = await createCheck(applicant, document, {
    webhook_ids: [webhook1.id, webhook2.id]
  });

  expect(check.data).toEqual(
    getExpectedCheck(exampleCheck, {
      applicant_id: applicant.id,
      result: null,
      status: "in_progress"
    })
  );
});

it("creates a check for generating a rejected sub-result for document report in the sandbox", async () => {
  const check = await createCheck(applicant, document, {
    webhook_ids: [webhook1.id, webhook2.id],
    sub_result: "rejected"
  });

  expect(check.data).toEqual(
    getExpectedCheck(exampleCheck, {
      applicant_id: applicant.id,
      result: null,
      status: "in_progress"
    })
  );
});

it("creates a check for generating a consider result for a report in the sandbox", async () => {
  const check = await createCheck(applicant, document, {
    webhook_ids: [webhook1.id, webhook2.id],
    consider: ["identity_enhanced"]
  });

  expect(check.data).toEqual(
    getExpectedCheck(exampleCheck, {
      applicant_id: applicant.id,
      result: null,
      status: "in_progress"
    })
  );
});

it("finds a check", async () => {
  const check = await createCheck(applicant, document, {
    webhook_ids: [webhook1.id, webhook2.id]
  });

  const lookupCheck = (await onfido.findCheck(check.data.id)).data;

  // Providing actual status and result as parameter since they might have changed overtime
  expect(lookupCheck).toEqual(
    getExpectedCheck(exampleCheck, {
      applicant_id: applicant.id,
      status: lookupCheck.status,
      result: lookupCheck.result
    })
  );
});

it("lists checks", async () => {
  await createCheck(applicant, document, {
    webhook_ids: [webhook1.id, webhook2.id]
  });
  await createCheck(applicant, document, {
    webhook_ids: [webhook1.id, webhook2.id]
  });

  const checks = (await onfido.listChecks(applicant.id)).data.checks;

  // Providing actual status and result as parameter as they might change overtime
  expect(checks).toEqual([
    getExpectedCheck(exampleCheck, {
      status: checks[0].status,
      result: checks[0].result
    }),
    getExpectedCheck(exampleCheck, {
      status: checks[1].status,
      result: checks[1].result
    })
  ]);
});

it("resumes a check", async () => {
  const check = await createCheck(applicant, document, {
    webhook_ids: [webhook1.id, webhook2.id]
  });

  expect((await onfido.resumeCheck(check.data.id)).status).toEqual(204);
});

it("downloads a check", async () => {
  const check = await createCheck(applicant, document, {
    webhook_ids: [webhook1.id, webhook2.id]
  });

  const file = await onfido.downloadCheck(check.data.id);

  expect(file.status).toEqual(200);
  expect(file.headers["content-type"]).toEqual("application/pdf");
  expect(file.data.buffer.slice(0, 5)).toEqual("%PDF-");
  expect(file.data.filename).toBeTruthy();
});
