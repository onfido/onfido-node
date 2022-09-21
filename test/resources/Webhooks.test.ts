import { Webhook } from "onfido-node";

import { createNock, onfido, getExpectedObject, cleanUpWebhooks, createWebhook } from "../testHelpers";
import { exampleWebhook } from "../testExamples";

function getExpectedWebhook(exampleWebhook: Webhook)
{
  return getExpectedObject(exampleWebhook, {
    token: expect.stringMatching(/^[0-9a-zA-Z_-]+$/) });
}

let webhook: Webhook;

afterAll(() => {
  return cleanUpWebhooks();
});

it("creates a webhook", async () => {
  webhook = await createWebhook()
  expect(webhook).toEqual(getExpectedWebhook(exampleWebhook));
});

it("finds a webhook", async () => {
  createNock()
    .get("/webhooks/" + webhook.id)
    .reply(200, JSON.stringify(exampleWebhook));

  const otherWebhook = await onfido.webhook.find(webhook.id);

  expect(otherWebhook).toEqual(getExpectedWebhook(exampleWebhook));
});

it("updates a webhook", async () => {
  var modifiedWebhook = { ... exampleWebhook };
  modifiedWebhook.enabled = false

  createNock()
    .put("/webhooks/" + webhook.id, { enabled: false })
    .reply(200, JSON.stringify(modifiedWebhook));

  const updatedWebhook = await onfido.webhook.update(webhook.id, {
    enabled: false
  });

  expect(updatedWebhook).toEqual(getExpectedWebhook(modifiedWebhook));
});

it("deletes a webhook", async () => {
  createNock()
    .delete("/webhooks/" + webhook.id)
    .reply(204);

  expect(await onfido.webhook.delete(webhook.id)).toBeUndefined();
});

it("lists webhooks", async () => {
  // create two webhooks
  await createWebhook();
  await createWebhook();

  createNock()
    .get("/webhooks/")
    .reply(200, JSON.stringify({ webhooks: [exampleWebhook, exampleWebhook] }));

  const webhooks = await onfido.webhook.list();

  expect(webhooks).toEqual([getExpectedWebhook(exampleWebhook),
                            getExpectedWebhook(exampleWebhook)]);
});
