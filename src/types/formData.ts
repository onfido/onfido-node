// Copied over from form-data.
import * as http from "http";
import * as stream from "stream";

export interface IFormData extends stream.Readable {
  append(key: string, value: any, options?: IAppendOptions | string): void;
  getHeaders(userHeaders?: IHeaders): IHeaders;
  submit(
    params: string | ISubmitOptions,
    callback?: (error: Error | null, response: http.IncomingMessage) => void
  ): http.ClientRequest;
  getBuffer(): Buffer;
  getBoundary(): string;
  getLength(callback: (err: Error | null, length: number) => void): void;
  getLengthSync(): number;
  hasKnownLength(): boolean;
}

interface IHeaders {
  [key: string]: any;
}

interface IAppendOptions {
  header?: string | IHeaders;
  knownLength?: number;
  filename?: string;
  filepath?: string;
  contentType?: string;
}

interface ISubmitOptions extends http.RequestOptions {
  protocol?: "https:" | "http:";
}
