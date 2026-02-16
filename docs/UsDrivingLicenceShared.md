# UsDrivingLicenceShared

An object that contains all accepted fields for the Driver\'s License Data Verification report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_number** | **string** | Driving licence ID number | [default to undefined]
**issue_state** | **string** | Two letter code of issuing state (state-issued driving licenses only) | [default to undefined]
**address_line_1** | **string** | Line 1 of the address | [optional] [default to undefined]
**address_line_2** | **string** | Line 2 of the address | [optional] [default to undefined]
**city** | **string** | The city of the owner\&#39;s address | [optional] [default to undefined]
**date_of_birth** | **string** | Date of birth in yyyy-mm-dd format | [optional] [default to undefined]
**document_category** | **string** | Document category. | [optional] [default to undefined]
**expiration_date** | **string** | Expiration date of the driving licence in yyyy-mm-dd format | [optional] [default to undefined]
**eye_color_code** | **string** | Eye color code. | [optional] [default to undefined]
**first_name** | **string** | The owner\&#39;s first name | [optional] [default to undefined]
**gender** | **string** |  | [optional] [readonly] [default to undefined]
**issue_date** | **string** | Issue date in yyyy-mm-dd format | [optional] [default to undefined]
**last_name** | **string** | The owner\&#39;s surname | [optional] [default to undefined]
**middle_name** | **string** | The owner\&#39;s middle name | [optional] [default to undefined]
**name_suffix** | **string** | The owner\&#39;s name suffix | [optional] [default to undefined]
**postal_code** | **string** | The postcode or ZIP of the owner\&#39;s address | [optional] [default to undefined]
**state** | **string** | 2-characters state code | [optional] [default to undefined]
**weight_measure** | **number** | Weight in pounds | [optional] [default to undefined]

## Example

```typescript
import { UsDrivingLicenceShared } from '@onfido/api';

const instance: UsDrivingLicenceShared = {
    id_number,
    issue_state,
    address_line_1,
    address_line_2,
    city,
    date_of_birth,
    document_category,
    expiration_date,
    eye_color_code,
    first_name,
    gender,
    issue_date,
    last_name,
    middle_name,
    name_suffix,
    postal_code,
    state,
    weight_measure,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
