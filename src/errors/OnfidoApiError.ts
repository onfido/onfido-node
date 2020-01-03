import { OnfidoError } from "./OnfidoError";

export class OnfidoApiError extends OnfidoError {
  public readonly responseBody: unknown;
  public readonly statusCode: number;
  public readonly type: string;
  public readonly fields: unknown;

  private constructor(
    message: string,
    responseBody: unknown,
    statusCode: number,
    type: string,
    fields: unknown
  ) {
    super(message);
    this.name = "OnfidoApiError";

    this.responseBody = responseBody;
    this.statusCode = statusCode;
    this.type = type;
    this.fields = fields;
  }

  public static fromResponse(
    responseBody: unknown,
    statusCode: number
  ): OnfidoApiError {
    const innerErrorData: unknown =
      responseBody instanceof Object ? (responseBody as any).error : {};

    const innerError: {
      type?: unknown;
      message?: unknown;
      fields?: unknown;
    } = innerErrorData instanceof Object ? innerErrorData : {};

    const type = `${innerError.type || "unknown"}`;
    const message = `${innerError.message || responseBody}`;
    const fields = innerError.fields;

    const fullMessage =
      `${message} (status code ${statusCode})` +
      (fields ? ` | ${JSON.stringify(fields)}` : "");

    return new OnfidoApiError(
      fullMessage,
      responseBody,
      statusCode,
      type,
      fields
    );
  }

  public isClientError(): boolean {
    return this.statusCode < 500;
  }
}
