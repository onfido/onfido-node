# FacialSimilarityPhotoProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **number** | A floating point number between 0 and 1. The closer the score is to 0, the more likely it is to be a spoof (i.e. photos of printed photos, or photos of digital screens). Conversely, the closer it is to 1, the less likely it is to be a spoof.  | [optional] [default to undefined]

## Example

```typescript
import { FacialSimilarityPhotoProperties } from '@onfido/api';

const instance: FacialSimilarityPhotoProperties = {
    score,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
