import {
  Applicant,
  WatchlistMonitor,
  WatchlistMonitorMatch,
  WatchlistMonitorReportNameEnum,
} from "onfido-node";

import { exampleWatchlistMonitor } from "../test-examples";
import {
  cleanUpApplicants,
  cleanUpWebhooks,
  createApplicant,
  createWatchlistMonitor,
  getExpectedObject,
  onfido,
} from "../test-helpers";

function getExpectedWatchlistMonitor(
  exampleWatchlistMonitor: WatchlistMonitor,
  overrideProperties = {},
) {
  return getExpectedObject(exampleWatchlistMonitor, {
    applicant_id: expect.stringMatching(/^[0-9a-z-]+$/),
    id: expect.stringMatching(/^[0-9a-z-]+$/),
    report_name: expect.stringMatching(/^[a-zA-Z-_]+$/),
    deleted_at: null,
    tags: expect.anything(),
    is_sandbox: expect.anything(),
    created_at: expect.anything(),
    ...overrideProperties,
  });
}

let applicant: Applicant;

beforeEach(async () => {
  applicant = (await createApplicant()).data;
});

afterAll(() => {
  return Promise.all([cleanUpApplicants(), cleanUpWebhooks()]);
});

it("creates a watchlist standard monitor", async () => {
  const watchlistMonitor: WatchlistMonitor = (
    await createWatchlistMonitor(
      applicant,
      WatchlistMonitorReportNameEnum.Standard,
    )
  ).data;

  expect(watchlistMonitor).toEqual(
    getExpectedWatchlistMonitor(exampleWatchlistMonitor),
  );

  expect(watchlistMonitor.applicant_id).toEqual(applicant.id);
  expect(watchlistMonitor.report_name).toEqual(
    WatchlistMonitorReportNameEnum.Standard,
  );
});

it("creates a watchlist AML monitor", async () => {
  const watchlistMonitor: WatchlistMonitor = (
    await createWatchlistMonitor(applicant, WatchlistMonitorReportNameEnum.Aml)
  ).data;

  expect(watchlistMonitor).toEqual(
    getExpectedWatchlistMonitor(exampleWatchlistMonitor),
  );

  expect(watchlistMonitor.applicant_id).toEqual(applicant.id);
  expect(watchlistMonitor.report_name).toEqual(
    WatchlistMonitorReportNameEnum.Aml,
  );
});

it("finds a watchlist monitor", async () => {
  const watchlistMonitor: WatchlistMonitor = (
    await createWatchlistMonitor(
      applicant,
      WatchlistMonitorReportNameEnum.Standard,
    )
  ).data;

  const lookupWatchlistMonitor: WatchlistMonitor = (
    await onfido.findWatchlistMonitor(watchlistMonitor.id)
  ).data;

  expect(lookupWatchlistMonitor).toEqual(
    getExpectedWatchlistMonitor(exampleWatchlistMonitor),
  );
  expect(lookupWatchlistMonitor.id).toEqual(watchlistMonitor.id);
});

it("lists watchlist monitors", async () => {
  await createWatchlistMonitor(
    applicant,
    WatchlistMonitorReportNameEnum.Standard,
  );

  const watchlistMonitorsList: WatchlistMonitor[] = (
    await onfido.listWatchlistMonitors(applicant.id)
  ).data.monitors;

  expect(watchlistMonitorsList).toEqual(
    expect.arrayContaining([
      getExpectedWatchlistMonitor(exampleWatchlistMonitor),
    ]),
  );
});

it("deletes a watchlist monitor", async () => {
  const watchlistMonitor: WatchlistMonitor = (
    await createWatchlistMonitor(
      applicant,
      WatchlistMonitorReportNameEnum.Standard,
    )
  ).data;

  const deleteResponse = await onfido.deleteWatchlistMonitor(
    watchlistMonitor.id,
  );
  expect(deleteResponse.status).toEqual(204);
});

it("lists watchlist monitor matches", async () => {
  const watchlistMonitor: WatchlistMonitor = (
    await createWatchlistMonitor(
      applicant,
      WatchlistMonitorReportNameEnum.Standard,
    )
  ).data;

  const matches: WatchlistMonitorMatch[] = (
    await onfido.listWatchlistMonitorMatches(watchlistMonitor.id)
  ).data.matches;

  expect(matches).toEqual([]);
});

it("forces report creation", async () => {
  const watchlistMonitor: WatchlistMonitor = (
    await createWatchlistMonitor(
      applicant,
      WatchlistMonitorReportNameEnum.Standard,
    )
  ).data;

  const response = await onfido.forceReportCreationFromWatchlistMonitor(
    watchlistMonitor.id,
  );

  expect(response.status).toEqual(201);
});
