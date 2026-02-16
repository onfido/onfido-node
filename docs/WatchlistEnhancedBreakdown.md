# WatchlistEnhancedBreakdown


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**politically_exposed_person** | [**WatchlistAmlBreakdownPoliticallyExposedPerson**](WatchlistAmlBreakdownPoliticallyExposedPerson.md) |  | [optional] [default to undefined]
**sanction** | [**WatchlistAmlBreakdownSanction**](WatchlistAmlBreakdownSanction.md) |  | [optional] [default to undefined]
**adverse_media** | [**WatchlistAmlBreakdownAdverseMedia**](WatchlistAmlBreakdownAdverseMedia.md) |  | [optional] [default to undefined]
**monitored_lists** | [**WatchlistAmlBreakdownLegalAndRegulatoryWarnings**](WatchlistAmlBreakdownLegalAndRegulatoryWarnings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WatchlistEnhancedBreakdown } from '@onfido/api';

const instance: WatchlistEnhancedBreakdown = {
    politically_exposed_person,
    sanction,
    adverse_media,
    monitored_lists,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
