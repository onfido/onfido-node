# ReportConfiguration

Defines configuration options for facial similarity checks used to distinguish between onboarding and reverification scenarios. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facial_similarity_photo** | [**ReportConfigurationFacialSimilarity**](ReportConfigurationFacialSimilarity.md) |  | [optional] [default to undefined]
**facial_similarity_photo_fully_auto** | [**ReportConfigurationFacialSimilarity**](ReportConfigurationFacialSimilarity.md) |  | [optional] [default to undefined]
**facial_similarity_video** | [**ReportConfigurationFacialSimilarity**](ReportConfigurationFacialSimilarity.md) |  | [optional] [default to undefined]
**facial_similarity_motion** | [**ReportConfigurationFacialSimilarity**](ReportConfigurationFacialSimilarity.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReportConfiguration } from '@onfido/api';

const instance: ReportConfiguration = {
    facial_similarity_photo,
    facial_similarity_photo_fully_auto,
    facial_similarity_video,
    facial_similarity_motion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
