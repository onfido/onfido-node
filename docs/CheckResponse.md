# CheckResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the check. | [default to undefined]
**created_at** | **string** | The date and time when this check was created. | [optional] [default to undefined]
**href** | **string** | The uri of this resource. | [optional] [default to undefined]
**status** | [**CheckStatus**](CheckStatus.md) |  | [optional] [default to undefined]
**result** | **string** | The overall result of the check, based on the results of the constituent reports. | [optional] [default to undefined]
**form_uri** | **string** | A link to the applicant form, if &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;. | [optional] [default to undefined]
**results_uri** | **string** | A link to the corresponding results page on the Onfido dashboard. | [optional] [default to undefined]
**report_ids** | **Array&lt;string&gt;** | An array of report ids. | [optional] [default to undefined]
**sandbox** | **boolean** | Indicates whether the object was created in the sandbox or not. | [optional] [default to undefined]
**paused** | **boolean** |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CheckResponse } from '@onfido/api';

const instance: CheckResponse = {
    id,
    created_at,
    href,
    status,
    result,
    form_uri,
    results_uri,
    report_ids,
    sandbox,
    paused,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
