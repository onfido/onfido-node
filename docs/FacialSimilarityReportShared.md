# FacialSimilarityReportShared


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**Array&lt;ReportDocument&gt;**](ReportDocument.md) | Array of objects with document ids that were used in the Onfido engine. | [optional] [default to undefined]
**live_photos** | [**Array&lt;FacialSimilarityReportMedia&gt;**](FacialSimilarityReportMedia.md) | Array of objects with live photo ids that were used in the Onfido engine. | [optional] [default to undefined]
**live_videos** | [**Array&lt;FacialSimilarityReportMedia&gt;**](FacialSimilarityReportMedia.md) | Array of objects with live video ids that were used in the Onfido engine. | [optional] [default to undefined]
**motion_captures** | [**Array&lt;FacialSimilarityReportMedia&gt;**](FacialSimilarityReportMedia.md) | Array of objects with motion capture ids that were used in the Onfido engine. | [optional] [default to undefined]
**id_photos** | [**Array&lt;FacialSimilarityReportMedia&gt;**](FacialSimilarityReportMedia.md) | Array of objects with id photo ids that were used in the Onfido engine. | [optional] [default to undefined]

## Example

```typescript
import { FacialSimilarityReportShared } from '@onfido/api';

const instance: FacialSimilarityReportShared = {
    documents,
    live_photos,
    live_videos,
    motion_captures,
    id_photos,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
