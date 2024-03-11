// Require crypto instead of importing, because Node can be built without crypto support.
let crypto: typeof import("crypto") | undefined;
try {
  // tslint:disable-next-line: no-var-requires
  crypto = require("crypto");
} catch {
  // We throw an error when verifying webhooks instead.
}

import { WebhookEvent } from "./model/webhook-event";

export class OnfidoInvalidSignatureError extends Error {}

export class WebhookEventVerifier {
  private readonly webhookToken: string;

  constructor(webhookToken: string) {
    this.webhookToken = webhookToken;
  }

  public readPayload(rawEventBody: string | Buffer, hexSignature: string) {
    if (!crypto) {
      throw new Error("Verifying webhook events requires crypto support");
    }

    const givenSignature = Buffer.from(hexSignature, "hex");

    // Compute the the actual HMAC signature from the raw request body.
    const hmac = crypto.createHmac("sha256", this.webhookToken);
    hmac.update(rawEventBody);
    const eventSignature = hmac.digest();

    // Use timingSafeEqual to prevent against timing attacks.
    if (!crypto.timingSafeEqual(givenSignature, eventSignature)) {
      throw new OnfidoInvalidSignatureError(
        "Invalid signature for webhook event"
      );
    }

    return JSON.parse(rawEventBody.toString()) as WebhookEvent;
  }
}
