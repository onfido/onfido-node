# ResultsFeedback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_result** | **string** | The expected result for the check or report. | [optional] [default to undefined]
**check_id** | **string** | The ID of the check (only if report_id is not provided). | [optional] [default to undefined]
**report_id** | **string** | The ID of the check (only if check_id is not provided). | [optional] [default to undefined]
**feedback_notes** | **string** | Any additional information or feedback. | [optional] [default to undefined]

## Example

```typescript
import { ResultsFeedback } from '@onfido/api';

const instance: ResultsFeedback = {
    expected_result,
    check_id,
    report_id,
    feedback_notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
