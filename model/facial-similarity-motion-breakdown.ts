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
import { FacialSimilarityMotionBreakdownFaceComparison } from './facial-similarity-motion-breakdown-face-comparison';
// May contain unused imports in some cases
// @ts-ignore
import { FacialSimilarityMotionBreakdownImageIntegrity } from './facial-similarity-motion-breakdown-image-integrity';
// May contain unused imports in some cases
// @ts-ignore
import { FacialSimilarityMotionBreakdownVisualAuthenticity } from './facial-similarity-motion-breakdown-visual-authenticity';

/**
 * 
 * @export
 * @interface FacialSimilarityMotionBreakdown
 */
export interface FacialSimilarityMotionBreakdown {
    /**
     * 
     * @type {FacialSimilarityMotionBreakdownFaceComparison}
     * @memberof FacialSimilarityMotionBreakdown
     */
    'face_comparison'?: FacialSimilarityMotionBreakdownFaceComparison;
    /**
     * 
     * @type {FacialSimilarityMotionBreakdownImageIntegrity}
     * @memberof FacialSimilarityMotionBreakdown
     */
    'image_integrity'?: FacialSimilarityMotionBreakdownImageIntegrity;
    /**
     * 
     * @type {FacialSimilarityMotionBreakdownVisualAuthenticity}
     * @memberof FacialSimilarityMotionBreakdown
     */
    'visual_authenticity'?: FacialSimilarityMotionBreakdownVisualAuthenticity;
}
