import { AxiosInstance } from "axios";
import { Method, Resource } from "../Resource";

// Events availables list for WebHooks
export const CheckReportNamesList = [
  // Document
  "document",
  // Document with Address Information
  "document_with_address_information",
  "document_with_driving_licence_information",
  // Facial Similarity
  "facial_similarity_photo",
  "facial_similarity_photo_fully_auto",
  "facial_similarity_video",
  // Known Faces (beta)
  "known_faces",
  // Identity
  "identity_enhanced",
  // Watchlist
  "watchlist_enhanced",
  "watchlist_standard",
  "watchlist_peps_only",
  "watchlist_sanctions_only",
  // Proof of Address
  "proof_of_address",
  // Right to Work
  "right_to_work"
] as const;

export type CheckReportNames = typeof CheckReportNamesList[number];

export type CheckRequest = {
  applicantId: string;
  reportNames: CheckReportNames[];
  documentIds?: string[] | null;
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
