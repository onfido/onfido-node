import { Applicant, IdPhoto } from "onfido-node";

import {
  onfido,
  getExpectedObject,
  createApplicant,
  cleanUpApplicants,
  uploadIdPhoto
} from "../test-helpers";

const exampleIdPhoto: IdPhoto = {
  id: "123-abc",
  created_at: "2020-01-01T00:00:00Z",
  href: "/v3.6/live_photos/123-abc",
  download_href: "/v3.6/live_photos/123-abc/download",
  file_name: "7e255271-9662-42c7-a997-ab27b645ad15.png",
  file_type: "image/png",
  file_size: 395_856
};

function getExpectedIdPhoto(uploadedIdPhoto: IdPhoto) {
  return getExpectedObject(uploadedIdPhoto, {
    download_href: expect.stringMatching(
      /^\/v3.6\/id_photos\/[0-9a-z-]+\/download$/
    ),
    file_name: expect.stringMatching(/^[0-9a-f-]+\.png$/)
  });
}

let applicant: Applicant;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
});

afterAll(() => {
  return cleanUpApplicants();
});

it("uploads a id photo", async () => {
  const id_photo = await uploadIdPhoto(applicant);

  expect(id_photo.data).toEqual(getExpectedIdPhoto(exampleIdPhoto));
});

it("downloads a id photo", async () => {
  const photo = await uploadIdPhoto(applicant);

  const file = await onfido.downloadIdPhoto(photo.data.id);

  expect(file.status).toEqual(200);
  expect(file.data.slice(1, 4)).toEqual("PNG");
});

it("finds a id photo", async () => {
  const photo = await uploadIdPhoto(applicant);

  const id_Photo = await onfido.findIdPhoto(photo.data.id);

  expect(id_Photo.data).toEqual(getExpectedIdPhoto(exampleIdPhoto));
});

it("lists id photos", async () => {
  await uploadIdPhoto(applicant);
  await uploadIdPhoto(applicant);

  const idPhotos = await onfido.listIdPhotos(applicant.id);

  expect(idPhotos.data.id_photos).toEqual([
    getExpectedIdPhoto(exampleIdPhoto),
    getExpectedIdPhoto(exampleIdPhoto)
  ]);
});
