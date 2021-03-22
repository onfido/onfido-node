import { createNock, onfido } from "../testHelpers";

it("generates an sdk token", async () => {
  createNock()
    .post("/sdk_token/", {
      applicant_id: "applicant-123",
      referrer: "https://*.example.com/*"
    })
    .reply(200, { token: "generated-token" });

  const sdkToken = await onfido.sdkToken.generate({
    applicantId: "applicant-123",
    referrer: "https://*.example.com/*"
  });

  expect(sdkToken).toBe("generated-token");
});
