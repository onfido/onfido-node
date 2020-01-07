import axios, { AxiosInstance } from "axios";
import { Applicants } from "./resources/Applicants";

export enum Region {
  EU = "EU",
  US = "US"
}

export type OnfidoOptions = {
  apiToken: string;
  region?: Region;
  timeout?: number;
  unknownApiUrl?: string;
};

const apiUrls = {
  [Region.EU]: "https://api.onfido.com/v3/",
  [Region.US]: "https://api.us.onfido.com/v3/"
};

export class Onfido {
  public readonly applicant: Applicants;
  public readonly axiosInstance: AxiosInstance;

  constructor({
    apiToken,
    region = Region.EU,
    timeout = 30_000,
    unknownApiUrl
  }: OnfidoOptions) {
    const regionUrl = apiUrls[region];
    if (!regionUrl) {
      throw new Error("Unknown region " + region);
    }

    this.axiosInstance = axios.create({
      baseURL: unknownApiUrl || regionUrl,
      headers: {
        Authorization: `Token token=${apiToken}`,
        Accept: "application/json"
      },
      timeout
    });

    this.applicant = new Applicants(this.axiosInstance);
  }
}
