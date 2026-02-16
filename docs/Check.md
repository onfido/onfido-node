# Check


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_ids** | **Array&lt;string&gt;** | An array of webhook ids describing which webhooks to trigger for this check. | [optional] [default to undefined]
**applicant_id** | **string** | The ID of the applicant to do the check on. | [default to undefined]
**applicant_provides_data** | **boolean** | Send an applicant form to applicant to complete to proceed with check. Defaults to false.  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Array of tags being assigned to this check. | [optional] [default to undefined]
**redirect_uri** | **string** | For checks where &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;, redirect to this URI when the applicant has submitted their data. | [optional] [default to undefined]
**privacy_notices_read_consent_given** | **boolean** |  | [optional] [default to undefined]
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
import { Check } from '@onfido/api';

const instance: Check = {
    webhook_ids,
    applicant_id,
    applicant_provides_data,
    tags,
    redirect_uri,
    privacy_notices_read_consent_given,
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
