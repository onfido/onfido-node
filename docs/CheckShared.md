# CheckShared


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_ids** | **Array&lt;string&gt;** | An array of webhook ids describing which webhooks to trigger for this check. | [optional] [default to undefined]
**applicant_id** | **string** | The ID of the applicant to do the check on. | [default to undefined]
**applicant_provides_data** | **boolean** | Send an applicant form to applicant to complete to proceed with check. Defaults to false.  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Array of tags being assigned to this check. | [optional] [default to undefined]
**redirect_uri** | **string** | For checks where &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;, redirect to this URI when the applicant has submitted their data. | [optional] [default to undefined]
**privacy_notices_read_consent_given** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { CheckShared } from '@onfido/api';

const instance: CheckShared = {
    webhook_ids,
    applicant_id,
    applicant_provides_data,
    tags,
    redirect_uri,
    privacy_notices_read_consent_given,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
