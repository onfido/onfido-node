import { AxiosInstance } from "axios";
import { ReadStream } from "fs";
import { OnfidoDownload } from "../OnfidoDownload";
import { Resource } from "../Resource";

export type DocumentRequest = {
  applicantId?: string | null;
  file: ReadStream;
  type: string;
  side?: string | null;
  issuingCountry?: string | null;
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
    return super.download(id);
  }
}
