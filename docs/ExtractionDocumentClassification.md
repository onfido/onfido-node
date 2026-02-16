# ExtractionDocumentClassification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuing_country** | [**CountryCodes**](CountryCodes.md) | Document country in 3-letter ISO code. | [optional] [default to undefined]
**document_type** | [**DocumentTypes**](DocumentTypes.md) | Type of document. | [optional] [default to undefined]
**issuing_state** | **string** | The state that issued the document (if available). | [optional] [default to undefined]
**subtype** | **string** | The document subtype (if available). | [optional] [default to undefined]
**version** | **string** | The document issuing version (if available). | [optional] [default to undefined]

## Example

```typescript
import { ExtractionDocumentClassification } from '@onfido/api';

const instance: ExtractionDocumentClassification = {
    issuing_country,
    document_type,
    issuing_state,
    subtype,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
