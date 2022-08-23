import nock from "nock";
import { Onfido, Region } from "onfido-node";

export const onfido = new Onfido({ region: Region.EU, apiToken: process.env.ONFIDO_API_TOKEN || "api_token" });

export const createNock = (): nock.Scope =>
  nock("https://api.eu.onfido.com/v3.4");

export function getExpectedObject( exampleObject: any ) {
  // Don't perform any change when replies are mocked up
  if ( process.env.NOCK_OFF !== 'true' ) {
    return exampleObject
  }

  var expectedObject = { ... exampleObject };

  expectedObject.id = expect.stringMatching(/[0-9-]+/);
  expectedObject.href = expect.stringMatching(/^\/.+/);
  expectedObject.createdAt = expect.stringMatching(/[0-9TZ:-]+/);

  return expectedObject;
}
