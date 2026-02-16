# DocumentIQReasons


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dark_photo** | **string** | When an image of the document is too dark to be able to see data points. | [optional] [default to undefined]
**glare_on_photo** | **string** | When there is light reflecting on the document causing glare to obstruct data points. | [optional] [default to undefined]
**blurred_photo** | **string** | When data points are blurred and no reference can be made elsewhere in the document or if the data points are too blurry and \&#39;they could be something else\&#39;. | [optional] [default to undefined]
**covered_photo** | **string** | When data points have been covered either by the applicant or by another object such as a sticker. | [optional] [default to undefined]
**other_photo_issue** | **string** | Any other reason not listed, such as when holograms are obscuring data points. | [optional] [default to undefined]
**damaged_document** | **string** | When a document is damaged and we are unable to make out data points. | [optional] [default to undefined]
**incorrect_side** | **string** | When the incorrect side of a document has been uploaded, and we have not received the front. | [optional] [default to undefined]
**cut_off_document** | **string** | When data points are not included in the image due to the document being cut off. | [optional] [default to undefined]
**no_document_in_image** | **string** | If no document has been uploaded or there is a blank image. | [optional] [default to undefined]
**two_documents_uploaded** | **string** | When 2 different documents are submitted in the same check. | [optional] [default to undefined]

## Example

```typescript
import { DocumentIQReasons } from '@onfido/api';

const instance: DocumentIQReasons = {
    dark_photo,
    glare_on_photo,
    blurred_photo,
    covered_photo,
    other_photo_issue,
    damaged_document,
    incorrect_side,
    cut_off_document,
    no_document_in_image,
    two_documents_uploaded,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
