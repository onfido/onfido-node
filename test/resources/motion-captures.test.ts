import { MotionCapture } from "onfido-node";

import {
  getExpectedObject,
  onfido,
  sampleapplicant_id,
  sortByMotionCaptureId
} from "../test-helpers";

const sampleId1 = process.env.ONFIDO_SAMPLE_MOTION_ID_1;
const sampleId2 = process.env.ONFIDO_SAMPLE_MOTION_ID_2;

const exampleMotionCapture: MotionCapture = {
  id: "id",
  created_at: "2020-01-01T00:00:00.000Z",
  href: "https://api.onfido.com/v3.6/motion_captures/id",
  download_href: "https://api.onfido.com/v3.6/motion_captures/id/download",
  file_name: "id.mp4",
  file_type: "video/mp4",
  file_size: 2_720_276
};

function getExpectedMotionCapture(
  example: MotionCapture,
  exampleId: string
): MotionCapture {
  return getExpectedObject(example, {
    id: exampleId,
    file_name: exampleId + ".mp4",
    download_href: expect.stringMatching(
      /^\/v3\.6\/motion_captures\/[0-9a-z-]+\/download$/
    )
  });
}

it("downloads a motion capture", async () => {
  const file = await onfido.downloadMotionCapture(sampleId1);

  expect(file.status).toEqual(200);
  expect(file.headers["content-type"]).toContain("video/mp4");
  expect(file.data.filename).toBeTruthy();
});

it("downloads a motion capture frame", async () => {
  const file = await onfido.downloadMotionCaptureFrame(sampleId1);

  expect(file.status).toEqual(200);
  expect(file.headers["content-type"]).toContain("image/jpeg");
  expect(file.data.buffer.slice(0, 10)).toContain("JFIF");
  expect(file.data.filename).toBeTruthy();
});

it("finds a motion capture", async () => {
  const motionCapture = (await onfido.findMotionCapture(sampleId1)).data;

  expect(motionCapture).toEqual(
    getExpectedMotionCapture(exampleMotionCapture, sampleId1)
  );
});

it("lists motion captures", async () => {
  const motionCaptures = (await onfido.listMotionCaptures(sampleapplicant_id))
    .data.motion_captures;

  expect(motionCaptures.sort(sortByMotionCaptureId)).toEqual([
    getExpectedMotionCapture(exampleMotionCapture, sampleId2),
    getExpectedMotionCapture(exampleMotionCapture, sampleId1)
  ]);
});
