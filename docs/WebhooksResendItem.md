# WebhooksResendItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **string** | ID of the resource whose webhooks are to be retriggered. | [default to undefined]
**event** | [**WebhookEventType**](WebhookEventType.md) | The events that should retrigger webhooks. Accepts values check.completed. | [default to undefined]

## Example

```typescript
import { WebhooksResendItem } from '@onfido/api';

const instance: WebhooksResendItem = {
    resource_id,
    event,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
