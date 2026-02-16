# WorkflowRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_id** | **string** | The unique identifier for the Applicant. | [default to undefined]
**workflow_id** | **string** | The unique identifier for the Workflow. | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags or labels assigned to the workflow run. | [optional] [default to undefined]
**customer_user_id** | **string** | Customer-provided user identifier. | [optional] [default to undefined]
**link** | [**WorkflowRunLink**](WorkflowRunLink.md) | Object for the configuration of the Workflow Run link. | [optional] [default to undefined]
**created_at** | **string** | The date and time when the Workflow Run was created. | [optional] [default to undefined]
**updated_at** | **string** | The date and time when the Workflow Run was last updated. | [optional] [default to undefined]
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
import { WorkflowRun } from '@onfido/api';

const instance: WorkflowRun = {
    applicant_id,
    workflow_id,
    tags,
    customer_user_id,
    link,
    created_at,
    updated_at,
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
