# Changelog

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
