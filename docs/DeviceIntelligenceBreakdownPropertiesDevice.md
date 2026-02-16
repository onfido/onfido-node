# DeviceIntelligenceBreakdownPropertiesDevice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdk_version** | **string** | The SDK version that was used. | [optional] [default to undefined]
**sdk_source** | **string** | The SDK used to upload the media. | [optional] [default to undefined]
**authentication_type** | **string** | The token used to authenticate the request. | [optional] [default to undefined]
**raw_model** | **string** | The model as set by the phone manufacturer (for Android and iOS) or the browser manufacturer (for Web). The model can be presented in name or number form depending on each manufacturer implementation. | [optional] [default to undefined]
**os** | **string** | The operating system of the device. The value came from manufacturer implementation (for Android and iOS) or browser\&#39;s user agent (for Web). | [optional] [default to undefined]
**browser** | **string** | The browser name reported by the browser\&#39;s user agent. | [optional] [default to undefined]
**emulator** | **boolean** | Whether the device is an emulator. | [optional] [default to undefined]
**randomized_device** | **boolean** | Whether the device is providing false randomized device and network information. | [optional] [default to undefined]
**fake_network_request** | **boolean** | Whether device is using stolen security tokens to send the network information. | [optional] [default to undefined]
**ip_reputation** | **string** | Whether there is highly suspicious traffic related to the IP address. The risk depends on the overall ratio of clear checks on a given IP. | [optional] [default to undefined]
**device_fingerprint_reuse** | **number** | The number of times the device was used to create a report for a new applicant. A value greater than 1 indicates potential device reuse. | [optional] [default to undefined]
**single_device_used** | **boolean** | Whether the document or biometric media were uploaded from a single device. | [optional] [default to undefined]
**document_capture** | **string** | Whether the document media were live captured from the device camera. | [optional] [default to undefined]
**biometric_capture** | **string** | Whether the biometric media were live captured from the device camera. | [optional] [default to undefined]

## Example

```typescript
import { DeviceIntelligenceBreakdownPropertiesDevice } from '@onfido/api';

const instance: DeviceIntelligenceBreakdownPropertiesDevice = {
    sdk_version,
    sdk_source,
    authentication_type,
    raw_model,
    os,
    browser,
    emulator,
    randomized_device,
    fake_network_request,
    ip_reputation,
    device_fingerprint_reuse,
    single_device_used,
    document_capture,
    biometric_capture,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
