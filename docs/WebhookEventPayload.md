# WebhookEventPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_type** | [**WebhookEventResourceType**](WebhookEventResourceType.md) | Indicates the resource affected by this event. | [default to undefined]
**action** | [**WebhookEventType**](WebhookEventType.md) | The event that triggered this webhook. | [optional] [default to undefined]
**object** | [**WebhookEventPayloadObject**](WebhookEventPayloadObject.md) |  | [optional] [default to undefined]
**resource** | [**WebhookEventPayloadResource**](WebhookEventPayloadResource.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WebhookEventPayload } from '@onfido/api';

const instance: WebhookEventPayload = {
    resource_type,
    action,
    object,
    resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
