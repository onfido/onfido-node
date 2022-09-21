import { OnfidoApiError, OnfidoDownload } from "onfido-node";

import { Resource } from "../src/Resource";
import { createNock, onfido } from "./testHelpers";

class TestResource extends Resource<{}> {
  public constructor() {
    super("test", onfido.axiosInstance);
  }

  public async upload(body: {}): Promise<any> {
    return super.upload(body);
  }

  public async download(id: string): Promise<OnfidoDownload> {
    return super.download(`${id}/download`);
  }
}

const testResource = new TestResource();

const errorJson = {
  error: {
    type: "bad_request",
    message: "The request could not be understood by the server, please check your request is correctly formatted",
    fields: {}
  }
};

describe("error handling", () => {
  it("returns an OnfidoApiError when a response is recieved", async () => {
    expect.assertions(2);

    createNock()
      .post("/test/")
      .reply(403, "The request could not be understood by the server, please check your request is correctly formatted");

    try {
      await testResource.upload({});
    } catch (error) {
      expect(error).toBeInstanceOf(OnfidoApiError);
      expect(error.message).toContain("The request could not be understood by the server, " +
                                      "please check your request is correctly formatted (status code 403)");
    }
  });

  it("reads json error messages when streaming the response", async () => {
    expect.assertions(2);

    createNock()
      .get("/test/123/download")
      .reply(400, errorJson);

    try {
      await testResource.download("123");
    } catch (error) {
      expect(error).toBeInstanceOf(OnfidoApiError);
      const apiError = error as OnfidoApiError;
      expect(apiError.responseBody).toEqual(errorJson);
    }
  });
});
