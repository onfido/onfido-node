# WatchlistMonitor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_id** | **string** | The ID for the applicant associated with the monitor. | [default to undefined]
**report_name** | **string** | The name of the report type the monitor creates. | [default to undefined]
**tags** | **Array&lt;string&gt;** | A list of tags associated with this monitor. These tags will be applied to each check this monitor creates. | [optional] [default to undefined]
**id** | **string** | The unique identifier for the monitor. | [default to undefined]
**created_at** | **string** | The date and time at which the monitor was created. | [optional] [default to undefined]
**deleted_at** | **string** | The date and time at which the monitor was deleted. If the monitor is still active, this field will be null. | [optional] [default to undefined]
**is_sandbox** | **boolean** | Indicates whether the object was created in the sandbox or not. | [optional] [default to false]

## Example

```typescript
import { WatchlistMonitor } from '@onfido/api';

const instance: WatchlistMonitor = {
    applicant_id,
    report_name,
    tags,
    id,
    created_at,
    deleted_at,
    is_sandbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
