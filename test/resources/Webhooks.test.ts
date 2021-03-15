import nock from "nock";
import { Onfido, Webhook } from "onfido-node";

const onfido = new Onfido({ apiToken: "api_token" });

const exampleWebhook: Webhook = {
  id: "abc-123",
  url: "https://example.com",
  enabled: true,
  events: ["check.completed", "report.completed"],
  token: "webhook-token",
  href: "/v3/webhooks/abc-132"
};

// All property names are the same in camelCase and snake_case.
const exampleWebhookJson = exampleWebhook;

it("creates a webhook", async () => {
  nock("https://api.onfido.com/v3.1")
    .post("/webhooks/", { url: "https://example.com" })
    .reply(201, exampleWebhookJson);

  const webhook = await onfido.webhook.create({
    url: "https://example.com"
  });

  expect(webhook).toEqual(exampleWebhook);
});

it("finds a webhook", async () => {
  nock("https://api.onfido.com/v3.1")
    .get("/webhooks/123-abc")
    .reply(200, exampleWebhookJson);

  const webhook = await onfido.webhook.find("123-abc");

  expect(webhook).toEqual(exampleWebhook);
});

it("updates a webhook", async () => {
  nock("https://api.onfido.com/v3.1")
    .put("/webhooks/123-abc", { enabled: false })
    .reply(200, exampleWebhookJson);

  const webhook = await onfido.webhook.update("123-abc", {
    enabled: false
  });

  expect(webhook).toEqual(exampleWebhookJson);
});

it("deletes a webhook", async () => {
  nock("https://api.onfido.com/v3.1")
    .delete("/webhooks/123-abc")
    .reply(204);

  expect(await onfido.webhook.delete("123-abc")).toBeUndefined();
});

it("lists webhooks", async () => {
  nock("https://api.onfido.com/v3.1")
    .get("/webhooks/")
    .reply(200, { webhooks: [exampleWebhookJson, exampleWebhookJson] });

  const webhooks = await onfido.webhook.list();

  expect(webhooks).toEqual([exampleWebhook, exampleWebhook]);
});
