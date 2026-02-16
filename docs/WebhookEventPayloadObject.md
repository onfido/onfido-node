# WebhookEventPayloadObject

The object affected by this event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier of the resource. | [default to undefined]
**status** | [**WebhookEventObjectStatus**](WebhookEventObjectStatus.md) |  | [optional] [default to undefined]
**started_at_iso8601** | **string** | The date and time when the operation was started, if available. | [optional] [default to undefined]
**completed_at_iso8601** | **string** | The date and time when the operation was completed, if available. | [optional] [default to undefined]
**href** | **string** | The uri of the resource. | [optional] [default to undefined]

## Example

```typescript
import { WebhookEventPayloadObject } from '@onfido/api';

const instance: WebhookEventPayloadObject = {
    id,
    status,
    started_at_iso8601,
    completed_at_iso8601,
    href,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
