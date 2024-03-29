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
 * @interface DocumentIQReasons
 */
export interface DocumentIQReasons {
    /**
     * When an image of the document is too dark to be able to see data points.
     * @type {string}
     * @memberof DocumentIQReasons
     */
    'dark_photo'?: string;
    /**
     * When there is light reflecting on the document causing glare to obstruct data points.
     * @type {string}
     * @memberof DocumentIQReasons
     */
    'glare_on_photo'?: string;
    /**
     * When data points are blurred and no reference can be made elsewhere in the document or if the data points are too blurry and \'they could be something else\'.
     * @type {string}
     * @memberof DocumentIQReasons
     */
    'blurred_photo'?: string;
    /**
     * When data points have been covered either by the applicant or by another object such as a sticker.
     * @type {string}
     * @memberof DocumentIQReasons
     */
    'covered_photo'?: string;
    /**
     * Any other reason not listed, such as when holograms are obscuring data points.
     * @type {string}
     * @memberof DocumentIQReasons
     */
    'other_photo_issue'?: string;
    /**
     * When a document is damaged and we are unable to make out data points.
     * @type {string}
     * @memberof DocumentIQReasons
     */
    'damaged_document'?: string;
    /**
     * When the incorrect side of a document has been uploaded, and we have not received the front.
     * @type {string}
     * @memberof DocumentIQReasons
     */
    'incorrect_side'?: string;
    /**
     * When data points are not included in the image due to the document being cut off.
     * @type {string}
     * @memberof DocumentIQReasons
     */
    'cut_off_document'?: string;
    /**
     * If no document has been uploaded or there is a blank image.
     * @type {string}
     * @memberof DocumentIQReasons
     */
    'no_document_in_image'?: string;
    /**
     * When 2 different documents are submitted in the same check.
     * @type {string}
     * @memberof DocumentIQReasons
     */
    'two_documents_uploaded'?: string;
}

