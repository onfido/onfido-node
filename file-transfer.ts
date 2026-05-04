import { readFileSync, PathLike } from "fs";
import type { AxiosInstance } from "axios";
import { AxiosHeaders } from "axios";

export class FileTransfer {
  public readonly buffer: Buffer;
  public readonly filename: String;

  constructor(buffer: String, filename: String);
  constructor(buffer: Buffer, filename: String);
  constructor(inputFile: PathLike);

  constructor(data?: String | Buffer | PathLike, filename?: String) {
    if (filename == null) {
      this.buffer = readFileSync(data as PathLike);
      this.filename = (data as PathLike).toString();
    } else {
      this.buffer = data as Buffer;
      this.filename = filename;
    }
  }
}

const instrumented = new WeakSet<AxiosInstance>();

export function attachFileTransferInterceptor(axios: AxiosInstance): void {
  if (instrumented.has(axios)) {
    return;
  }
  instrumented.add(axios);

  axios.interceptors.response.use(async (response) => {
    if (
      response.headers instanceof AxiosHeaders &&
      response.headers["content-type"]
    ) {
      if (
        !response.headers["content-type"]
          .toString()
          .includes("application/json")
      ) {
        const contentDisposition = response.headers["content-disposition"];
        var filename = "";

        if (contentDisposition && contentDisposition != "") {
          const matcher = contentDisposition.match(
            /filename=['\"]?([^'\"\s]+)['\"]?/,
          );

          if (matcher != null) {
            filename = matcher[1].replace(/.*[/\\\\]/g, "");
          }
        }

        response.data = new FileTransfer(response.data, filename);
      }
    }

    return response;
  });
}
