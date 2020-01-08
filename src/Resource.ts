import { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";
import { IncomingMessage } from "http";
import { Readable } from "stream";
import { OnfidoApiError } from "./errors/OnfidoApiError";
import { OnfidoError } from "./errors/OnfidoError";
import {
  convertObjectToCamelCase,
  convertObjectToSnakeCase,
  SimpleObject,
  toFormData
} from "./formatting";
import { OnfidoDownload } from "./OnfidoDownload";

export enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete"
}

const isJson = (response: AxiosResponse<unknown>): boolean =>
  (response.headers["content-type"] || "").includes("application/json");

const readFullStream = (stream: Readable): Promise<unknown> =>
  new Promise((resolve): void => {
    let all = "";

    stream.on("data", data => (all += data));
    stream.on("error", () => resolve("An error occurred reading the response"));
    stream.on("end", () => {
      try {
        resolve(JSON.parse(all));
      } catch {
        resolve(all);
      }
    });
  });

const convertAxiosErrorToOnfidoError = async (
  error: any
): Promise<OnfidoError> => {
  if (!error.response) {
    return new OnfidoError(
      error.message || "An unknown error occurred making the request"
    );
  }

  // Received a 4XX or 5XX response.
  const response: AxiosResponse = error.response;
  const data = response.data;

  // If we were downloading a file, we will have a stream instead of a string.
  const body = data instanceof Readable ? await readFullStream(data) : data;

  return OnfidoApiError.fromResponse(body, response.status);
};

const handleResponse = async (request: AxiosPromise<any>): Promise<any> => {
  try {
    const response = await request;
    const data = response.data;
    return isJson(response) ? convertObjectToCamelCase(data) : data;
  } catch (error) {
    throw await convertAxiosErrorToOnfidoError(error);
  }
};

export class Resource<T extends SimpleObject> {
  private readonly name: string;
  private readonly axiosInstance: AxiosInstance;

  protected constructor(name: string, axiosInstance: AxiosInstance) {
    this.name = name;
    this.axiosInstance = axiosInstance;
  }

  protected async request({
    method,
    path = "",
    body,
    query
  }: {
    method: Method;
    path?: string;
    body?: T;
    query?: SimpleObject;
  }): Promise<any> {
    const request = this.axiosInstance({
      method,
      url: `${this.name}/${path}`,
      data: body && convertObjectToSnakeCase(body),
      params: query && convertObjectToSnakeCase(query)
    });

    return handleResponse(request);
  }

  protected async upload(body: T): Promise<any> {
    const formData = toFormData(body);

    const request = this.axiosInstance({
      method: Method.POST,
      url: `${this.name}/`,
      data: formData,
      headers: formData.getHeaders()
    });

    return handleResponse(request);
  }

  protected async download(id: string): Promise<OnfidoDownload> {
    const request = this.axiosInstance({
      method: Method.GET,
      url: `${this.name}/${id}/download`,
      responseType: "stream",
      headers: { Accept: "*/*" }
    });

    const stream: IncomingMessage = await handleResponse(request);
    return new OnfidoDownload(stream);
  }
}
