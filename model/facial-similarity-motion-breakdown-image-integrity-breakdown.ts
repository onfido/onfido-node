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
import { FacialSimilarityMotionBreakdownImageIntegrityBreakdownFaceDetected } from './facial-similarity-motion-breakdown-image-integrity-breakdown-face-detected';
// May contain unused imports in some cases
// @ts-ignore
import { FacialSimilarityMotionBreakdownImageIntegrityBreakdownSourceIntegrity } from './facial-similarity-motion-breakdown-image-integrity-breakdown-source-integrity';

/**
 * 
 * @export
 * @interface FacialSimilarityMotionBreakdownImageIntegrityBreakdown
 */
export interface FacialSimilarityMotionBreakdownImageIntegrityBreakdown {
    /**
     * 
     * @type {FacialSimilarityMotionBreakdownImageIntegrityBreakdownFaceDetected}
     * @memberof FacialSimilarityMotionBreakdownImageIntegrityBreakdown
     */
    'face_detected'?: FacialSimilarityMotionBreakdownImageIntegrityBreakdownFaceDetected;
    /**
     * 
     * @type {FacialSimilarityMotionBreakdownImageIntegrityBreakdownSourceIntegrity}
     * @memberof FacialSimilarityMotionBreakdownImageIntegrityBreakdown
     */
    'source_integrity'?: FacialSimilarityMotionBreakdownImageIntegrityBreakdownSourceIntegrity;
}
