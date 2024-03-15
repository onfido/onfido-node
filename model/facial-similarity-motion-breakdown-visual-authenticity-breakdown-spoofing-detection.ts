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
import { FacialSimilarityPhotoBreakdownVisualAuthenticityBreakdownSpoofingDetectionProperties } from './facial-similarity-photo-breakdown-visual-authenticity-breakdown-spoofing-detection-properties';

/**
 * Asserts whether the motion capture is not a spoof (such as videos of digital screens).
 * @export
 * @interface FacialSimilarityMotionBreakdownVisualAuthenticityBreakdownSpoofingDetection
 */
export interface FacialSimilarityMotionBreakdownVisualAuthenticityBreakdownSpoofingDetection {
    /**
     * 
     * @type {string}
     * @memberof FacialSimilarityMotionBreakdownVisualAuthenticityBreakdownSpoofingDetection
     */
    'result'?: string;
    /**
     * 
     * @type {FacialSimilarityPhotoBreakdownVisualAuthenticityBreakdownSpoofingDetectionProperties}
     * @memberof FacialSimilarityMotionBreakdownVisualAuthenticityBreakdownSpoofingDetection
     */
    'properties'?: FacialSimilarityPhotoBreakdownVisualAuthenticityBreakdownSpoofingDetectionProperties;
}
