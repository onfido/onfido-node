import { AxiosInstance } from "axios";
import { OnfidoDownload } from "../OnfidoDownload";
import { Method, Resource } from "../Resource";

export type CheckRequest = {
  applicantId: string;
  reportNames: string[];
  documentIds?: string[] | null;
  applicantProvidesData?: boolean;
  asynchronous?: boolean;
  tags?: string[] | null;
  suppressFormEmails?: boolean;
  redirectUri?: string | null;
  privacyNoticesReadConsentGiven?: boolean;
  webhookIds?: string[] | null;
};

export type Check = {
  id: string;
  reportIds: string[];
  createdAt: string;
  href: string;
  applicantId: string;
  applicantProvidesData: boolean;
  status: string;
  tags: string[];
  result: string | null;
  formUri: string | null;
  redirectUri: string | null;
  resultsUri: string;
  privacyNoticesReadConsentGiven: boolean;
  webhookIds: string[] | null;
};

export class Checks extends Resource<CheckRequest> {
  constructor(axiosInstance: AxiosInstance) {
    super("checks", axiosInstance);
  }

  public async create(checkRequest: CheckRequest): Promise<Check> {
    return this.request({ method: Method.POST, body: checkRequest });
  }

  public async find(id: string): Promise<Check> {
    return this.request({ method: Method.GET, path: id });
  }

  public async list(applicantId: string): Promise<Check[]> {
    const { checks } = await this.request({
      method: Method.GET,
      query: { applicantId }
    });

    return checks;
  }

  public async resume(id: string): Promise<void> {
    await this.request({ method: Method.POST, path: `${id}/resume` });
  }

  public async download(id: string): Promise<OnfidoDownload> {
    return super.download(`${id}/download`);
  }
}
