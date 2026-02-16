# WebhookEventPayloadResource

The resource affected by this event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier of the resource. | [optional] [default to undefined]
**applicant_id** | **string** | The unique identifier for the Applicant. | [optional] [default to undefined]
**created_at** | **string** | The date and time when the resource was created. | [optional] [default to undefined]
**updated_at** | **string** | The date and time when the resource was last updated. | [optional] [default to undefined]
**dashboard_url** | **string** | The URL for viewing the resource on Onfido Dashboard. | [optional] [default to undefined]
**workflow_id** | **string** | The unique identifier for the Workflow. | [optional] [default to undefined]
**workflow_run_id** | **string** |  | [optional] [default to undefined]
**workflow_version_id** | **number** | The identifier for the Workflow version. | [optional] [default to undefined]
**task_def_id** | **string** | The identifier for the Task Definition. | [optional] [default to undefined]
**task_def_version** | **string** | The task definition version. | [optional] [default to undefined]
**input** | **object** | Input object with the fields used by the Task execution. | [optional] [default to undefined]
**output** | **object** | Value field (it can be an Object, List, etc.) with the fields produced by the Task execution. | [optional] [default to undefined]
**reasons** | **Array&lt;string&gt;** | The reasons the Workflow Run outcome was reached. Configurable when creating the Workflow Version. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | A list of tags associated with the Workflow Run. | [optional] [default to undefined]
**link** | [**WorkflowRunLink**](WorkflowRunLink.md) | Object for the configuration of the Workflow Run link. | [optional] [default to undefined]
**error** | [**WorkflowRunError**](WorkflowRunError.md) | Error object that details why a Workflow Run is in Error status. | [optional] [default to undefined]
**customer_user_id** | **string** | Customer-provided user identifier. | [optional] [default to undefined]
**timeline_file_download_url** | **string** | Pre-signed URL to download the timeline file for the Workflow Run. | [optional] [default to undefined]

## Example

```typescript
import { WebhookEventPayloadResource } from '@onfido/api';

const instance: WebhookEventPayloadResource = {
    id,
    applicant_id,
    created_at,
    updated_at,
    dashboard_url,
    workflow_id,
    workflow_run_id,
    workflow_version_id,
    task_def_id,
    task_def_version,
    input,
    output,
    reasons,
    tags,
    link,
    error,
    customer_user_id,
    timeline_file_download_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
