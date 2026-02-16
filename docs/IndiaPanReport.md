# IndiaPanReport


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
**breakdown** | [**IndiaPanReportAllOfBreakdown**](IndiaPanReportAllOfBreakdown.md) |  | [optional] [default to undefined]
**properties** | [**IndiaPanReportAllOfProperties**](IndiaPanReportAllOfProperties.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IndiaPanReport } from '@onfido/api';

const instance: IndiaPanReport = {
    id,
    created_at,
    href,
    status,
    result,
    sub_result,
    check_id,
    name,
    breakdown,
    properties,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
