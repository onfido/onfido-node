# AddressShared


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flat_number** | **string** | The flat number of this address | [optional] [default to undefined]
**building_number** | **string** | The building number of this address | [optional] [default to undefined]
**building_name** | **string** | The building name of this address | [optional] [default to undefined]
**street** | **string** | The street of the applicant\&#39;s address | [optional] [default to undefined]
**sub_street** | **string** | The sub-street of the applicant\&#39;s address | [optional] [default to undefined]
**town** | **string** | The town of the applicant\&#39;s address | [optional] [default to undefined]
**postcode** | **string** | The postcode or ZIP of the applicant\&#39;s address | [default to undefined]
**country** | [**CountryCodes**](CountryCodes.md) | The 3 character ISO country code of this address. For example, GBR is the country code for the United Kingdom | [default to undefined]
**state** | **string** | The address state. US states must use the USPS abbreviation (see also ISO 3166-2:US), for example AK, CA, or TX. | [optional] [default to undefined]
**line1** | **string** | Line 1 of the applicant\&#39;s address | [optional] [default to undefined]
**line2** | **string** | Line 2 of the applicant\&#39;s address | [optional] [default to undefined]
**line3** | **string** | Line 3 of the applicant\&#39;s address | [optional] [default to undefined]

## Example

```typescript
import { AddressShared } from '@onfido/api';

const instance: AddressShared = {
    flat_number,
    building_number,
    building_name,
    street,
    sub_street,
    town,
    postcode,
    country,
    state,
    line1,
    line2,
    line3,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
