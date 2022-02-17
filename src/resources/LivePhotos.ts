import { AxiosInstance } from "axios";
import { FileLike } from "../formatting";
import { OnfidoDownload } from "../OnfidoDownload";
import { Method, Resource } from "../Resource";

export type LivePhotoRequest = {
  applicantId: string;
  file: FileLike;
  advancedValidation?: string;
};

export type LivePhoto = {
  id: string;
  createdAt: string;
  href: string;
  downloadHref: string;
  fileName: string;
  fileType: string;
  fileSize: number;
};

export class LivePhotos extends Resource<LivePhotoRequest> {
  constructor(axiosInstance: AxiosInstance) {
    super("live_photos", axiosInstance);
  }

  public async upload(livePhotoRequest: LivePhotoRequest): Promise<LivePhoto> {
    return super.upload(livePhotoRequest);
  }

  public async download(id: string): Promise<OnfidoDownload> {
    return super.download(`${id}/download`);
  }

  public async find(id: string): Promise<LivePhoto> {
    return this.request({ method: Method.GET, path: id });
  }

  public async list(applicantId: string): Promise<LivePhoto[]> {
    const { livePhotos } = await this.request({
      method: Method.GET,
      query: { applicantId }
    });

    return livePhotos;
  }
}
