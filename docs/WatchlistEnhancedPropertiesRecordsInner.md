# WatchlistEnhancedPropertiesRecordsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Array&lt;WatchlistEnhancedPropertiesRecordsInnerAddressInner&gt;**](WatchlistEnhancedPropertiesRecordsInnerAddressInner.md) | All addresses on file. | [optional] [default to undefined]
**alias** | [**Array&lt;WatchlistEnhancedPropertiesRecordsInnerAliasInner&gt;**](WatchlistEnhancedPropertiesRecordsInnerAliasInner.md) | Any names that the person is also known as. | [optional] [default to undefined]
**associate** | [**Array&lt;WatchlistEnhancedPropertiesRecordsInnerAssociateInner&gt;**](WatchlistEnhancedPropertiesRecordsInnerAssociateInner.md) | Any linked persons, for example family relatives or business partners. | [optional] [default to undefined]
**attribute** | [**Array&lt;WatchlistEnhancedPropertiesRecordsInnerAttributeInner&gt;**](WatchlistEnhancedPropertiesRecordsInnerAttributeInner.md) | Information about the person, for example hair color or nationality. | [optional] [default to undefined]
**date_of_birth** | **Array&lt;string&gt;** | All the date of births on file. | [optional] [default to undefined]
**event** | [**Array&lt;WatchlistEnhancedPropertiesRecordsInnerEventInner&gt;**](WatchlistEnhancedPropertiesRecordsInnerEventInner.md) | Information about events that have occurred to the person, for example deportation or arrest. | [optional] [default to undefined]
**full_name** | **string** | The name on file | [optional] [default to undefined]
**position** | **Array&lt;string&gt;** | The role, country and date of each position. | [optional] [default to undefined]
**source** | [**Array&lt;WatchlistEnhancedPropertiesRecordsInnerSourceInner&gt;**](WatchlistEnhancedPropertiesRecordsInnerSourceInner.md) | Details about where the information was obtained. | [optional] [default to undefined]

## Example

```typescript
import { WatchlistEnhancedPropertiesRecordsInner } from '@onfido/api';

const instance: WatchlistEnhancedPropertiesRecordsInner = {
    address,
    alias,
    associate,
    attribute,
    date_of_birth,
    event,
    full_name,
    position,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
