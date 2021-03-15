import nock from "nock";
import { Onfido } from "onfido-node";

const onfido = new Onfido({ apiToken: "api_token" });

it("generates an sdk token", async () => {
  nock("https://api.onfido.com/v3.1")
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
