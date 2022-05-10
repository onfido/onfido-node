import { AxiosInstance } from "axios";
import { FileLike } from "../formatting";
import { OnfidoDownload } from "../OnfidoDownload";
import { Method, Resource } from "../Resource";
import { LocationRequest } from "./Location";

export type DocumentRequest = {
  applicantId?: string | null;
  file: FileLike;
  type: string;
  side?: string | null;
  issuingCountry?: string | null;
  validateImageQuality?: boolean | null;
  location?: LocationRequest | null;
};

export type Document = {
  id: string;
  applicantId: string | null;
  createdAt: string;
  href: string;
  downloadHref: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  type: string;
  side: string | null;
  issuingCountry: string | null;
};

export class Documents extends Resource<DocumentRequest> {
  constructor(axiosInstance: AxiosInstance) {
    super("documents", axiosInstance);
  }

  public async upload(documentRequest: DocumentRequest): Promise<Document> {
    return super.upload(documentRequest);
  }

  public async download(id: string): Promise<OnfidoDownload> {
    return super.download(`${id}/download`);
  }

  public async find(id: string): Promise<Document> {
    return this.request({ method: Method.GET, path: id });
  }

  public async list(applicantId: string): Promise<Document[]> {
    const { documents } = await this.request({
      method: Method.GET,
      query: { applicantId }
    });

    return documents;
  }
}
