import { Configuration, DefaultApi, Region } from "onfido-node";

it("sets the authorization header from the given token", () => {
  expect(new Configuration({ apiToken: "api_token" }).apiKey).toBe(
    "Token token=api_token"
  );
});

it("contains a user agent header", () => {
  expect(
    new Configuration({ apiToken: "api_token" }).baseOptions.headers[
      "User-Agent"
    ]
  ).toMatch(/^onfido-node\/\d+\.\d+\.\d+$/);
});

it("allows setting the EU region", () => {
  expect(
    new Configuration({ apiToken: "token", region: Region.EU }).basePath
  ).toBe("https://api.eu.onfido.com/v3.6");
});

it("allows setting the US region", () => {
  expect(
    new Configuration({ apiToken: "token", region: Region.US }).basePath
  ).toBe("https://api.us.onfido.com/v3.6");
});

it("allows setting the CA region", () => {
  expect(
    new Configuration({ apiToken: "token", region: Region.CA }).basePath
  ).toBe("https://api.ca.onfido.com/v3.6");
});

it("use EU region if region was not provided", () => {
  expect(new Configuration({ apiToken: "token" }).basePath).toBe(
    "https://api.eu.onfido.com/v3.6"
  );
});

it("throws an error for unknown regions", () => {
  expect(
    () => new Configuration({ apiToken: "token", region: "abc" as any })
  ).toThrow("Unknown or missing region 'abc'");
});

it("throws an error if no api token is provided", () => {
  expect(() => new Configuration()).toThrow("No apiToken provided");
  expect(() => new Configuration({ apiToken: "" })).toThrow(
    "No apiToken provided"
  );
});

it("allows changing the default timeout", () => {
  const onfido = new Configuration({
    apiToken: "token",
    region: Region.EU,
    baseOptions: {
      timeout: 123
    }
  });

  expect(onfido.baseOptions.timeout).toBe(123);
});
