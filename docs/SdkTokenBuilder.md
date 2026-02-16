# SdkTokenBuilder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_id** | **string** | The unique identifier of the applicant | [default to undefined]
**referrer** | **string** | The referrer URL pattern | [optional] [default to undefined]
**application_id** | **string** | The application ID (iOS or Android) | [optional] [default to undefined]
**cross_device_url** | **string** | The URL to be used by the Web SDK for the cross device flow. | [optional] [default to undefined]

## Example

```typescript
import { SdkTokenBuilder } from '@onfido/api';

const instance: SdkTokenBuilder = {
    applicant_id,
    referrer,
    application_id,
    cross_device_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
