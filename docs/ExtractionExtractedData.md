# ExtractionExtractedData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_number** | **string** | The official document number. | [optional] [default to undefined]
**first_name** | **string** | First name. | [optional] [default to undefined]
**last_name** | **string** | Last name. | [optional] [default to undefined]
**full_name** | **string** | Full name. | [optional] [default to undefined]
**spouse_name** | **string** | Spouse name (French documents only). | [optional] [default to undefined]
**widow_name** | **string** | Widow name (French documents only). | [optional] [default to undefined]
**alias_name** | **string** | Alias name (French documents only). | [optional] [default to undefined]
**gender** | **string** | Gender (Valid values are Male and Female). | [optional] [default to undefined]
**date_of_birth** | **string** | Date of birth in YYYY-MM-DD format. | [optional] [default to undefined]
**date_of_expiry** | **string** | Date of expiry in YYYY-MM-DD format. | [optional] [default to undefined]
**expiry_date** | **string** | Date of expiry in YYYY-MM-DD format. | [optional] [default to undefined]
**nationality** | **string** | Nationality in 3-letter ISO code. | [optional] [default to undefined]
**mrz_line_1** | **string** | Line 1 of the MRZ code. | [optional] [default to undefined]
**mrz_line_2** | **string** | Line 2 of the MRZ code. | [optional] [default to undefined]
**mrz_line_3** | **string** | Line 3 of the MRZ code. | [optional] [default to undefined]
**address_1** | **string** | Line 1 of the address. | [optional] [default to undefined]
**address_2** | **string** | Line 2 of the address. | [optional] [default to undefined]
**address_3** | **string** | Line 3 of the address. | [optional] [default to undefined]
**address_4** | **string** | Line 4 of the address. | [optional] [default to undefined]
**address_5** | **string** | Line 5 of the address. | [optional] [default to undefined]
**issuing_authority** | **string** | Issuing authority. | [optional] [default to undefined]
**issuing_country** | [**CountryCodes**](CountryCodes.md) | Document country in 3-letter ISO code. | [optional] [default to undefined]
**document_type** | [**DocumentTypes**](DocumentTypes.md) | Type of document. | [optional] [default to undefined]
**place_of_birth** | **string** | Place of birth. | [optional] [default to undefined]
**issuing_state** | **string** | The state that issued the document. | [optional] [default to undefined]
**issuing_date** | **string** | Issuing date in YYYY-MM-DD format. | [optional] [default to undefined]
**personal_number** | **string** | The owner\&#39;s unique identification number. | [optional] [default to undefined]

## Example

```typescript
import { ExtractionExtractedData } from '@onfido/api';

const instance: ExtractionExtractedData = {
    document_number,
    first_name,
    last_name,
    full_name,
    spouse_name,
    widow_name,
    alias_name,
    gender,
    date_of_birth,
    date_of_expiry,
    expiry_date,
    nationality,
    mrz_line_1,
    mrz_line_2,
    mrz_line_3,
    address_1,
    address_2,
    address_3,
    address_4,
    address_5,
    issuing_authority,
    issuing_country,
    document_type,
    place_of_birth,
    issuing_state,
    issuing_date,
    personal_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
