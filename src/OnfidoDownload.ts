import { IncomingMessage } from "http";
import { PassThrough, Readable } from "stream";

export class OnfidoDownload {
  private readonly incomingMessage: IncomingMessage;

  constructor(incomingMessage: IncomingMessage) {
    this.incomingMessage = incomingMessage;
  }

  public asReadStream(): Readable {
    // Use a PassThrough stream so the IncomingMessage isn't exposed.
    const passThroughStream = new PassThrough();
    this.incomingMessage.pipe(passThroughStream);
    return passThroughStream;
  }

  public get contentType(): string {
    return this.incomingMessage.headers["content-type"]!;
  }
}
