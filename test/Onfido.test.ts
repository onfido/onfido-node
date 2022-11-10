import { Onfido, Region } from "onfido-node";

it("sets the authorization header from the given token", () => {
  const onfido = new Onfido({ apiToken: "api_token", region: Region.EU });
  expect(onfido.axiosInstance.defaults.headers.Authorization).toBe(
    "Token token=api_token"
  );
});

it("contains a user agent header", () => {
  const onfido = new Onfido({ apiToken: "api_token", region: Region.EU });
  expect(onfido.axiosInstance.defaults.headers["User-Agent"]).toMatch(
    /^onfido-node\/\d+\.\d+\.\d+$/
  );
});

it("allows setting the EU region", () => {
  const onfido = new Onfido({ apiToken: "token", region: Region.EU });
  expect(onfido.axiosInstance.defaults.baseURL).toBe(
    "https://api.eu.onfido.com/v3.5/"
  );
});

it("allows setting the US region", () => {
  const onfido = new Onfido({ apiToken: "token", region: Region.US });
  expect(onfido.axiosInstance.defaults.baseURL).toBe(
    "https://api.us.onfido.com/v3.5/"
  );
});

it("allows setting the CA region", () => {
  const onfido = new Onfido({ apiToken: "token", region: Region.CA });
  expect(onfido.axiosInstance.defaults.baseURL).toBe(
    "https://api.ca.onfido.com/v3.5/"
  );
});

it("throws an error for no region", () => {
  expect(() => new Onfido({ apiToken: "token" } as any)).toThrow(
    "Unknown or missing region 'undefined'"
  );
});

it("throws an error for unknown regions", () => {
  expect(() => new Onfido({ apiToken: "token", region: "abc" as any })).toThrow(
    "Unknown or missing region 'abc'"
  );
});

it("throws an error if no api token is provided", () => {
  expect(() => new Onfido({ apiToken: "" } as any)).toThrow("apiToken");
  expect(() => new Onfido({ wrongName: "token" } as any)).toThrow("apiToken");
});

it("allows changing the default timeout", () => {
  const onfido = new Onfido({
    apiToken: "token",
    region: Region.EU,
    timeout: 123
  });

  expect(onfido.axiosInstance.defaults.timeout).toBe(123);
});
