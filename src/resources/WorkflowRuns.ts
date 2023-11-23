import { AxiosInstance } from "axios";
import { OnfidoDownload } from "../OnfidoDownload";
import { Method, Resource } from "../Resource";

export type WorkflowRunRequest = {
  applicantId: string;
  workflowId: string;
  customData?: any;
};

type WorkflowRunError = {
  type: string;
  message: string;
}

type WorkflowRunLink = {
  url: string;
  completed_redirect_url: string;
  expired_redirect_url: string;
  expires_at: string;
  language: string;
}

export type WorkflowRun = {
  id: string;
  applicantId: string;
  workflowId: string;
  workflowVersionId: number;
  dashboardUrl: string;
  status: string;
  output: any;
  reasons: string[] | null;
  error: WorkflowRunError | null;
  link: WorkflowRunLink | null;
  createdAt: string;
  updatedAt: string;
};

export type WorkflowRunListRequest = {
  page?: number;
  status?: string;
  created_at_gt?: string;
  created_at_lt?: string;
}

export class WorkflowRuns extends Resource<WorkflowRunRequest> {
  constructor(axiosInstance: AxiosInstance) {
    super("workflow_runs", axiosInstance);
  }

  public async create(workflowRunRequest: WorkflowRunRequest): Promise<WorkflowRun> {
    return this.request({ method: Method.POST, body: workflowRunRequest });
  }

  public async find(id: string): Promise<WorkflowRun> {
    return this.request({ method: Method.GET, path: id });
  }

  public async list(queryParams?: WorkflowRunListRequest): Promise<WorkflowRun[]> {
    const workflowRuns = await this.request({
      method: Method.GET,
      query: queryParams
    });

    return workflowRuns;
  }

  public async evidence(id: string): Promise<OnfidoDownload> {
    return super.download(`${id}/signed_evidence_file`);
  }
}
