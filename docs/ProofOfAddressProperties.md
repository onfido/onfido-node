# ProofOfAddressProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | This property provides the address on the document. | [optional] [default to undefined]
**document_type** | **string** | This property provides the document type according to the set of supported documents. | [optional] [default to undefined]
**first_names** | **string** | This property provides the first names on the document, including any initials and middle names. | [optional] [default to undefined]
**last_names** | **string** | This property provided the last names on the document. | [optional] [default to undefined]
**issue_date** | **string** | This property provides the issue date of the document. | [optional] [default to undefined]
**issuer** | **string** | This property provides the document issuer (e.g. HSBC, British Gas). | [optional] [default to undefined]
**summary_period_start** | **string** | This property provides the summary period start date. | [optional] [default to undefined]
**summary_period_end** | **string** | This property provides the summary period end date. | [optional] [default to undefined]

## Example

```typescript
import { ProofOfAddressProperties } from '@onfido/api';

const instance: ProofOfAddressProperties = {
    address,
    document_type,
    first_names,
    last_names,
    issue_date,
    issuer,
    summary_period_start,
    summary_period_end,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
