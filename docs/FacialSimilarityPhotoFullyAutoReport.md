# FacialSimilarityPhotoFullyAutoReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the report. Read-only. | [default to undefined]
**created_at** | **string** | The date and time at which the report was first initiated. Read-only. | [optional] [default to undefined]
**href** | **string** | The API endpoint to retrieve the report. Read-only. | [optional] [default to undefined]
**status** | [**ReportStatus**](ReportStatus.md) |  | [optional] [default to undefined]
**result** | [**ReportResult**](ReportResult.md) |  | [optional] [default to undefined]
**sub_result** | [**ReportSubResult**](ReportSubResult.md) |  | [optional] [default to undefined]
**check_id** | **string** | The ID of the check to which the report belongs. Read-only. | [optional] [default to undefined]
**name** | [**ReportName**](ReportName.md) |  | [default to undefined]
**documents** | [**Array&lt;ReportDocument&gt;**](ReportDocument.md) | Array of objects with document ids that were used in the Onfido engine. | [optional] [default to undefined]
**live_photos** | [**Array&lt;FacialSimilarityReportMedia&gt;**](FacialSimilarityReportMedia.md) | Array of objects with live photo ids that were used in the Onfido engine. | [optional] [default to undefined]
**live_videos** | [**Array&lt;FacialSimilarityReportMedia&gt;**](FacialSimilarityReportMedia.md) | Array of objects with live video ids that were used in the Onfido engine. | [optional] [default to undefined]
**motion_captures** | [**Array&lt;FacialSimilarityReportMedia&gt;**](FacialSimilarityReportMedia.md) | Array of objects with motion capture ids that were used in the Onfido engine. | [optional] [default to undefined]
**id_photos** | [**Array&lt;FacialSimilarityReportMedia&gt;**](FacialSimilarityReportMedia.md) | Array of objects with id photo ids that were used in the Onfido engine. | [optional] [default to undefined]
**breakdown** | [**FacialSimilarityPhotoFullyAutoBreakdown**](FacialSimilarityPhotoFullyAutoBreakdown.md) |  | [optional] [default to undefined]
**properties** | [**FacialSimilarityPhotoFullyAutoProperties**](FacialSimilarityPhotoFullyAutoProperties.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FacialSimilarityPhotoFullyAutoReport } from '@onfido/api';

const instance: FacialSimilarityPhotoFullyAutoReport = {
    id,
    created_at,
    href,
    status,
    result,
    sub_result,
    check_id,
    name,
    documents,
    live_photos,
    live_videos,
    motion_captures,
    id_photos,
    breakdown,
    properties,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
