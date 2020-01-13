import axios, { AxiosInstance } from "axios";
import { Addresses } from "./resources/Addresses";
import { Applicants } from "./resources/Applicants";
import { Checks } from "./resources/Checks";
import { Documents } from "./resources/Documents";
import { LivePhotos } from "./resources/LivePhotos";
import { LiveVideos } from "./resources/LiveVideos";
import { Reports } from "./resources/Reports";
import { SdkTokens } from "./resources/SdkTokens";
import { Webhooks } from "./resources/Webhooks";

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
  public readonly axiosInstance: AxiosInstance;
  // Core resources
  public readonly applicant: Applicants;
  public readonly document: Documents;
  public readonly livePhoto: LivePhotos;
  public readonly liveVideo: LiveVideos;
  public readonly check: Checks;
  public readonly report: Reports;
  // Other endpoints
  public readonly address: Addresses;
  public readonly webhook: Webhooks;
  public readonly sdkToken: SdkTokens;

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

    // Core resources
    this.applicant = new Applicants(this.axiosInstance);
    this.document = new Documents(this.axiosInstance);
    this.livePhoto = new LivePhotos(this.axiosInstance);
    this.liveVideo = new LiveVideos(this.axiosInstance);
    this.check = new Checks(this.axiosInstance);
    this.report = new Reports(this.axiosInstance);
    // Other endpoints
    this.address = new Addresses(this.axiosInstance);
    this.webhook = new Webhooks(this.axiosInstance);
    this.sdkToken = new SdkTokens(this.axiosInstance);
  }
}
