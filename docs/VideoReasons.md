# VideoReasons


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fake_webcam** | **string** | Flags when evidence is found that a fake webcam was used. | [optional] [default to undefined]
**challenge_reuse** | **string** | Flags when evidence is found that the video was uploaded in an attempt to circumvent the randomness of the speaking and head turn challenges | [optional] [default to undefined]
**emulator** | **string** | Flags when evidence is found that an Android emulator was used. | [optional] [default to undefined]
**reasons** | **string** | Additional comma separated details such as the name of the fake webcam. | [optional] [default to undefined]

## Example

```typescript
import { VideoReasons } from '@onfido/api';

const instance: VideoReasons = {
    fake_webcam,
    challenge_reuse,
    emulator,
    reasons,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
