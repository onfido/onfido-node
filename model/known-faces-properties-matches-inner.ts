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
 * @interface KnownFacesPropertiesMatchesInner
 */
export interface KnownFacesPropertiesMatchesInner {
    /**
     * The applicant ID of the matched applicant.
     * @type {string}
     * @memberof KnownFacesPropertiesMatchesInner
     */
    'applicant_id'?: string;
    /**
     * A floating point number between 0 and 1 that expresses how similar the two faces are, where 1 is a perfect match.
     * @type {number}
     * @memberof KnownFacesPropertiesMatchesInner
     */
    'score'?: number;
    /**
     * The corresponding UUID for the media type.
     * @type {string}
     * @memberof KnownFacesPropertiesMatchesInner
     */
    'media_id'?: string;
    /**
     * The media type (for example live_photos or live_videos).
     * @type {string}
     * @memberof KnownFacesPropertiesMatchesInner
     */
    'media_type'?: string;
    /**
     * Indicates if match is suspected based on fuzzy name matching feature. Dependent on feature being active for account, otherwise defaults to true.
     * @type {boolean}
     * @memberof KnownFacesPropertiesMatchesInner
     */
    'suspected'?: boolean;
}

