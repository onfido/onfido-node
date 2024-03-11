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
import { AddressBuilder } from './address-builder';
// May contain unused imports in some cases
// @ts-ignore
import { ApplicantConsent } from './applicant-consent';
// May contain unused imports in some cases
// @ts-ignore
import { LocationBuilder } from './location-builder';

/**
 * 
 * @export
 * @interface ApplicantRequest
 */
export interface ApplicantRequest {
    /**
     * 
     * @type {Array<ApplicantConsent>}
     * @memberof ApplicantRequest
     */
    'consents'?: Array<ApplicantConsent>;
    /**
     * 
     * @type {AddressBuilder}
     * @memberof ApplicantRequest
     */
    'address'?: AddressBuilder;
    /**
     * 
     * @type {LocationBuilder}
     * @memberof ApplicantRequest
     */
    'location'?: LocationBuilder;
}

