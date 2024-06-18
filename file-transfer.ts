import { readFileSync, PathLike } from "fs";

export class FileTransfer {

  public readonly buffer: Buffer;
  public readonly filename: String;

  constructor(buffer: String, filename: String);
  constructor(buffer: Buffer, filename: String);
  constructor(inputFile: PathLike);

  constructor(data?: String|Buffer|PathLike, filename?: String) {

    if ( filename == null ) {
      this.buffer = readFileSync(data as PathLike);
      this.filename = (data as PathLike).toString();
    }
    else
    {
      this.buffer = data as Buffer;
      this.filename = filename;
    }
  }
}
