import { Applicant, Check, Document, Webhook, WorkflowRun } from "onfido-node";

export const exampleApplicant: Applicant = {
  id: "123-abc",
  createdAt: "2020-01-01T00:00:00Z",
  deleteAt: null,
  href: "/v3.5/applicants/123-abc",
  firstName: "Test",
  lastName: "Applicant",
  email: null,
  dob: null,
  idNumbers: [],
  address: {
    postcode: "AB12 3AB",
    country: "GBR",
    flatNumber: null,
    buildingNumber: null,
    buildingName: null,
    street: null,
    subStreet: null,
    town: null,
    state: null,
    line1: null,
    line2: null,
    line3: null
  },
  phoneNumber: null,
  location: {
    ipAddress: "127.0.0.1",
    countryOfResidence: "GBR"
  }
};

export const exampleCheck: Check = {
  id: "abc-123",
  reportIds: ["report-1", "report-2"],
  createdAt: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.5/checks/123-abc",
  applicantId: "applicant-123",
  applicantProvidesData: false,
  status: "in_progress",
  tags: [],
  result: null,
  formUri: null,
  redirectUri: null,
  resultsUri: "https://dashboard.onfido.com/checks/123-abc",
  privacyNoticesReadConsentGiven: true,
  webhookIds: ["webhook-123"]
};

export const exampleDocument: Document = {
  id: "123-abc",
  applicantId: "applicant-123",
  createdAt: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.5/documents/123-abc",
  downloadHref: "https://api.onfido.com/v3.5/documents/123-abc/download",
  fileName: "sample_driving_licence.png",
  fileType: "png",
  fileSize: 361_771,
  type: "driving_licence",
  side: null,
  issuingCountry: null
};

export const exampleWebhook: Webhook = {
  id: "abc-123",
  url: "https://example.com",
  enabled: true,
  events: ["check.completed", "report.completed"],
  token: "webhook-token",
  href: "/v3/webhooks/abc-132",
  environments: ["sandbox"]
};

export const exampleWorkflowRun: WorkflowRun = {
  id: "abc-123",
  applicantId: "abc-123",
  workflowId: "abc-123",
  workflowVersionId: 1,
  dashboardUrl: "https://dashboard.onfido.com/results/uuid",
  status: "status",
  output: null,
  reasons: null,
  error: null,
  link: null,
  createdAt: "2022-06-28T15:39:42Z",
  updatedAt: "2022-06-28T15:39:42Z"
}
