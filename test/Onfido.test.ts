import { Onfido, Region } from "onfido-node";

it("sets the authorization header from the given token", () => {
  const onfido = new Onfido({ apiToken: "api_token" });
  expect(onfido.axiosInstance.defaults.headers.Authorization).toBe(
    "Token token=api_token"
  );
});

it("contains a user agent header", () => {
  jest.mock("../package.json", () => {
    return { version: "1.0.0" };
  });
  const onfido = new Onfido({ apiToken: "api_token" });
  expect(onfido.axiosInstance.defaults.headers["User-Agent"]).toBe(
    "onfido-node/1.0.0"
  );
});

it("defaults to the EU region", () => {
  const onfido = new Onfido({ apiToken: "token" });
  expect(onfido.axiosInstance.defaults.baseURL).toBe(
    "https://api.onfido.com/v3/"
  );
});

it("allows setting the US region", () => {
  const onfido = new Onfido({ apiToken: "token", region: Region.US });
  expect(onfido.axiosInstance.defaults.baseURL).toBe(
    "https://api.us.onfido.com/v3/"
  );
});

it("allows setting the CA region", () => {
  const onfido = new Onfido({ apiToken: "token", region: Region.CA });
  expect(onfido.axiosInstance.defaults.baseURL).toBe(
    "https://api.ca.onfido.com/v3/"
  );
});

it("throws an error for unknown regions", () => {
  expect(() => new Onfido({ apiToken: "token", region: "abc" as any })).toThrow(
    "Unknown region abc"
  );
});

it("throws an error if no api token is provided", () => {
  expect(() => new Onfido({ apiToken: "" } as any)).toThrow("apiToken");
  expect(() => new Onfido({ wrongName: "token" } as any)).toThrow("apiToken");
});

it("allows changing the default timeout", () => {
  const onfido = new Onfido({ apiToken: "token", timeout: 123 });
  expect(onfido.axiosInstance.defaults.timeout).toBe(123);
});
