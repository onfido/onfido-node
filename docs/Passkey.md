# Passkey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Passkey identifier. | [default to undefined]
**application_domain** | **string** | domain that the passkey is registered to, the rpId. | [default to undefined]
**state** | **string** | Current passkey state. | [default to undefined]
**created_at** | **string** | Timestamp when the passkey was created. | [default to undefined]
**last_used_at** | **string** | Timestamp when the passkey was last used. | [optional] [default to undefined]

## Example

```typescript
import { Passkey } from '@onfido/api';

const instance: Passkey = {
    id,
    application_domain,
    state,
    created_at,
    last_used_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
