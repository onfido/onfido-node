import { Applicant } from "onfido-node";

import { onfido, createApplicant, cleanUpApplicants } from "../test-helpers";

let applicant: Applicant;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
});

afterAll(() => {
  return cleanUpApplicants();
});

it("generates an sdk token", async () => {
  const sdkToken = await onfido.generateSdkToken({
    applicant_id: applicant.id,
    referrer: "https://*.example.com/*"
  });

  expect(sdkToken.data.token).toEqual(
    expect.stringMatching(/^[0-9a-zA-Z\._-]+$/)
  );
});
