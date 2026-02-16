# ApplicantShared


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The applicant\&#39;s email address. Required if doing a US check, or a UK check for which &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;. | [optional] [default to undefined]
**dob** | **string** | The applicant\&#39;s date of birth | [optional] [default to undefined]
**id_numbers** | [**Array&lt;IdNumber&gt;**](IdNumber.md) |  | [optional] [default to undefined]
**phone_number** | **string** | The applicant\&#39;s phone number | [optional] [default to undefined]

## Example

```typescript
import { ApplicantShared } from '@onfido/api';

const instance: ApplicantShared = {
    email,
    dob,
    id_numbers,
    phone_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
