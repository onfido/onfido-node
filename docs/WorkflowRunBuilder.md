# WorkflowRunBuilder


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
**custom_data** | **{ [key: string]: any; }** | Object with Custom Input Data to be used in the Workflow Run. | [optional] [default to undefined]

## Example

```typescript
import { WorkflowRunBuilder } from '@onfido/api';

const instance: WorkflowRunBuilder = {
    applicant_id,
    workflow_id,
    tags,
    customer_user_id,
    link,
    created_at,
    updated_at,
    custom_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
