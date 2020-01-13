import { AxiosInstance } from "axios";
import { OnfidoDownload } from "../OnfidoDownload";
import { Method, Resource } from "../Resource";

export type LiveVideo = {
  id: string;
  createdAt: string;
  href: string;
  downloadHref: string;
  fileName: string;
  fileType: string;
  fileSize: number;
};

export class LiveVideos extends Resource<never> {
  constructor(axiosInstance: AxiosInstance) {
    super("live_videos", axiosInstance);
  }

  public async download(id: string): Promise<OnfidoDownload> {
    return super.download(`${id}/download`);
  }

  public async frame(id: string): Promise<OnfidoDownload> {
    return super.download(`${id}/frame`);
  }

  public async find(id: string): Promise<LiveVideo> {
    return this.request({ method: Method.GET, path: id });
  }

  public async list(applicantId: string): Promise<LiveVideo[]> {
    const { liveVideos } = await this.request({
      method: Method.GET,
      query: { applicantId }
    });

    return liveVideos;
  }
}
