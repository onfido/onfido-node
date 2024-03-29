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



/**
 * 
 * @export
 * @interface SdkTokenRequest
 */
export interface SdkTokenRequest {
    /**
     * The unique identifier of the applicant
     * @type {string}
     * @memberof SdkTokenRequest
     */
    'applicant_id': string;
    /**
     * The referrer URL pattern
     * @type {string}
     * @memberof SdkTokenRequest
     */
    'referrer'?: string;
    /**
     * The application ID (iOS or Android)
     * @type {string}
     * @memberof SdkTokenRequest
     */
    'application_id'?: string;
    /**
     * The URL to be used by the Web SDK for the cross device flow.
     * @type {string}
     * @memberof SdkTokenRequest
     */
    'cross_device_url'?: string;
}

