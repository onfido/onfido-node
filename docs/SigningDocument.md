# SigningDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_id** | **string** | The ID of the applicant whose signing document is being uploaded. | [optional] [default to undefined]
**id** | **string** | The unique identifier for the signing document | [default to undefined]
**created_at** | **string** | The date and time at which the signing document was uploaded | [optional] [default to undefined]
**href** | **string** | The uri of this resource | [optional] [default to undefined]
**download_href** | **string** | The uri that can be used to download the signing document | [optional] [default to undefined]
**file_type** | **string** | The file type of the uploaded file | [optional] [default to undefined]
**file_name** | **string** | The name of the uploaded file | [optional] [default to undefined]
**file_size** | **number** | The size of the file in bytes | [optional] [default to undefined]

## Example

```typescript
import { SigningDocument } from '@onfido/api';

const instance: SigningDocument = {
    applicant_id,
    id,
    created_at,
    href,
    download_href,
    file_type,
    file_name,
    file_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
