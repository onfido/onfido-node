import { ReadStream } from "fs";
import { Document, OnfidoDownload } from "onfido-node";
import { createNock, onfido } from "../testHelpers";

const exampleDocument: Document = {
  id: "123-abc",
  applicantId: "applicant-123",
  createdAt: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.4/documents/123-abc",
  downloadHref: "https://api.onfido.com/v3.4/documents/123-abc/download",
  fileName: "document.png",
  fileType: "png",
  fileSize: 500_000,
  type: "passport",
  side: null,
  issuingCountry: null
};

const exampleDocumentJson = {
  id: "123-abc",
  applicant_id: "applicant-123",
  created_at: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.4/documents/123-abc",
  download_href: "https://api.onfido.com/v3.4/documents/123-abc/download",
  file_name: "document.png",
  file_type: "png",
  file_size: 500_000,
  type: "passport",
  side: null,
  issuing_country: null
};

it("uploads a document", async () => {
  createNock()
    .post("/documents/")
    .reply(201, exampleDocumentJson);

  const document = await onfido.document.upload({
    file: ("file" as unknown) as ReadStream,
    type: "passport"
  });

  expect(document).toEqual(exampleDocument);
});

it("downloads a document", async () => {
  createNock()
    .get("/documents/abc-123/download")
    .reply(200, {});

  const file = await onfido.document.download("abc-123");

  expect(file).toBeInstanceOf(OnfidoDownload);
});

it("finds a document", async () => {
  createNock()
    .get("/documents/123-abc")
    .reply(200, exampleDocumentJson);

  const document = await onfido.document.find("123-abc");

  expect(document).toEqual(exampleDocument);
});

it("lists documents", async () => {
  createNock()
    .get("/documents/")
    .query({ applicant_id: "applicant-123" })
    .reply(200, { documents: [exampleDocumentJson, exampleDocumentJson] });

  const documents = await onfido.document.list("applicant-123");

  expect(documents).toEqual([exampleDocument, exampleDocument]);
});
