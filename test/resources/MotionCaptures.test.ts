import { MotionCapture, OnfidoApiError, OnfidoDownload } from "onfido-node";

import {
  createNock,
  getExpectedObject,
  nockEnabled,
  onfido,
  sampleApplicantId,
  sortByMotionCaptureId
} from "../testHelpers";

const sampleId1 = process.env.ONFIDO_SAMPLE_MOTION_ID_1 || "motion_1fcd";
const sampleId2 = process.env.ONFIDO_SAMPLE_MOTION_ID_2 || "motion_0abc";

const exampleMotionCapture: MotionCapture = {
  id: "id",
  createdAt: "2020-01-01T00:00:00.000Z",
  href: "https://api.onfido.com/v3.5/motion_captures/id",
  downloadHref: "https://api.onfido.com/v3.5/motion_captures/id/download",
  fileName: "id.mp4",
  fileType: "video/mp4",
  fileSize: 2_720_276
};

function getExpectedMotionCapture(
  example: MotionCapture,
  exampleId: string
): MotionCapture {
  return getExpectedObject(example, {
    id: exampleId,
    fileName: exampleId + ".mp4",
    downloadHref: expect.stringMatching(
      /^\/v3\.5\/motion_captures\/[0-9a-z-]+\/download$/
    )
  });
}

it("downloads a motion capture", async () => {
  createNock()
    .get("/motion_captures/" + sampleId1 + "/download")
    .reply(200, {});

  const file = await onfido.motionCapture.download(sampleId1);

  expect(file).toBeInstanceOf(OnfidoDownload);
});

it("downloads a motion capture frame", async () => {
  try {
    createNock()
      .get("/motion_captures/" + sampleId1 + "/frame")
      .reply(200, {});

    const file = await onfido.motionCapture.frame(sampleId1);
    expect(file).toBeInstanceOf(OnfidoDownload);
  } catch (error) {
    expect(nockEnabled()).toBeFalsy();
    expect(error).toBeInstanceOf(OnfidoApiError);
    expect(error.message).toBe(
      "Failed to extract a frame from the provided video (status code 422) | {}"
    );
  }
});

it("finds a motion capture", async () => {
  createNock()
    .get("/motion_captures/" + sampleId1)
    .reply(200, JSON.stringify(exampleMotionCapture));

  const motionCapture = await onfido.motionCapture.find(sampleId1);

  expect(motionCapture).toEqual(
    getExpectedMotionCapture(exampleMotionCapture, sampleId1)
  );
});

it("lists motion captures", async () => {
  createNock()
    .get("/motion_captures/")
    .query({ applicant_id: sampleApplicantId })
    .reply(200, {
      motion_captures: [
        getExpectedMotionCapture(exampleMotionCapture, sampleId1),
        getExpectedMotionCapture(exampleMotionCapture, sampleId2)
      ]
    });

  const motionCaptures = await onfido.motionCapture.list(sampleApplicantId);

  expect(motionCaptures.sort(sortByMotionCaptureId)).toEqual([
    getExpectedMotionCapture(exampleMotionCapture, sampleId2),
    getExpectedMotionCapture(exampleMotionCapture, sampleId1)
  ]);
});
