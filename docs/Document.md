# Document


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_type** | **string** | The file type of the uploaded file | [optional] [default to undefined]
**type** | [**DocumentTypes**](DocumentTypes.md) | The type of document | [optional] [default to undefined]
**side** | **string** | The side of the document, if applicable. The possible values are front and back | [optional] [default to undefined]
**issuing_country** | [**CountryCodes**](CountryCodes.md) | The issuing country of the document, a 3-letter ISO code. | [optional] [default to undefined]
**applicant_id** | **string** | The ID of the applicant whose document is being uploaded. | [optional] [default to undefined]
**id** | **string** | The unique identifier for the document | [default to undefined]
**created_at** | **string** | The date and time at which the document was uploaded | [optional] [default to undefined]
**href** | **string** | The uri of this resource | [optional] [default to undefined]
**download_href** | **string** | The uri that can be used to download the document | [optional] [default to undefined]
**file_name** | **string** | The name of the uploaded file | [optional] [default to undefined]
**file_size** | **number** | The size of the file in bytes | [optional] [default to undefined]

## Example

```typescript
import { Document } from '@onfido/api';

const instance: Document = {
    file_type,
    type,
    side,
    issuing_country,
    applicant_id,
    id,
    created_at,
    href,
    download_href,
    file_name,
    file_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
