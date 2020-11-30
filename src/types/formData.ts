// Copied over from form-data.
import * as http from "http";
import * as stream from "stream";

// Extracted because @types/node doesn't export interfaces.
interface ReadableOptions {
  highWaterMark?: number;
  encoding?: string;
  objectMode?: boolean;
  autoDestroy?: boolean;
  read?(this: stream.Readable, size: number): void;
  destroy?(
    this: stream.Readable,
    error: Error | null,
    callback: (error: Error | null) => void
  ): void;
}

interface Options extends ReadableOptions {
  writable?: boolean;
  readable?: boolean;
  dataSize?: number;
  maxDataSize?: number;
  pauseStreams?: boolean;
}

export interface FormData extends stream.Readable {
  append(key: string, value: any, options?: AppendOptions | string): void;
  getHeaders(userHeaders?: Headers): Headers;
  submit(
    params: string | SubmitOptions,
    callback?: (error: Error | null, response: http.IncomingMessage) => void
  ): http.ClientRequest;
  getBuffer(): Buffer;
  getBoundary(): string;
  getLength(callback: (err: Error | null, length: number) => void): void;
  getLengthSync(): number;
  hasKnownLength(): boolean;
}

interface Headers {
  [key: string]: any;
}

interface AppendOptions {
  header?: string | Headers;
  knownLength?: number;
  filename?: string;
  filepath?: string;
  contentType?: string;
}

interface SubmitOptions extends http.RequestOptions {
  protocol?: "https:" | "http:";
}
