# Changelog

## v5.6.0 23rd January 2026

- Release based on Onfido OpenAPI spec version [v5.6.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v5.6.0):
  - [SIG-3270] Update document_type supported by PoA
  - [DEXTV2-9337] Update list of document subtypes for extraction
  - [STUDIO-5634] Add timeline_file_download_url to the webhook event resource

## v5.5.0 22nd September 2025

- Release based on Onfido OpenAPI spec version [v5.5.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v5.5.0):
  - [SIG-3128] Add ssn breakdowns to IDR enhanced report

## v5.4.0 28th July 2025

- Release based on Onfido OpenAPI spec version [v5.4.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v5.4.0):
  - [ENT-26] Add AES document download endpoint
- [ENT-26] Add AES documents test

## v5.3.0 11th July 2025

- Release based on Onfido OpenAPI spec version [v5.3.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v5.3.0):
  - [DEXTV2-9494] Add manual_transmission_restriction to document with driver verification report

## v5.2.0 5th June 2025

- Release based on Onfido OpenAPI spec version [v5.2.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v5.2.0):
  - [BIO-7260] Add report configuration (including use_case) to checks

## v5.1.0 14th May 2025

- Release based on Onfido OpenAPI spec version [v5.1.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v5.1.0):
  - CAT-1760: create get applicant consents endpoint
  - [CAT-1911] Fix document_with_driving_licence_information to be a list of objects
  - [AF-1390] Fix: Device Intelligence Report Schema
  - [CAT-1944] Add OAuth fields for Webhook authentication
  - Fix storage of device_fingerprint_reuse breakdown and properties as float
  - Add .markdownlint.json to templates

## v5.0.0 21st February 2025

- Release based on Onfido OpenAPI spec version [v5.0.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v5.0.0):
  - Denote webhook event payload.object.href as a not required property
  - [CAT-1593] Drop invalid enum value from webhook event type
  - Add applicant_id in GET /workflow_runs
  - [CAT-1694] Define document file type as free text
  - [DOCCAP-2513] Add download-nfc-face endpoint
  - [CAT-1719] Don't impose a type on deprecated records property in watchlist reports
  - Remove documents property for reports where it's not applicable
  - Update openapi generator version to v7.10.0 (was v7.9.0)
  - Update openapi generator version to v7.11.0 (was v7.10.0)
- Add tests for Download NFC Face endpoint
- [Migration Guide](MIGRATION.md#upgrading-from-4x-to-5x)

## v4.6.0 24th January 2025

- Release based on Onfido OpenAPI spec version [v4.6.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v4.6.0):
  - [STUDIO-4308] Add driving_license to id_number enum
  - [CAT-1634] Add proxy configuration support to Java client library
  - Update README files (including templated ones)
  - Add customer_user_id in the webhook event resource
- test: wait for evidence folder to be available

## v4.5.0 8th January 2025

- Release based on Onfido OpenAPI spec version [v4.5.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v4.5.0):
  - [STUDIO-4305] Add download evidence folder path

## v4.4.0 20th December 2024

- Release based on Onfido OpenAPI spec version [v4.4.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v4.4.0):
  - [CAT-1593] Fix missing webhook type and evidence folder webhook
  - [CAT-1590] Allow any type for the workflow task output

## v4.3.0 27th November 2024

- Release based on Onfido OpenAPI spec version [v4.3.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v4.3.0):
  - [CAT-1581] Revert "[CAT-1528] Fix barcode field in document properties object"

## v4.2.0 19th November 2024

- Release based on Onfido OpenAPI spec version [v4.2.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v4.2.0):
  - feat: add new fields to facial similarity report objects
  - [CAT-1552] Add missing document types

## v4.1.0 8th November 2024

- Release based on Onfido OpenAPI spec version [v4.1.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v4.1.0):
  - [CAT-1528] Fix barcode field in document properties object

## v4.0.0 23rd October 2024

- Release based on Onfido OpenAPI spec version [v4.0.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v4.0.0):
  - [CAT-1379] Add a few missing properties
  - [CAT-1447] Fix applicant consents
  - [CAT-1379] Fix check creation, remove some deprecated properties and deprecate others
  - Use document-type enum for document upload
  - [CAT-1306] Add webhooks event resource
  - Upgrade OpenAPI generator to v7.9.0 (was v7.6.0)
  - [Migration Guide](MIGRATION.md#upgrading-from-4x-to-5x)

## v3.6.0 20th September 2024

- Release based on Onfido OpenAPI spec version [v3.5.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v3.5.0):
  - [CAT-1376] Add record item object definition for watchlist enhanced properties field

## v3.5.0 6th September 2024

- Release based on Onfido OpenAPI spec version [v3.4.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v3.4.0):
  - Fix error raised when uploading media with location in typescript
  - Fix examples in templated README in typescript
  - SDK Token: Remove UUID format from application_id
- test: fix workflow-runs test
- docs: update README with the new onfido version

## v3.4.0 24th July 2024

- Release based on Onfido OpenAPI spec version [v3.3.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v3.3.0):
  - Expose `customer_user_id` in `workflow_runs`
  - adding sdk_token to workflow run schema

## v3.3.0 17th July 2024

- Release based on Onfido OpenAPI spec version [v3.2.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v3.2.0):
  - [CAT-1289] Document report's properties: Add middle name
  - chore(qes): add documents endpoint
  - [CAT-1297] Webhook Event: remove uuid format from object.id
  - fix(qes): fix download document http method
  - Add started_at_iso8601 field in webhook event
  - add jpeg file type for documents

## v3.2.0 2nd July 2024

- Release based on Onfido OpenAPI spec version [v3.1.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v3.1.0):
  - Add missing fields in document report's properties

## v3.1.0 24th June 2024

- Library has been updated and automatically generated from [Onfido OpenAPI Spec](https://github.com/onfido/onfido-openapi-spec) (release [v3.0.0](https://github.com/onfido/onfido-openapi-spec/releases/tag/v3.0.0))
- Integration tests have been refreshed and API coverage increased

## v3.0.0 6th May 2024 (pre-release)

- Make library auto-generated and based on [Onfido OpenAPI spec](https://github.com/onfido/onfido-openapi-spec)

## v2.9.0 24 November 2023

- Add `resource` to `WebhookEvent`

## v2.8.0 24 November 2023

- Added `signed_evidence_file` method for WorkflowRuns

## v2.7.2, 14 June 2023

- Added `sandbox` field to Check.

## v2.7.1, 30 May 2023

- Fix bug when uploading documents with `validateImageQuality`.

## v2.7.0, 24 January 2023

- Updated to use API v3.6. For more details please see our [release notes](https://developers.onfido.com/release-notes#api-v36)

## v2.6.0, 7 December 2022

- Added WorkflowRuns support

## v2.5.0, 22 November 2022

- Added Motion capture support

## v2.4.0, 06 October 2022

- Updated to use API v3.5. For more details please see our [release notes](https://developers.onfido.com/release-notes#api-v35)

## v2.3.1, 24 May 2022

- Reinstated `privacyNoticesReadConsentGiven` parameter

## v2.3.0, 10 May 2022

- Updated to use API v3.4. For more details please see our [release notes](https://developers.onfido.com/release-notes#api-v34)
- Added `location` to applicant request, applicant response and documents request. `location` is a mandatory parameter for all applicants in order to create a check using API v3.4
- Added `consents` to applicant request. `consents` is a mandatory parameter for any applicant located in the United States in order to create a check using API v3.4
- Added `phoneNumber` to applicant request and response

## v2.2.0, 02 March 2022

- Updated to use API v3.3

## v2.1.2, 17 Feb 2022

- Fixed `advancedValidation` flag when uploading live photo

## v2.1.1, 6 Jan 2022

- Added `validate_image_quality` to document upload request

## v2.1.0, 24 June 2021

- Updated to use API v3.2

## v2.0.2, 25 May 2021

- Added `environments` to Webhook object

## v2.0.1, 17 May 2021

- Added `sub_result` to trigger sandbox pre-determined responses for Document report sub-results
- Added `consider` array functionality for sandbox pre-determined responses

## v2.0.0, 9 April 2021

- Updated to use API v3.1
- Region is now a required argument when constructing an `Onfido` instance. The region previously defaulted to `Region.EU`
- Add support for downloading a check

## v1.6.0, 8 March 2021

- Add `privacy_notices_read_consent_given` to the type for creating a chec

## v1.5.4, 12 January 2021

- Updated dependencies.

## v1.5.3, 3 December 2020

- Library should work now with `esModuleInterop: false`

## v1.5.2, 3 September 2020

- Fix type declaration location for TypeScript users

## v1.5.1, 20 August 2020

- Ensure consistent version in User-Agent

## v1.5.0, 14 August 2020

- Add User Agent header

## v1.4.0, 15 July 2020

- Add support for [Autofill endpoint](https://documentation.onfido.com/#autofill-beta)

## v1.3.0, 30 June 2020

- Add support for `cross_device_url` when generating an SDK token

## v1.2.0, 23 June 2020

- Allow specifying the filepath and content type explicitly for file upload
- Add support for the Canada region (api.ca.onfido.com)
- Add missing `document_ids` field to `CheckRequest` type

## v1.1.0, 2 April 2020

- Improved typing of check and report objects.

## v1.0.0, 23 January 2020

- The initial release of this library, which uses v3 of the Onfido API
