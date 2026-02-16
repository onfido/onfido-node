# WebhookResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier of the webhook. | [default to undefined]
**url** | **string** | The url that will listen to notifications (must be https). | [optional] [default to undefined]
**token** | **string** | Webhook secret token used to sign the webhook\&#39;s payload. | [optional] [default to undefined]
**href** | **string** | The API endpoint to retrieve the webhook. | [optional] [default to undefined]

## Example

```typescript
import { WebhookResponse } from '@onfido/api';

const instance: WebhookResponse = {
    id,
    url,
    token,
    href,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
