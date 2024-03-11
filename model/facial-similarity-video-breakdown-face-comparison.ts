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
import { FacialSimilarityPhotoBreakdownFaceComparisonBreakdown } from './facial-similarity-photo-breakdown-face-comparison-breakdown';

/**
 * Asserts whether the face in the document matches the face in the live video.
 * @export
 * @interface FacialSimilarityVideoBreakdownFaceComparison
 */
export interface FacialSimilarityVideoBreakdownFaceComparison {
    /**
     * 
     * @type {string}
     * @memberof FacialSimilarityVideoBreakdownFaceComparison
     */
    'result'?: string;
    /**
     * 
     * @type {FacialSimilarityPhotoBreakdownFaceComparisonBreakdown}
     * @memberof FacialSimilarityVideoBreakdownFaceComparison
     */
    'breakdown'?: FacialSimilarityPhotoBreakdownFaceComparisonBreakdown;
}

