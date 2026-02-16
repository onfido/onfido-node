# DocumentProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_of_birth** | **string** |  | [optional] [default to undefined]
**date_of_expiry** | **string** |  | [optional] [default to undefined]
**personal_number** | **string** |  | [optional] [default to undefined]
**document_numbers** | [**Array&lt;DocumentPropertiesDocumentNumbersInner&gt;**](DocumentPropertiesDocumentNumbersInner.md) |  | [optional] [default to undefined]
**document_type** | **string** |  | [optional] [default to undefined]
**first_name** | **string** |  | [optional] [default to undefined]
**middle_name** | **string** |  | [optional] [default to undefined]
**last_name** | **string** |  | [optional] [default to undefined]
**gender** | **string** |  | [optional] [default to undefined]
**issuing_country** | **string** |  | [optional] [default to undefined]
**nationality** | **string** |  | [optional] [default to undefined]
**issuing_state** | **string** |  | [optional] [default to undefined]
**issuing_date** | **string** |  | [optional] [default to undefined]
**valid_from** | **string** |  | [optional] [default to undefined]
**categorisation** | **string** |  | [optional] [default to undefined]
**mrz_line1** | **string** |  | [optional] [default to undefined]
**mrz_line2** | **string** |  | [optional] [default to undefined]
**mrz_line3** | **string** |  | [optional] [default to undefined]
**address** | **string** |  | [optional] [default to undefined]
**place_of_birth** | **string** |  | [optional] [default to undefined]
**spouse_name** | **string** |  | [optional] [default to undefined]
**widow_name** | **string** |  | [optional] [default to undefined]
**alias_name** | **string** |  | [optional] [default to undefined]
**issuing_authority** | **string** |  | [optional] [default to undefined]
**remarks** | **string** |  | [optional] [default to undefined]
**civil_state** | **string** |  | [optional] [default to undefined]
**expatriation** | **string** |  | [optional] [default to undefined]
**father_name** | **string** |  | [optional] [default to undefined]
**mother_name** | **string** |  | [optional] [default to undefined]
**religion** | **string** |  | [optional] [default to undefined]
**type_of_permit** | **string** |  | [optional] [default to undefined]
**version_number** | **string** |  | [optional] [default to undefined]
**document_subtype** | **string** |  | [optional] [default to undefined]
**profession** | **string** |  | [optional] [default to undefined]
**security_document_number** | **string** |  | [optional] [default to undefined]
**tax_number** | **string** |  | [optional] [default to undefined]
**nist_identity_evidence_strength** | **string** |  | [optional] [default to undefined]
**has_issuance_confirmation** | **string** |  | [optional] [default to undefined]
**real_id_compliance** | **boolean** |  | [optional] [default to undefined]
**security_tier** | **string** |  | [optional] [default to undefined]
**address_lines** | [**DocumentPropertiesAddressLines**](DocumentPropertiesAddressLines.md) |  | [optional] [default to undefined]
**barcode** | [**Array&lt;DocumentPropertiesBarcodeInner&gt;**](DocumentPropertiesBarcodeInner.md) |  | [optional] [default to undefined]
**nfc** | [**DocumentPropertiesNfc**](DocumentPropertiesNfc.md) |  | [optional] [default to undefined]
**document_classification** | [**DocumentPropertiesDocumentClassification**](DocumentPropertiesDocumentClassification.md) |  | [optional] [default to undefined]
**extracted_data** | [**DocumentPropertiesExtractedData**](DocumentPropertiesExtractedData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DocumentProperties } from '@onfido/api';

const instance: DocumentProperties = {
    date_of_birth,
    date_of_expiry,
    personal_number,
    document_numbers,
    document_type,
    first_name,
    middle_name,
    last_name,
    gender,
    issuing_country,
    nationality,
    issuing_state,
    issuing_date,
    valid_from,
    categorisation,
    mrz_line1,
    mrz_line2,
    mrz_line3,
    address,
    place_of_birth,
    spouse_name,
    widow_name,
    alias_name,
    issuing_authority,
    remarks,
    civil_state,
    expatriation,
    father_name,
    mother_name,
    religion,
    type_of_permit,
    version_number,
    document_subtype,
    profession,
    security_document_number,
    tax_number,
    nist_identity_evidence_strength,
    has_issuance_confirmation,
    real_id_compliance,
    security_tier,
    address_lines,
    barcode,
    nfc,
    document_classification,
    extracted_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
