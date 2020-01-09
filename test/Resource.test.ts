import axios from "axios";
import nock from "nock";
import { OnfidoApiError, OnfidoDownload } from "onfido-node";
import { Resource } from "../src/Resource";

const axiosInstance = axios.create({
  baseURL: "https://api.onfido.com/v3/"
});

class TestResource extends Resource<{}> {
  public constructor() {
    super("test", axiosInstance);
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
    type: "the_type",
    message: "the message",
    fields: {
      field: "error"
    }
  }
};

describe("error handling", () => {
  it("returns an OnfidoApiError when a response is recieved", async () => {
    expect.assertions(2);

    nock("https://api.onfido.com/v3")
      .post("/test/")
      .reply(404, "Not Found");

    try {
      await testResource.upload({});
    } catch (error) {
      expect(error).toBeInstanceOf(OnfidoApiError);
      expect(error.message).toBe("Not Found (status code 404)");
    }
  });

  it("reads json error messages when streaming the response", async () => {
    expect.assertions(2);

    nock("https://api.onfido.com/v3")
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
