# WebhookShared


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Determine if the webhook is active. | [optional] [default to undefined]
**events** | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | The events that will be published to the webhook. If the events parameter is omitted all the events will be subscribed.  | [optional] [default to undefined]
**environments** | **Array&lt;string&gt;** | The environments from which the webhook will receive events. Allowed values are “sandbox” and “live”. If the environments parameter is omitted the webhook will receive events from both environments.  | [optional] [default to undefined]
**payload_version** | **number** | Webhook version used to control the payload object when sending webhooks. | [optional] [default to undefined]
**oauth_enabled** | **boolean** | Determines if the webhook will fetch OAuth access tokens to send in the Authorization header. | [optional] [default to undefined]
**oauth_server_url** | **string** | The url to fetch the OAuth access token using client credentials grant. | [optional] [default to undefined]
**oauth_server_client_id** | **string** | The client id to authenticate the client credentials grant. | [optional] [default to undefined]
**oauth_server_client_secret** | **string** | The client secret to authenticate the client credentials grant. | [optional] [default to undefined]
**oauth_server_scope** | **string** | The scopes to be sent when requesting the access token. | [optional] [default to undefined]

## Example

```typescript
import { WebhookShared } from '@onfido/api';

const instance: WebhookShared = {
    enabled,
    events,
    environments,
    payload_version,
    oauth_enabled,
    oauth_server_url,
    oauth_server_client_id,
    oauth_server_client_secret,
    oauth_server_scope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
