/* tslint:disable */
/* eslint-disable */
/**
 * Onfido API v3.6
 * The Onfido API
 *
 * The version of the OpenAPI document: 3.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { WatchlistAmlBreakdownLegalAndRegulatoryWarnings } from './watchlist-aml-breakdown-legal-and-regulatory-warnings';
// May contain unused imports in some cases
// @ts-ignore
import { WatchlistAmlBreakdownPoliticallyExposedPerson } from './watchlist-aml-breakdown-politically-exposed-person';
// May contain unused imports in some cases
// @ts-ignore
import { WatchlistAmlBreakdownSanction } from './watchlist-aml-breakdown-sanction';

/**
 * 
 * @export
 * @interface WatchlistStandardBreakdown
 */
export interface WatchlistStandardBreakdown {
    /**
     * 
     * @type {WatchlistAmlBreakdownSanction}
     * @memberof WatchlistStandardBreakdown
     */
    'sanction'?: WatchlistAmlBreakdownSanction;
    /**
     * 
     * @type {WatchlistAmlBreakdownPoliticallyExposedPerson}
     * @memberof WatchlistStandardBreakdown
     */
    'politically_exposed_person'?: WatchlistAmlBreakdownPoliticallyExposedPerson;
    /**
     * 
     * @type {WatchlistAmlBreakdownLegalAndRegulatoryWarnings}
     * @memberof WatchlistStandardBreakdown
     */
    'legal_and_regulatory_warnings'?: WatchlistAmlBreakdownLegalAndRegulatoryWarnings;
}
