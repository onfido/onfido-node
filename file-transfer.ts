import { readFileSync, PathLike } from "fs";

export class FileTransfer {
  public readonly buffer: Buffer;
  public readonly filename: String;

  constructor(buffer: String, filename: String);
  constructor(buffer: Buffer, filename: String);

  constructor(data?: String | Buffer, filename?: String) {
    this.buffer = data as Buffer;
    this.filename = filename;
  }
}
