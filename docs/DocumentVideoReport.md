# DocumentVideoReport


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
**breakdown** | [**DocumentBreakdown**](DocumentBreakdown.md) |  | [optional] [default to undefined]
**properties** | [**DocumentProperties**](DocumentProperties.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DocumentVideoReport } from '@onfido/api';

const instance: DocumentVideoReport = {
    id,
    created_at,
    href,
    status,
    result,
    sub_result,
    check_id,
    name,
    documents,
    breakdown,
    properties,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
