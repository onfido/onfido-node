import axios, { AxiosInstance } from "axios";
import { version } from "../package.json";
import { Addresses } from "./resources/Addresses";
import { Applicants } from "./resources/Applicants";
import { Autofill } from "./resources/Autofill";
import { Checks } from "./resources/Checks";
import { Documents } from "./resources/Documents";
import { LivePhotos } from "./resources/LivePhotos";
import { LiveVideos } from "./resources/LiveVideos";
import { Reports } from "./resources/Reports";
import { SdkTokens } from "./resources/SdkTokens";
import { Webhooks } from "./resources/Webhooks";

export enum Region {
  EU = "EU",
  US = "US",
  CA = "CA"
}

export type OnfidoOptions = {
  apiToken: string;
  region: Region;
  timeout?: number;
  unknownApiUrl?: string;
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
  public readonly autofill: Autofill;

  constructor({
    apiToken,
    region,
    timeout = 30_000,
    unknownApiUrl
  }: OnfidoOptions) {
    if (!apiToken) {
      throw new Error("No apiToken provided");
    }
    if (!region || !Object.values(Region).includes(region)) {
      throw new Error(
        `Unknown or missing region '${region}'. ` +
          "We previously defaulted to region 'EU', so if you previously didn’t " +
          "set a region or used api.onfido.com, please set your region to 'EU'"
      );
    }

    const regionUrl = `https://api.${region.toLowerCase()}.onfido.com/v3.3/`;

    this.axiosInstance = axios.create({
      baseURL: unknownApiUrl || regionUrl,
      headers: {
        Authorization: `Token token=${apiToken}`,
        Accept: "application/json",
        "User-Agent": `onfido-node/${version}`
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
    this.autofill = new Autofill(this.axiosInstance);
  }
}
