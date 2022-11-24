import { AxiosInstance } from "axios";
import { OnfidoDownload } from "../OnfidoDownload";
import { Method, Resource } from "../Resource";

export type MotionCapture = {
  id: string;
  createdAt: string;
  href: string;
  downloadHref: string;
  fileName: string;
  fileType: string;
  fileSize: number;
};

export class MotionCaptures extends Resource<never> {
  constructor(axiosInstance: AxiosInstance) {
    super("motion_captures", axiosInstance);
  }

  public async download(id: string): Promise<OnfidoDownload> {
    return super.download(`${id}/download`);
  }

  public async frame(id: string): Promise<OnfidoDownload> {
    return super.download(`${id}/frame`);
  }

  public async find(id: string): Promise<MotionCapture> {
    return this.request({ method: Method.GET, path: id });
  }

  public async list(applicantId: string): Promise<MotionCapture[]> {
    const { motionCaptures } = await this.request({
      method: Method.GET,
      query: { applicantId }
    });

    return motionCaptures;
  }
}
