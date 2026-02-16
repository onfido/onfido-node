# DeviceIntelligenceBreakdownPropertiesGeolocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **string** | City location of the IP address. | [optional] [default to undefined]
**region** | **string** | Region location of the IP address. | [optional] [default to undefined]
**country** | [**CountryCodes**](CountryCodes.md) | Country location of the IP address in a three letter format. | [optional] [default to undefined]

## Example

```typescript
import { DeviceIntelligenceBreakdownPropertiesGeolocation } from '@onfido/api';

const instance: DeviceIntelligenceBreakdownPropertiesGeolocation = {
    city,
    region,
    country,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
