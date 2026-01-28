import {
  Passkey,
  PasskeyStateEnum,
  PasskeyUpdaterStateEnum,
} from "onfido-node";

import { onfido } from "../test-helpers";

const sampleUsername =
  process.env.ONFIDO_SAMPLE_PASSKEY_USERNAME || "sample-username";
const samplePasskeyId =
  process.env.ONFIDO_SAMPLE_PASSKEY_ID ||
  "00000000-0000-0000-0000-000000000000";

function expectPasskey(passkey: Passkey) {
  expect(passkey.id).toMatch(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  );
  expect(passkey.application_domain).toBeTruthy();
  expect(passkey.state).toBeTruthy();
  expect(passkey.created_at).toMatch(/^[0-9TZ:\-.]+$/);
  expect([
    PasskeyStateEnum.Active,
    PasskeyStateEnum.Inactive,
    PasskeyStateEnum.UnknownDefaultOpenApi,
  ]).toContain(passkey.state);
}

it("lists passkeys", async () => {
  const passkeys = (await onfido.listPasskeys(sampleUsername)).data.passkeys;

  expect(passkeys.length).toBeGreaterThan(0);

  const samplePasskey =
    passkeys.find(({ id }) => id === samplePasskeyId) || passkeys[0];

  expectPasskey(samplePasskey);
});

it("finds a passkey", async () => {
  const passkey = (await onfido.findPasskey(sampleUsername, samplePasskeyId))
    .data;

  expect(passkey.id).toEqual(samplePasskeyId);
  expectPasskey(passkey);
});

it("updates a passkey state", async () => {
  const updatedPasskey = (
    await onfido.updatePasskey(sampleUsername, samplePasskeyId, {
      state: PasskeyUpdaterStateEnum.Inactive,
    })
  ).data;

  expect(updatedPasskey.id).toEqual(samplePasskeyId);
  expect(updatedPasskey.state).toEqual(PasskeyUpdaterStateEnum.Inactive);
});

it("deletes a passkey", async () => {
  const response = await onfido.deletePasskey(sampleUsername, samplePasskeyId);

  expect(response.status).toEqual(204);
});

it("deletes passkeys", async () => {
  const response = await onfido.deletePasskeys(sampleUsername);

  expect(response.status).toEqual(204);
});
