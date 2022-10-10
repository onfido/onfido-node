import { Applicant, LivePhoto, OnfidoDownload } from "onfido-node";

import { createReadStream } from "fs";

import { createNock, onfido, getExpectedObject, createApplicant, cleanUpApplicants } from "../testHelpers";

const exampleLivePhoto: LivePhoto = {
  id: "123-abc",
  createdAt: "2020-01-01T00:00:00Z",
  href: "/v3.4/live_photos/123-abc",
  downloadHref: "/v3.4/live_photos/123-abc/download",
  fileName: "name.png",
  fileType: "image/png",
  fileSize: 395_856
};

function getExpectedLivePhoto(exampleLivePhoto: LivePhoto)
{
  return getExpectedObject(exampleLivePhoto, {
    'downloadHref': expect.stringMatching(/^\/v3.4\/live_photos\/[0-9a-z-]+\/download$/) });
}

let applicant: Applicant;

async function init() {
  applicant = await createApplicant();
}

beforeEach(() => {
  return init();
});

afterAll(() => {
  return cleanUpApplicants();
});

async function uploadLivePhoto(applicant_id: string, overrideProperties={})
{
  createNock()
    .post("/live_photos/")
    .reply(201, JSON.stringify(exampleLivePhoto));

  const photo = await onfido.livePhoto.upload({
    file: {
      contents: createReadStream("test/media/sample_photo.png"),
      filepath: "path/name.png",
      contentType: "image/png"
    },
    applicantId: applicant_id,
    ... overrideProperties
  });

  return photo;
}

it("uploads a live photo", async () => {
  const photo = await uploadLivePhoto(applicant.id);

  expect(photo).toEqual(getExpectedLivePhoto(exampleLivePhoto));
});

it("uploads a live photo with advanced validation", async () => {
  const anotherPhoto = await uploadLivePhoto(applicant.id, {advancedValidation: "true"});

  expect(anotherPhoto).toEqual(getExpectedLivePhoto(exampleLivePhoto));
});

it("downloads a live photo", async () => {
  const photo = await uploadLivePhoto(applicant.id);

  createNock()
    .get("/live_photos/" + photo.id + "/download")
    .reply(200, {});

  const file = await onfido.livePhoto.download(photo.id);

  expect(file).toBeInstanceOf(OnfidoDownload);
});

it("finds a live photo", async () => {
  const photo = await uploadLivePhoto(applicant.id);

  createNock()
    .get("/live_photos/" + photo.id)
    .reply(200, JSON.stringify(exampleLivePhoto));

  const livePhoto = await onfido.livePhoto.find(photo.id);

  expect(livePhoto).toEqual(getExpectedLivePhoto(exampleLivePhoto));
});

it("lists live photos", async () => {
  await uploadLivePhoto(applicant.id);
  await uploadLivePhoto(applicant.id);

  createNock()
    .get("/live_photos/")
    .query({ applicant_id: applicant.id })
    .reply(200, JSON.stringify({ livePhotos: [exampleLivePhoto, exampleLivePhoto] }));

  const livePhotos = await onfido.livePhoto.list(applicant.id);

  expect(livePhotos).toEqual([getExpectedLivePhoto(exampleLivePhoto),
                              getExpectedLivePhoto(exampleLivePhoto)]);
});
