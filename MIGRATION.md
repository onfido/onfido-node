# Migration Guide

## Upgrading from 3.x to 4.x

### Core Resources

- Applicants
  - Replace broken `ConsentsBuilder` object with a list of `ApplicantConsentBuilder` ones
- Workflow Runs
  - Rename `WorkflowRunSharedLink` object into `WorkflowRunLink` and `WorkflowRunSharedLinkLanguageEnum` into `WorkflowRunLinkLanguageEnum`
  - Merge and rename `WorkflowRunStatusEnum` and `WorkflowRunResponseStatusEnum` enum into `WorkflowRunStatus` enum for storing status information
  - Rename `WorkflowRunResponseError` object into `WorkflowRunError`
- Documents
  - Reuse already existent `DocumentTypes` enum when uploading documents

### Other Endpoints

- Webhooks
  - Define `WebhookEventObjectStatus` enum to collect webhook event object's status
  - Define `WebhookEventResourceType` enum to collect webhhok event resource's type
  - Define `WebhookEventPayloadResource` object to store webhook payload's contents
- Checks
  - Rename `CheckStatusEnum` enum into `CheckStatus` for accessing checks status
- Reports
  - Remove deprecated properties from `DeviceIntelligenceBreakdownPropertiesDevice` object: `true_os`, `os_anomaly`, `rooted` and `remote_software`
  - Remove deprecated properties from `DeviceIntelligenceBreakdownPropertiesIp` object: `vpn_detection`, `proxy_detection` and `type`
  - Deprecate `records` object from `WatchlistStandardProperties` and `WatchlistAmlProperties` objects (includes `WatchlistPepsOnly` and `WatchlistSanctionsOnly` ones)

### OpenAPI generator

- Version upgraded from 7.6.0 to 7.9.0
  - Enforce options paramters in all calls being a `RawAxiosRequestConfig` instead of just `any` object
