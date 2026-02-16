# WorkflowRunResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the Workflow Run. | [default to undefined]
**workflow_version_id** | **number** | The identifier for the Workflow version. | [optional] [default to undefined]
**dashboard_url** | **string** | The URL for viewing the Workflow Run results on your Onfido Dashboard. | [optional] [default to undefined]
**status** | [**WorkflowRunStatus**](WorkflowRunStatus.md) | The status of the Workflow Run. | [optional] [default to undefined]
**output** | **object** | Output object contains all of the properties configured on the Workflow version. | [optional] [default to undefined]
**reasons** | **Array&lt;string&gt;** | The reasons the Workflow Run outcome was reached. Configurable when creating the Workflow version. | [optional] [default to undefined]
**error** | [**WorkflowRunError**](WorkflowRunError.md) | Error object. Only set when the Workflow Run status is \&#39;error\&#39;. | [optional] [default to undefined]
**sdk_token** | **string** | Client token to use when loading this workflow run in the Onfido SDK. | [optional] [default to undefined]

## Example

```typescript
import { WorkflowRunResponse } from '@onfido/api';

const instance: WorkflowRunResponse = {
    id,
    workflow_version_id,
    dashboard_url,
    status,
    output,
    reasons,
    error,
    sdk_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
