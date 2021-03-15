import { OnfidoError, WebhookEvent, WebhookEventVerifier } from "onfido-node";

const webhookToken = "_ABC123abc123ABC123abc123ABC123_";
const verifier = new WebhookEventVerifier(webhookToken);

const rawEvent = `{"payload":{"resource_type":"check","action":"check.completed","object":{"id":"check-123","status":"complete","completed_at_iso8601":"2020-01-01T00:00:00Z","href":"https://api.onfido.com/v3.1/checks/check-123"}}}`;

const expectedEvent: WebhookEvent = {
  action: "check.completed",
  resourceType: "check",
  object: {
    id: "check-123",
    href: "https://api.onfido.com/v3.1/checks/check-123",
    status: "complete",
    completedAtIso8601: "2020-01-01T00:00:00Z"
  }
};

it("returns the payload if the signature is valid", () => {
  const signature =
    "a0082d7481f9f0a2907583dbe1f344d6d4c0d9989df2fd804f98479f60cd760e";

  const event = verifier.readPayload(rawEvent, signature);

  expect(event).toEqual(expectedEvent);
});

it("allows passing the body as a buffer", () => {
  const signature =
    "a0082d7481f9f0a2907583dbe1f344d6d4c0d9989df2fd804f98479f60cd760e";

  const event = verifier.readPayload(Buffer.from(rawEvent), signature);

  expect(event).toEqual(expectedEvent);
});

it("throws an error if the signature is invalid", () => {
  const signature =
    "b0082d7481f9f0a2907583dbe1f344d6d4c0d9989df2fd804f98479f60cd760e";

  expect(() => verifier.readPayload(rawEvent, signature)).toThrow(OnfidoError);
});
