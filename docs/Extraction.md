# Extraction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **string** | The unique identifier of the uploaded document. | [optional] [default to undefined]
**document_classification** | [**ExtractionDocumentClassification**](ExtractionDocumentClassification.md) |  | [optional] [default to undefined]
**extracted_data** | [**ExtractionExtractedData**](ExtractionExtractedData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Extraction } from '@onfido/api';

const instance: Extraction = {
    document_id,
    document_classification,
    extracted_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
