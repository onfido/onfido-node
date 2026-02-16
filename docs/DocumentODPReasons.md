# DocumentODPReasons


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**photo_of_screen** | **string** | When the applicant\&#39;s document is on a physical screen or device. | [optional] [default to undefined]
**screenshot** | **string** | When the applicant has used their mobile phone, tablet, or computer to take a photo within the device. | [optional] [default to undefined]
**document_on_printed_paper** | **string** | When the applicant has previously captured an image of the document, printed it out, and has now taken a photo of this print out to upload. | [optional] [default to undefined]
**scan** | **string** | When the document has clearly been captured using a scanner and there are visible indicators of this | [optional] [default to undefined]

## Example

```typescript
import { DocumentODPReasons } from '@onfido/api';

const instance: DocumentODPReasons = {
    photo_of_screen,
    screenshot,
    document_on_printed_paper,
    scan,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
