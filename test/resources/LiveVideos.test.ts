import { LiveVideo, OnfidoDownload, OnfidoApiError } from "onfido-node";

import { createNock, onfido, getExpectedObject, sampleApplicantId, nockEnabled, sortByLiveVideoId } from "../testHelpers";

const sampleLiveVideoId1 = process.env.ONFIDO_SAMPLE_VIDEO_ID_1 || "sample_video_id_1"
const sampleLiveVideoId2 = process.env.ONFIDO_SAMPLE_VIDEO_ID_2 || "sample_video_id_2"

const exampleLiveVideo: LiveVideo = {
  id: "123-abc",
  createdAt: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.5/live_videos/123-abc",
  downloadHref: "https://api.onfido.com/v3.5/live_videos/123-abc/download",
  fileName: "video.mov",
  fileType: "video/quicktime",
  fileSize: 165_093
};

function getExpectedLiveVideo(exampleLivePhoto: LiveVideo, liveVideoId: string)
{
  return getExpectedObject(exampleLivePhoto, {
    'id': liveVideoId,
    'languages': null,
    'challenge': expect.anything(),
    'downloadHref': expect.stringMatching(/^\/v3.5\/live_videos\/[0-9a-z-]+\/download$/) });
}

it("downloads a live video", async () => {
  createNock()
    .get("/live_videos/" + sampleLiveVideoId2 + "/download")
    .reply(200, {});

  const file = await onfido.liveVideo.download(sampleLiveVideoId2);

  expect(file).toBeInstanceOf(OnfidoDownload);
});

it("downloads a live video frame", async () => {
  try {
    createNock()
    .get("/live_videos/" + sampleLiveVideoId2 + "/frame")
    .reply(200, {});

    const file = await onfido.liveVideo.frame(sampleLiveVideoId2);
    expect(file).toBeInstanceOf(OnfidoDownload);
  } catch (error) {
    expect(nockEnabled()).toBeFalsy();
    expect(error).toBeInstanceOf(OnfidoApiError);
    expect(error.message).toBe("Failed to extract a frame from the provided video (status code 422) | {}");
  }
});

it("finds a live video", async () => {
  createNock()
    .get("/live_videos/" + sampleLiveVideoId1)
    .reply(200, JSON.stringify(exampleLiveVideo));

  const liveVideo = await onfido.liveVideo.find(sampleLiveVideoId1);

  expect(liveVideo).toEqual(getExpectedLiveVideo(exampleLiveVideo, sampleLiveVideoId1));
});

it("lists live videos", async () => {
  createNock()
    .get("/live_videos/")
    .query({ applicant_id: sampleApplicantId })
    .reply(200, { live_videos: [getExpectedLiveVideo(exampleLiveVideo, sampleLiveVideoId1),
                                getExpectedLiveVideo(exampleLiveVideo, sampleLiveVideoId2)] });

  const liveVideos = await onfido.liveVideo.list(sampleApplicantId);

  expect(liveVideos.sort(sortByLiveVideoId)).toEqual([getExpectedLiveVideo(exampleLiveVideo,sampleLiveVideoId1),
                                             getExpectedLiveVideo(exampleLiveVideo,sampleLiveVideoId2)]);
});
