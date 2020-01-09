import { AxiosInstance } from "axios";
import { Method, Resource } from "../Resource";

export type Report = {
  id: string;
  createdAt: string;
  name: string;
  href: string;
  status: string;
  result: string | null;
  subResult: string | null;
  properties: object | null;
  breakdown: object | null;
  documents?: string[] | null;
};

export class Reports extends Resource<never> {
  constructor(axiosInstance: AxiosInstance) {
    super("reports", axiosInstance);
  }

  public async find(id: string): Promise<Report> {
    return this.request({ method: Method.GET, path: id });
  }

  public async list(checkId: string): Promise<Report[]> {
    const { reports } = await this.request({
      method: Method.GET,
      query: { checkId }
    });

    return reports;
  }

  public async resume(id: string): Promise<void> {
    await this.request({ method: Method.POST, path: `${id}/resume` });
  }

  public async cancel(id: string): Promise<void> {
    await this.request({ method: Method.POST, path: `${id}/cancel` });
  }
}
