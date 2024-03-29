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
 * @interface MotionCapture
 */
export interface MotionCapture {
    /**
     * The unique identifier for the motion capture.
     * @type {string}
     * @memberof MotionCapture
     */
    'id'?: string;
    /**
     * The date and time at which the motion capture was uploaded.
     * @type {string}
     * @memberof MotionCapture
     */
    'created_at'?: string;
    /**
     * The uri of this resource.
     * @type {string}
     * @memberof MotionCapture
     */
    'href'?: string;
    /**
     * The uri that can be used to download the motion capture.
     * @type {string}
     * @memberof MotionCapture
     */
    'download_href'?: string;
    /**
     * The name of the uploaded file.
     * @type {string}
     * @memberof MotionCapture
     */
    'file_name'?: string;
    /**
     * The size of the file in bytes.
     * @type {number}
     * @memberof MotionCapture
     */
    'file_size'?: number;
    /**
     * The file type of the uploaded file.
     * @type {string}
     * @memberof MotionCapture
     */
    'file_type'?: string;
}

