# PhotoReasons


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digital_tampering** | **string** | Flags when evidence is found that the image was manipulated by Photoshop, or other software. | [optional] [default to undefined]
**fake_webcam** | **string** | Flags when evidence is found that a fake webcam was used. | [optional] [default to undefined]
**time_of_capture** | **string** | Flags when evidence is found that the live photo was taken more than 24 hours before live photo upload. | [optional] [default to undefined]
**emulator** | **string** | Flags when evidence is found that an Android emulator was used. | [optional] [default to undefined]
**reasons** | **string** | Additional comma separated details such as the exact digital tampering software used, or the name of the fake webcam. | [optional] [default to undefined]

## Example

```typescript
import { PhotoReasons } from '@onfido/api';

const instance: PhotoReasons = {
    digital_tampering,
    fake_webcam,
    time_of_capture,
    emulator,
    reasons,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
