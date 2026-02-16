# WatchlistMonitorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the monitor. | [default to undefined]
**created_at** | **string** | The date and time at which the monitor was created. | [optional] [default to undefined]
**deleted_at** | **string** | The date and time at which the monitor was deleted. If the monitor is still active, this field will be null. | [optional] [default to undefined]
**is_sandbox** | **boolean** | Indicates whether the object was created in the sandbox or not. | [optional] [default to false]

## Example

```typescript
import { WatchlistMonitorResponse } from '@onfido/api';

const instance: WatchlistMonitorResponse = {
    id,
    created_at,
    deleted_at,
    is_sandbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
