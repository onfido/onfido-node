import {
	cleanUpApplicants,
	cleanUpWebhooks,
	createApplicant,
	createWorkflowRun,
	onfido} from "../test-helpers";

beforeEach(async () => {
	applicant = (await createApplicant()).data;
});

afterAll(() => {
	return Promise.all([cleanUpApplicants(), cleanUpWebhooks()]);
});

const workflow_id = "e8c921eb-0495-44fe-b655-bcdcaffdafe5";
const file_id = "58813a17-904c-408f-8105-127dc8144b3e"

it("downloads a signed document file", async () => {
	const workflowRun = await createWorkflowRun(applicant, workflow_id);

	const file = await onfido.downloadQesDocument(workflowRun.data.id, fileId);

	expect(file.status).toEqual(200);
	expect(file.headers["content-type"]).toEqual("application/pdf");
	expect(file.data.buffer.slice(0, 5)).toEqual("%PDF-");
});