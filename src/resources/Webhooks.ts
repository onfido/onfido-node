import { AxiosInstance } from "axios";
import { Method, Resource } from "../Resource";

// url is also optional to allow updating.
export type WebhookRequest = {
  url?: string | null;
  enabled?: boolean;
  environments?: string[];
  events?: string[] | null;
};

export type Webhook = {
  id: string;
  url: string;
  enabled: boolean;
  events: string[];
  token: string;
  href: string;
};

export class Webhooks extends Resource<WebhookRequest> {
  constructor(axiosInstance: AxiosInstance) {
    super("webhooks", axiosInstance);
  }

  public async create(webhookRequest: WebhookRequest): Promise<Webhook> {
    return this.request({ method: Method.POST, body: webhookRequest });
  }

  public async find(id: string): Promise<Webhook> {
    return this.request({ method: Method.GET, path: id });
  }

  public async update(
    id: string,
    webhookRequest: WebhookRequest
  ): Promise<Webhook> {
    return this.request({
      method: Method.PUT,
      path: id,
      body: webhookRequest
    });
  }

  public async delete(id: string): Promise<void> {
    await this.request({ method: Method.DELETE, path: id });
  }

  public async list(): Promise<Webhook[]> {
    const { webhooks } = await this.request({ method: Method.GET });

    return webhooks;
  }
}
