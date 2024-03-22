import { Applicant, LivePhoto } from "onfido-node";

import { createReadStream, readFileSync } from "fs";

import {
  onfido,
  getExpectedObject,
  createApplicant,
  cleanUpApplicants,
  uploadLivePhoto
} from "../test-helpers";

const exampleLivePhoto: LivePhoto = {
  id: "123-abc",
  created_at: "2020-01-01T00:00:00Z",
  href: "/v3.6/live_photos/123-abc",
  download_href: "/v3.6/live_photos/123-abc/download",
  file_name: "sample_photo.png",
  file_type: "image/png",
  file_size: 395_856
};

function getExpectedLivePhoto(exampleLivePhoto: LivePhoto) {
  return getExpectedObject(exampleLivePhoto, {
    download_href: expect.stringMatching(
      /^\/v3.6\/live_photos\/[0-9a-z-]+\/download$/
    )
  });
}

let applicant: Applicant;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
});

afterAll(() => {
  return cleanUpApplicants();
});

it("uploads a live photo", async () => {
  const photo = await uploadLivePhoto(applicant);

  expect(photo.data).toEqual(getExpectedLivePhoto(exampleLivePhoto));
});

// [SKIP] Need to cast advancedValidation parameter to String in default-api.ts:2578:
// localVarFormParams.append('advanced_validation', String(advancedValidation as any));
it.skip("uploads a live photo without advanced validation", async () => {
  const anotherPhoto = await uploadLivePhoto(applicant, false);

  expect(anotherPhoto.data).toEqual(getExpectedLivePhoto(exampleLivePhoto));
});

it("downloads a live photo", async () => {
  const photo = await uploadLivePhoto(applicant);

  const file = await onfido.downloadLivePhoto(photo.data.id);

  expect(file.status).toEqual(200);
  expect(file.data.slice(1, 4)).toEqual("PNG");
});

it("finds a live photo", async () => {
  const photo = await uploadLivePhoto(applicant);

  const livePhoto = await onfido.findLivePhoto(photo.data.id);

  expect(livePhoto.data).toEqual(getExpectedLivePhoto(exampleLivePhoto));
});

it("lists live photos", async () => {
  await uploadLivePhoto(applicant);
  await uploadLivePhoto(applicant);

  const livePhotos = await onfido.listLivePhotos(applicant.id);

  expect(livePhotos.data.live_photos).toEqual([
    getExpectedLivePhoto(exampleLivePhoto),
    getExpectedLivePhoto(exampleLivePhoto)
  ]);
});
