import { Webhook } from "onfido-node";

import {
  onfido,
  getExpectedObject,
  cleanUpWebhooks,
  createWebhook,
} from "../test-helpers";
import { exampleWebhook } from "../test-examples";

function getExpectedWebhook(exampleWebhook: Webhook) {
  return getExpectedObject(exampleWebhook, {
    token: expect.stringMatching(/^[0-9a-zA-Z_-]+$/),
  });
}

let webhook: Webhook;

beforeEach(async () => {
  webhook = (await createWebhook()).data;
});

afterAll(() => {
  return cleanUpWebhooks();
});

it("creates a webhook", async () => {
  expect(webhook).toEqual(getExpectedWebhook(exampleWebhook));
});

it("finds a webhook", async () => {
  const lookupWebhook = await onfido.findWebhook(webhook.id);

  expect(lookupWebhook.data).toEqual(getExpectedWebhook(exampleWebhook));
});

it("updates a webhook", async () => {
  var patchedWebhook = { ...exampleWebhook, enabled: false };

  const updatedWebhook = await onfido.updateWebhook(webhook.id, {
    enabled: false,
  });

  expect(updatedWebhook.data).toEqual(
    getExpectedWebhook({ ...exampleWebhook, enabled: false }),
  );
});

it("deletes a webhook", async () => {
  expect((await onfido.deleteWebhook(webhook.id)).status).toEqual(204);
});

it("lists webhooks", async () => {
  // create one extra webhook
  await createWebhook();

  const webhooks = await onfido.listWebhooks();

  expect(webhooks.data.webhooks).toEqual(
    expect.arrayContaining([
      getExpectedWebhook(exampleWebhook),
      getExpectedWebhook(exampleWebhook),
    ]),
  );
});
