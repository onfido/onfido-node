# RepeatAttemptsList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_id** | **string** | The unique identifier of the completed Document report. | [optional] [default to undefined]
**repeat_attempts** | [**Array&lt;RepeatAttemptsListRepeatAttemptsInner&gt;**](RepeatAttemptsListRepeatAttemptsInner.md) | An array of repeat attempt objects. If no repeat attempts were found, the array will be empty. The number of objects returned can increase over time if more matches are received.  | [default to undefined]
**attempts_count** | **number** | The total number of attempts using the same document, including the current report under assessment. | [optional] [default to undefined]
**attempts_clear_rate** | **number** | A number between 0 and 1 which indicates the proportion of attempts that have been cleared, including the current report under assessment. | [optional] [default to undefined]
**unique_mismatches_count** | **number** | The number of unique entries in the repeat_attempts field for which at least one of the fields is a mismatch. | [optional] [default to undefined]

## Example

```typescript
import { RepeatAttemptsList } from '@onfido/api';

const instance: RepeatAttemptsList = {
    report_id,
    repeat_attempts,
    attempts_count,
    attempts_clear_rate,
    unique_mismatches_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
