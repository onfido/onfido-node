# Applicant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The applicant\&#39;s email address. Required if doing a US check, or a UK check for which &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;. | [optional] [default to undefined]
**dob** | **string** | The applicant\&#39;s date of birth | [optional] [default to undefined]
**id_numbers** | [**Array&lt;IdNumber&gt;**](IdNumber.md) |  | [optional] [default to undefined]
**phone_number** | **string** | The applicant\&#39;s phone number | [optional] [default to undefined]
**first_name** | **string** | The applicant\&#39;s first name | [optional] [default to undefined]
**last_name** | **string** | The applicant\&#39;s surname | [optional] [default to undefined]
**id** | **string** | The unique identifier for the applicant. | [default to undefined]
**created_at** | **string** | The date and time when this applicant was created. | [optional] [default to undefined]
**delete_at** | **string** | The date and time when this applicant is scheduled to be deleted. | [optional] [default to undefined]
**href** | **string** | The uri of this resource. | [optional] [default to undefined]
**sandbox** | **boolean** |  | [optional] [default to undefined]
**address** | [**Address**](Address.md) |  | [optional] [default to undefined]
**location** | [**Location**](Location.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Applicant } from '@onfido/api';

const instance: Applicant = {
    email,
    dob,
    id_numbers,
    phone_number,
    first_name,
    last_name,
    id,
    created_at,
    delete_at,
    href,
    sandbox,
    address,
    location,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
