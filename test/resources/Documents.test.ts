import nock from "nock";
import { Document, Onfido, OnfidoDownload } from "onfido-node";

const onfido = new Onfido({ apiToken: "api_token" });

const exampleDocument: Document = {
  id: "123-abc",
  applicantId: "applicant-123",
  createdAt: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3/documents/123-abc",
  downloadHref: "https://api.onfido.com/v3/documents/123-abc/downlaod",
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
  href: "https://api.onfido.com/v3/documents/123-abc",
  download_href: "https://api.onfido.com/v3/documents/123-abc/downlaod",
  file_name: "document.png",
  file_type: "png",
  file_size: 500_000,
  type: "passport",
  side: null,
  issuing_country: null
};

it("uploads a document", async () => {
  nock("https://api.onfido.com/v3")
    .post("/documents/")
    .reply(201, exampleDocumentJson);

  const document = await onfido.document.upload({
    file: "file" as any,
    type: "passport"
  });

  expect(document).toEqual(exampleDocument);
});

it("downloads a document", async () => {
  nock("https://api.onfido.com/v3")
    .get("/documents/abc-123/download")
    .reply(200, {});

  const file = await onfido.document.download("abc-123");

  expect(file).toBeInstanceOf(OnfidoDownload);
});
