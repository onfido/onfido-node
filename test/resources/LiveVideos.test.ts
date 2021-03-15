import nock from "nock";
import { LiveVideo, Onfido, OnfidoDownload } from "onfido-node";

const onfido = new Onfido({ apiToken: "api_token" });

const exampleLiveVideo: LiveVideo = {
  id: "123-abc",
  createdAt: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.1/live_videos/123-abc",
  downloadHref: "https://api.onfido.com/v3.1/live_videos/123-abc/downlaod",
  fileName: "video.mp4",
  fileType: "mp4",
  fileSize: 500_000
};

const exampleLiveVideoJson = {
  id: "123-abc",
  created_at: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.1/live_videos/123-abc",
  download_href: "https://api.onfido.com/v3.1/live_videos/123-abc/downlaod",
  file_name: "video.mp4",
  file_type: "mp4",
  file_size: 500_000
};

it("downloads a live video", async () => {
  nock("https://api.onfido.com/v3.1")
    .get("/live_videos/abc-123/download")
    .reply(200, {});

  const file = await onfido.liveVideo.download("abc-123");

  expect(file).toBeInstanceOf(OnfidoDownload);
});

it("downloads a live video frame", async () => {
  nock("https://api.onfido.com/v3.1")
    .get("/live_videos/abc-123/frame")
    .reply(200, {});

  const file = await onfido.liveVideo.frame("abc-123");

  expect(file).toBeInstanceOf(OnfidoDownload);
});

it("finds a live video", async () => {
  nock("https://api.onfido.com/v3.1")
    .get("/live_videos/123-abc")
    .reply(200, exampleLiveVideoJson);

  const liveVideo = await onfido.liveVideo.find("123-abc");

  expect(liveVideo).toEqual(exampleLiveVideo);
});

it("lists live videos", async () => {
  nock("https://api.onfido.com/v3.1")
    .get("/live_videos/")
    .query({ applicant_id: "applicant-123" })
    .reply(200, { live_videos: [exampleLiveVideoJson, exampleLiveVideoJson] });

  const liveVideos = await onfido.liveVideo.list("applicant-123");

  expect(liveVideos).toEqual([exampleLiveVideo, exampleLiveVideo]);
});
