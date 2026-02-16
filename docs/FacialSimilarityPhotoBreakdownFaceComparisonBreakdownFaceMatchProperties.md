# FacialSimilarityPhotoBreakdownFaceComparisonBreakdownFaceMatchProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **number** | A floating point number between 0 and 1 that expresses how similar the two faces are, where 1 is a perfect match. | [optional] [default to undefined]
**document_id** | **string** | The UUID for the document containing the extracted face that was used for face matching. | [optional] [default to undefined]

## Example

```typescript
import { FacialSimilarityPhotoBreakdownFaceComparisonBreakdownFaceMatchProperties } from '@onfido/api';

const instance: FacialSimilarityPhotoBreakdownFaceComparisonBreakdownFaceMatchProperties = {
    score,
    document_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
