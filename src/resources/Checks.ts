import { AxiosInstance } from "axios";
import { Method, Resource } from "../Resource";

export type CheckRequest = {
  applicantId: string;
  reportNames: string[];
  applicantProvidesData?: boolean;
  asynchronous?: boolean;
  tags?: string[] | null;
  suppressFormEmails?: boolean;
  redirectUri?: string | null;
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
}
