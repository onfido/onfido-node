# RepeatAttemptsListRepeatAttemptsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_id** | **string** | The unique identifier of the matching Document report. | [optional] [default to undefined]
**applicant_id** | **string** | The unique identifier of the applicant for the matching Document report. | [optional] [default to undefined]
**date_of_birth** | **string** | Whether the dates of birth are exactly the same or are different. | [optional] [default to undefined]
**names** | **string** | Whether the names are exactly the same or are different. | [optional] [default to undefined]
**result** | **string** | The report result of this attempt. | [optional] [default to undefined]
**created_at** | **string** | When the matching report was created. | [optional] [default to undefined]
**completed_at** | **string** | When the matching report was completed. | [optional] [default to undefined]

## Example

```typescript
import { RepeatAttemptsListRepeatAttemptsInner } from '@onfido/api';

const instance: RepeatAttemptsListRepeatAttemptsInner = {
    report_id,
    applicant_id,
    date_of_birth,
    names,
    result,
    created_at,
    completed_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
