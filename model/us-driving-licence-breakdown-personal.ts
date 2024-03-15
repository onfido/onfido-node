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
import { UsDrivingLicenceBreakdownPersonalBreakdown } from './us-driving-licence-breakdown-personal-breakdown';

/**
 * Asserts whether the personal data provided matches a real driving license in the DMV driver\'s license database.
 * @export
 * @interface UsDrivingLicenceBreakdownPersonal
 */
export interface UsDrivingLicenceBreakdownPersonal {
    /**
     * 
     * @type {string}
     * @memberof UsDrivingLicenceBreakdownPersonal
     */
    'result'?: string;
    /**
     * 
     * @type {UsDrivingLicenceBreakdownPersonalBreakdown}
     * @memberof UsDrivingLicenceBreakdownPersonal
     */
    'breakdown'?: UsDrivingLicenceBreakdownPersonalBreakdown;
}
