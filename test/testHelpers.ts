import nock from "nock";
import { Onfido, Region } from "onfido-node";

export const onfido = new Onfido({ region: Region.EU, apiToken: "api_token" });

export const createNock = (): nock.Scope =>
  nock("https://api.eu.onfido.com/v3.2");
