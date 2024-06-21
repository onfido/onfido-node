import { FileTransfer } from "onfido-node";
import { createReadStream, readFileSync } from "fs";


it("create a file transfer from a string and filename", () => {
  const fileTransfer = new FileTransfer("PAYLOAD", "test-file.jpg")

  expect(fileTransfer.filename).toEqual("test-file.jpg");
  expect(fileTransfer.buffer.toString()).toEqual("PAYLOAD");
});

it("create a file transfer from a buffer and filename", () => {
  let buffer = readFileSync("test/media/sample_photo.png");
  const fileTransfer = new FileTransfer(buffer, "filename.png")

  expect(fileTransfer.filename).toEqual("filename.png");
  expect(fileTransfer.buffer.slice(1, 4).toString()).toEqual("PNG");
});

it("create a file transfer from a file path", () => {
  const fileTransfer = new FileTransfer("test/media/sample_photo.png")

  expect(fileTransfer.filename).toEqual("test/media/sample_photo.png");
  expect(fileTransfer.buffer.slice(1, 4).toString()).toEqual("PNG");
});
