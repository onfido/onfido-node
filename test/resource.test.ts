import { Configuration, DefaultApi } from "onfido-node";

import { AxiosError } from "axios";

const onfido_bad_token = new DefaultApi(
  new Configuration({
    apiToken: "bad-token" // Use an invalid token
  })
);

describe("error handling", () => {
  it("returns an AxiosError when a response is received", async () => {
    try {
      await onfido_bad_token.createApplicant({
        first_name: "Test",
        last_name: "Applicant",
        address: {
          postcode: "AB12 3AB",
          country: "GBR"
        },
        location: {
          ip_address: "127.0.0.1",
          country_of_residence: "GBR"
        }
      });
      fail(); // We should never be here
    } catch (error) {
      expect(error).toBeInstanceOf(AxiosError);
      expect(error.response.status).toEqual(401);
    }
  });
});
