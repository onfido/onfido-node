# IdentityEnhancedProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_address** | **number** | Returns address number which has been matched. | [optional] [default to undefined]
**matched_addresses** | [**Array&lt;IdentityEnhancedPropertiesMatchedAddressesInner&gt;**](IdentityEnhancedPropertiesMatchedAddressesInner.md) | Returns array of sources which contain matched addresses for the corresponding address number. | [optional] [default to undefined]

## Example

```typescript
import { IdentityEnhancedProperties } from '@onfido/api';

const instance: IdentityEnhancedProperties = {
    matched_address,
    matched_addresses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
