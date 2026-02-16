# ApplicantUpdater


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The applicant\&#39;s email address. Required if doing a US check, or a UK check for which &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;. | [optional] [default to undefined]
**dob** | **string** | The applicant\&#39;s date of birth | [optional] [default to undefined]
**id_numbers** | [**Array&lt;IdNumber&gt;**](IdNumber.md) |  | [optional] [default to undefined]
**phone_number** | **string** | The applicant\&#39;s phone number | [optional] [default to undefined]
**consents** | [**Array&lt;ApplicantConsentBuilder&gt;**](ApplicantConsentBuilder.md) | The applicant\&#39;s consents | [optional] [default to undefined]
**address** | [**AddressBuilder**](AddressBuilder.md) |  | [optional] [default to undefined]
**location** | [**LocationBuilder**](LocationBuilder.md) |  | [optional] [default to undefined]
**first_name** | **string** | The applicant\&#39;s first name | [optional] [default to undefined]
**last_name** | **string** | The applicant\&#39;s surname | [optional] [default to undefined]

## Example

```typescript
import { ApplicantUpdater } from '@onfido/api';

const instance: ApplicantUpdater = {
    email,
    dob,
    id_numbers,
    phone_number,
    consents,
    address,
    location,
    first_name,
    last_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
