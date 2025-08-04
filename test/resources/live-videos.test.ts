import { LiveVideo } from "onfido-node";

import {
  onfido,
  getExpectedObject,
  sampleapplicant_id,
  sortByLiveVideoId
} from "../test-helpers";

const sampleLiveVideoId1 =
  process.env.ONFIDO_SAMPLE_VIDEO_ID_1 || "sample_video_id_1";
const sampleLiveVideoId2 =
  process.env.ONFIDO_SAMPLE_VIDEO_ID_2 || "sample_video_id_2";

const exampleLiveVideo: LiveVideo = {
  id: "123-abc",
  created_at: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.6/live_videos/123-abc",
  download_href: "https://api.onfido.com/v3.6/live_videos/123-abc/download",
  file_name: "video.mov",
  file_type: "video/quicktime",
  file_size: 165_093
};

function getExpectedLiveVideo(
  exampleLivePhoto: LiveVideo,
  liveVideoId: string,
  challenge: any | Array<any> = null
) {
  return getExpectedObject(exampleLivePhoto, {
    id: liveVideoId,
    languages: null,
    challenge: challenge,
    download_href: expect.stringMatching(
      /^\/v3.6\/live_videos\/[0-9a-z-]+\/download$/
    )
  });
}

it("downloads a live video", async () => {
  const file = await onfido.downloadLiveVideo(sampleLiveVideoId2);

  expect(file.status).toEqual(200);
  expect(file.headers["content-type"]).toEqual("video/quicktime");
  expect(file.data.filename).toEqual("video.mov");
});

it("downloads a live video frame", async () => {
  const file = await onfido.downloadLiveVideoFrame(sampleLiveVideoId2);

  expect(file.status).toEqual(200);
  expect(file.headers["content-type"]).toEqual("image/jpeg");
  expect(file.data.buffer.slice(0, 10)).toContain("JFIF");
  expect(file.data.filename).toBeTruthy();
});

it("finds a live video", async () => {
  const liveVideo = (await onfido.findLiveVideo(sampleLiveVideoId1)).data;

  expect(liveVideo).toEqual(
    getExpectedLiveVideo(
      exampleLiveVideo,
      sampleLiveVideoId1,
      expect.anything()
    )
  );
});

it("lists live videos", async () => {
  const liveVideos = (await onfido.listLiveVideos(sampleapplicant_id)).data
    .live_videos;

  expect(liveVideos.sort(sortByLiveVideoId)).toEqual([
    getExpectedLiveVideo(exampleLiveVideo, sampleLiveVideoId1),
    getExpectedLiveVideo(exampleLiveVideo, sampleLiveVideoId2)
  ]);
});
