# CheckRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_names** | [**Array&lt;ReportName&gt;**](ReportName.md) | An array of report names (strings). | [default to undefined]
**document_ids** | **Array&lt;string&gt;** | Optional. An array of document ids, for use with Document reports only. If omitted, the Document report will use the most recently uploaded document by default. | [optional] [default to undefined]
**applicant_provides_data** | **boolean** | Send an applicant form to applicant to complete to proceed with check. Defaults to false. | [optional] [default to false]
**asynchronous** | **boolean** | Defaults to &#x60;true&#x60;. If set to &#x60;false&#x60;, you will only receive a response when all reports in your check have completed.  | [optional] [default to true]
**suppress_form_emails** | **boolean** | For checks where &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;, applicant form will not be automatically sent if &#x60;suppress_form_emails&#x60; is set to &#x60;true&#x60;. You can manually send the form at any time after the check has been created, using the link found in the form_uri attribute of the check object. Write-only. Defaults to false.  | [optional] [default to undefined]
**sub_result** | **string** | Triggers responses for particular sub-results for sandbox Document reports. | [optional] [default to undefined]
**consider** | [**Array&lt;ReportName&gt;**](ReportName.md) | Array of names of particular reports to return consider as their results. This is a feature available in sandbox testing | [optional] [default to undefined]
**us_driving_licence** | [**UsDrivingLicenceBuilder**](UsDrivingLicenceBuilder.md) |  | [optional] [default to undefined]
**report_configuration** | [**ReportConfiguration**](ReportConfiguration.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CheckRequest } from '@onfido/api';

const instance: CheckRequest = {
    report_names,
    document_ids,
    applicant_provides_data,
    asynchronous,
    suppress_form_emails,
    sub_result,
    consider,
    us_driving_licence,
    report_configuration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
