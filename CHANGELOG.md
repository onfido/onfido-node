# Changelog

## v2.1.1, 6 Jan 2022

- Add `validate_image_quality` to document upload request

## v2.1.0, 24 June 2021

- Updated to use API v3.2

## v2.0.2, 25 May 2021

- Add `environments` to Webhook object 

## v2.0.1, 17 May 2021

- Add `sub_result` to trigger sandbox pre-determined responses for Document report sub-results
- Add `consider` array functionality for sandbox pre-determined responses 

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
