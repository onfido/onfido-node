# ApplicantResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
import { ApplicantResponse } from '@onfido/api';

const instance: ApplicantResponse = {
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
