# TaskItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier for the Task. | [optional] [default to undefined]
**workflow_run_id** | **string** | The workflow run id the task belongs to. | [optional] [default to undefined]
**task_def_id** | **string** | The identifier for the Task Definition. | [optional] [default to undefined]
**task_def_version** | **string** | The task definition version. | [optional] [default to undefined]
**created_at** | **string** | The date and time when the Task was created. | [optional] [default to undefined]
**updated_at** | **string** | The date and time when the Task was last updated. | [optional] [default to undefined]

## Example

```typescript
import { TaskItem } from '@onfido/api';

const instance: TaskItem = {
    id,
    workflow_run_id,
    task_def_id,
    task_def_version,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
