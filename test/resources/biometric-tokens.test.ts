/// <reference types="jest" />
/// <reference types="node" />

import { Applicant, ApplicantConsentName, BiometricToken } from "onfido-node";

import {
  cleanUpApplicants,
  createApplicant,
  createWorkflowRunWithCustomInputs,
  onfido,
  sleep,
  uploadLivePhoto,
} from "../test-helpers";

const biometricWorkflowId =
  process.env.ONFIDO_SAMPLE_WORKFLOW_ID_BIOMETRIC_TOKEN ||
  "b79dcf69-41a0-412d-b803-d1a618730f72";

function createBiometricCustomerUserId() {
  return `test-user-id-${Date.now()}-${Math.round(Math.random() * 1_000_000)}`;
}

function expectBiometricToken(token: BiometricToken) {
  expect(token.uuid).toEqual(expect.stringMatching(/^[0-9a-f-]+$/i));
  expect(token.data.inserted_at).toEqual(expect.any(String));
  expect(token.data.media_type).toEqual(expect.any(String));
  expect(token.data.status).toEqual(expect.any(String));
}

async function createBiometricToken() {
  const applicant = (
    await createApplicant({
      consents: [
        {
          name: ApplicantConsentName.PrivacyNoticesRead,
          granted: true,
        },
      ],
    })
  ).data;

  const customerUserId = createBiometricCustomerUserId();
  const livePhoto = await uploadLivePhoto(applicant);
  const workflowRun = await createWorkflowRunWithCustomInputs({
    applicant_id: applicant.id,
    workflow_id: biometricWorkflowId,
    customer_user_id: customerUserId,
    custom_data: {
      media_ids: [
        {
          id: livePhoto.data.id,
        },
      ],
    },
  });

  expect(workflowRun.data.customer_user_id).toEqual(customerUserId);

  let biometricTokens = (await onfido.listBiometricTokens(customerUserId)).data;

  for (let iteration = 0; iteration < 10; iteration += 1) {
    if (biometricTokens.biometric_tokens.length > 0) {
      return {
        applicant,
        customerUserId,
        biometricTokens,
      };
    }

    await sleep(3000);
    biometricTokens = (await onfido.listBiometricTokens(customerUserId)).data;
  }

  throw new Error("Biometric tokens were not created in time");
}

afterAll(() => {
  return cleanUpApplicants();
});

it("lists biometric tokens", async () => {
  const { biometricTokens } = await createBiometricToken();

  expect(biometricTokens.biometric_tokens.length).toBeGreaterThan(0);
  expectBiometricToken(biometricTokens.biometric_tokens[0]);
}, 45000);

it("finds a biometric token", async () => {
  const { customerUserId, biometricTokens } = await createBiometricToken();
  const tokenUuid = biometricTokens.biometric_tokens[0].uuid;

  const biometricTokenResponse = await onfido.findBiometricToken(
    customerUserId,
    tokenUuid,
  );

  expect(biometricTokenResponse.data.biometric_token.uuid).toEqual(tokenUuid);
  expectBiometricToken(biometricTokenResponse.data.biometric_token);
}, 45000);

it("updates a biometric token status", async () => {
  const { customerUserId, biometricTokens } = await createBiometricToken();
  const tokenUuid = biometricTokens.biometric_tokens[0].uuid;

  const updatedBiometricToken = await onfido.updateBiometricToken(
    customerUserId,
    tokenUuid,
    {
      status: "approved",
    },
  );

  expect(updatedBiometricToken.data.biometric_token.uuid).toEqual(tokenUuid);
  expect(updatedBiometricToken.data.biometric_token.data.status).toEqual(
    "approved",
  );
}, 45000);

it("invalidates a biometric token", async () => {
  const { customerUserId, biometricTokens } = await createBiometricToken();
  const tokenUuid = biometricTokens.biometric_tokens[0].uuid;

  const response = await onfido.invalidateBiometricToken(
    customerUserId,
    tokenUuid,
  );

  expect(response.status).toEqual(200);
}, 45000);

it("invalidates biometric tokens", async () => {
  const { customerUserId } = await createBiometricToken();

  const response = await onfido.invalidateBiometricTokens(customerUserId);

  expect(response.status).toEqual(200);
}, 45000);
