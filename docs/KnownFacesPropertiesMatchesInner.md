# KnownFacesPropertiesMatchesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_id** | **string** | The applicant ID of the matched applicant. | [optional] [default to undefined]
**score** | **number** | A floating point number between 0 and 1 that expresses how similar the two faces are, where 1 is a perfect match. | [optional] [default to undefined]
**media_id** | **string** | The corresponding UUID for the media type. | [optional] [default to undefined]
**media_type** | **string** | The media type (for example live_photos or live_videos). | [optional] [default to undefined]
**suspected** | **boolean** | Indicates if match is suspected based on fuzzy name matching feature. Dependent on feature being active for account, otherwise defaults to true. | [optional] [default to undefined]

## Example

```typescript
import { KnownFacesPropertiesMatchesInner } from '@onfido/api';

const instance: KnownFacesPropertiesMatchesInner = {
    applicant_id,
    score,
    media_id,
    media_type,
    suspected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
