import { AxiosInstance } from "axios";
import { Method, Resource } from "../Resource";

export type SdkTokenRequest = {
  applicantId: string;
  applicationId?: string | null;
  referrer?: string | null;
};

export class SdkTokens extends Resource<SdkTokenRequest> {
  constructor(axiosInstance: AxiosInstance) {
    super("sdk_token", axiosInstance);
  }

  public async generate(sdkTokenRequest: SdkTokenRequest): Promise<string> {
    const { token } = await this.request({
      method: Method.POST,
      body: sdkTokenRequest
    });

    return token;
  }
}
