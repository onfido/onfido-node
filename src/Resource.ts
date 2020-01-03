import { AxiosInstance, AxiosResponse } from "axios";
import { OnfidoApiError } from "./errors/OnfidoApiError";
import { OnfidoError } from "./errors/OnfidoError";
import { formatRequest, formatResponse, SimpleObject } from "./formatting";

export enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete"
}

const isJson = (response: AxiosResponse<unknown>): boolean =>
  (response.headers["content-type"] || "").includes("application/json");

const convertAxiosErrorToOnfidoError = (error: any): OnfidoError => {
  if (error.response) {
    // Received a 4XX or 5XX response.
    const response: AxiosResponse = error.response;
    return OnfidoApiError.fromResponse(response.data, response.status);
  } else if (error.message) {
    return new OnfidoError(error.message);
  } else {
    return new OnfidoError("An unknown error occurred making the request");
  }
};

export class Resource<T extends SimpleObject> {
  private readonly name: string;
  private readonly axiosInstance: AxiosInstance;

  protected constructor(name: string, axiosInstance: AxiosInstance) {
    this.name = name;
    this.axiosInstance = axiosInstance;
  }

  protected async request(
    method: Method,
    path: string,
    body?: T
  ): Promise<any> {
    const promise = this.axiosInstance({
      method,
      url: `${this.name}/${path}`,
      data: body && formatRequest(body)
    });

    let response;
    try {
      response = await promise;
    } catch (error) {
      throw convertAxiosErrorToOnfidoError(error);
    }

    const data = response.data;
    return isJson(response) ? formatResponse(data) : data;
  }
}
