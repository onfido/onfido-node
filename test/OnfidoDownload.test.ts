import { IncomingMessage } from "http";
import { OnfidoDownload } from "onfido-node";

const mockIncomingMessage = (contentType: string): IncomingMessage =>
  ({ headers: { ["content-type"]: contentType } } as any);

describe("contentType", () => {
  it("gets the content type from the incoming message", () => {
    const incomingMessage = mockIncomingMessage("image/png");
    const download = new OnfidoDownload(incomingMessage);
    expect(download.contentType).toBe("image/png");
  });
});
