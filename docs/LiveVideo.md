# LiveVideo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the video. | [optional] [default to undefined]
**created_at** | **string** | The date and time at which the video was uploaded. | [optional] [default to undefined]
**href** | **string** | The uri of this resource. | [optional] [default to undefined]
**download_href** | **string** | The uri that can be used to download the video. | [optional] [default to undefined]
**file_name** | **string** | The name of the uploaded file. | [optional] [default to undefined]
**file_size** | **number** | The size of the file in bytes. | [optional] [default to undefined]
**file_type** | **string** | The file type of the uploaded file. | [optional] [default to undefined]
**challenge** | **Array&lt;{ [key: string]: any; }&gt;** | Challenge the end user was asked to perform during the video recording. | [optional] [default to undefined]

## Example

```typescript
import { LiveVideo } from '@onfido/api';

const instance: LiveVideo = {
    id,
    created_at,
    href,
    download_href,
    file_name,
    file_size,
    file_type,
    challenge,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
