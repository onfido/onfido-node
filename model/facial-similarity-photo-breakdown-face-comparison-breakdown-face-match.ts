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
import { FacialSimilarityPhotoBreakdownFaceComparisonBreakdownFaceMatchProperties } from './facial-similarity-photo-breakdown-face-comparison-breakdown-face-match-properties';

/**
 * Contains a score value under the properties bag.
 * @export
 * @interface FacialSimilarityPhotoBreakdownFaceComparisonBreakdownFaceMatch
 */
export interface FacialSimilarityPhotoBreakdownFaceComparisonBreakdownFaceMatch {
    /**
     * 
     * @type {string}
     * @memberof FacialSimilarityPhotoBreakdownFaceComparisonBreakdownFaceMatch
     */
    'result'?: string;
    /**
     * 
     * @type {FacialSimilarityPhotoBreakdownFaceComparisonBreakdownFaceMatchProperties}
     * @memberof FacialSimilarityPhotoBreakdownFaceComparisonBreakdownFaceMatch
     */
    'properties'?: FacialSimilarityPhotoBreakdownFaceComparisonBreakdownFaceMatchProperties;
}

