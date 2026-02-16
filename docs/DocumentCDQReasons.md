# DocumentCDQReasons


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**obscured_data_points** | **string** | When data points are obscured to the point that we cannot confirm if the fonts match the expected ones. | [optional] [default to undefined]
**obscured_security_features** | **string** | When a critical security feature is obscured. This can also refer to when the holder\&#39;s wet signature, necessary for the document to be valid, is not present. | [optional] [default to undefined]
**abnormal_document_features** | **string** | One of 3 reasons (1) OCR Assisted Scans (i.e. when you\&#39;re able to move the mouse and highlight part of text), (2) Severely Washed out Background, (3) Overlapping Text. | [optional] [default to undefined]
**watermarks_digital_text_overlay** | **string** | Any digital text or electronic watermarks on the document. | [optional] [default to undefined]
**corner_removed** | **string** | If the corner has been physically cut off. This can be found on some documents that are no longer valid. | [optional] [default to undefined]
**punctured_document** | **string** | A punched hole is present. | [optional] [default to undefined]
**missing_back** | **string** | When the back of a document is needed for processing, but is not available. | [optional] [default to undefined]
**digital_document** | **string** | When a document has been published digitally, there aren\&#39;t enough security features to review so we cannot perform a full fraud assessment. | [optional] [default to undefined]

## Example

```typescript
import { DocumentCDQReasons } from '@onfido/api';

const instance: DocumentCDQReasons = {
    obscured_data_points,
    obscured_security_features,
    abnormal_document_features,
    watermarks_digital_text_overlay,
    corner_removed,
    punctured_document,
    missing_back,
    digital_document,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
