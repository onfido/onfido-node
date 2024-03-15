import { Applicant, Check, Document, Webhook, WorkflowRun } from "onfido-node";

export const exampleApplicant: Applicant = {
  id: "123-abc",
  created_at: "2020-01-01T00:00:00Z",
  delete_at: null,
  href: "/v3.6/applicants/123-abc",
  first_name: "Test",
  last_name: "Applicant",
  email: null,
  dob: null,
  id_numbers: [],
  address: {
    postcode: "AB12 3AB",
    country: "GBR",
    flat_number: null,
    building_number: null,
    building_name: null,
    street: null,
    sub_street: null,
    town: null,
    state: null,
    line1: null,
    line2: null,
    line3: null
  },
  phone_number: null,
  location: {
    ip_address: "127.0.0.1",
    country_of_residence: "GBR"
  }
};

export const exampleCheck: Check = {
  id: "abc-123",
  report_ids: ["report-1", "report-2"],
  created_at: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.6/checks/123-abc",
  applicant_id: "applicant-123",
  applicant_provides_data: false,
  sandbox: false,
  status: "in_progress",
  tags: [],
  result: null,
  form_uri: null,
  redirect_uri: null,
  results_uri: "https://dashboard.onfido.com/checks/123-abc",
  // privacy_notices_read_consent_given: true,
  webhook_ids: ["webhook-123"]
};

export const exampleDocument: Document = {
  id: "123-abc",
  applicant_id: "applicant-123",
  created_at: "2020-01-01T00:00:00Z",
  href: "https://api.onfido.com/v3.6/documents/123-abc",
  download_href: "https://api.onfido.com/v3.6/documents/123-abc/download",
  file_name: "sample_driving_licence.png",
  file_type: "png",
  file_size: 361_771,
  type: "driving_licence",
  side: null,
  issuing_country: null
};

export const exampleWebhook: Webhook = {
  id: "abc-123",
  url: "https://example.com",
  enabled: true,
  events: ["check.completed", "report.completed"],
  token: "webhook-token",
  href: "/v3/webhooks/abc-132",
  environments: ["sandbox"],
  payload_version: 3
};

export const exampleWorkflowRun: WorkflowRun = {
  id: "abc-123",
  applicant_id: "abc-123",
  workflow_id: "abc-123",
  workflow_version_id: 1,
  dashboard_url: "https://dashboard.onfido.com/results/uuid",
  status: "awaiting_input",
  output: null,
  reasons: null,
  error: null,
  link: null,
  created_at: "2022-06-28T15:39:42Z",
  updated_at: "2022-06-28T15:39:42Z",
  tags: []
};
