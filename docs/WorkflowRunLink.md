# WorkflowRunLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | Link to access the Workflow Run without the need to integrate with Onfido\&#39;s SDKs. | [optional] [default to undefined]
**completed_redirect_url** | **string** | When the interactive section of the Workflow Run has completed successfully, the user will be redirected to this URL instead of seeing the default Onfido \&#39;thank you\&#39; page. | [optional] [default to undefined]
**expired_redirect_url** | **string** | When the link has expired, the user will be immediately redirected to this URL instead of seeing the default Onfido error message. | [optional] [default to undefined]
**expires_at** | **string** | Date and time when the link will expire. | [optional] [default to undefined]
**language** | **string** | The code for the language when the workflow run is acessed using the link. | [optional] [default to undefined]

## Example

```typescript
import { WorkflowRunLink } from '@onfido/api';

const instance: WorkflowRunLink = {
    url,
    completed_redirect_url,
    expired_redirect_url,
    expires_at,
    language,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
