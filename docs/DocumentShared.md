# DocumentShared


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_type** | **string** | The file type of the uploaded file | [optional] [default to undefined]
**type** | [**DocumentTypes**](DocumentTypes.md) | The type of document | [optional] [default to undefined]
**side** | **string** | The side of the document, if applicable. The possible values are front and back | [optional] [default to undefined]
**issuing_country** | [**CountryCodes**](CountryCodes.md) | The issuing country of the document, a 3-letter ISO code. | [optional] [default to undefined]
**applicant_id** | **string** | The ID of the applicant whose document is being uploaded. | [optional] [default to undefined]

## Example

```typescript
import { DocumentShared } from '@onfido/api';

const instance: DocumentShared = {
    file_type,
    type,
    side,
    issuing_country,
    applicant_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
