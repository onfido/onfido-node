import { Applicant } from "onfido-node";

import { createNock, onfido, createApplicant, cleanUpApplicants, nockEnabled } from "../testHelpers";

let applicant: Applicant;

async function init() {
  applicant = await createApplicant();
}

beforeAll(() => {
  return init();
});

afterAll(() => {
  return cleanUpApplicants();
});

it("generates an sdk token", async () => {
  createNock()
    .post("/sdk_token/", {
      applicant_id: applicant.id,
      referrer: "https://*.example.com/*"
    })
    .reply(200, { token: "generated-token" });

  const sdkToken = await onfido.sdkToken.generate({
    applicantId: applicant.id,
    referrer: "https://*.example.com/*"
  });

  if( nockEnabled() )
  {
    expect(sdkToken).toBe("generated-token");
  }
  else
  {
    expect(sdkToken).toEqual(expect.stringMatching(/^[0-9a-zA-Z\._-]+$/));
  }
});
