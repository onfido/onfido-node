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
import { IdentityEnhancedBreakdownSourcesBreakdown } from './identity-enhanced-breakdown-sources-breakdown';

/**
 * Asserts if any sources that an applicant\'s details have been verified against have produced a match.
 * @export
 * @interface IdentityEnhancedBreakdownSources
 */
export interface IdentityEnhancedBreakdownSources {
    /**
     * 
     * @type {string}
     * @memberof IdentityEnhancedBreakdownSources
     */
    'result'?: string;
    /**
     * 
     * @type {IdentityEnhancedBreakdownSourcesBreakdown}
     * @memberof IdentityEnhancedBreakdownSources
     */
    'breakdown'?: IdentityEnhancedBreakdownSourcesBreakdown;
}

