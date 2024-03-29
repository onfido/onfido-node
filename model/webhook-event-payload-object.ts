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
 * The object affected by this event.
 * @export
 * @interface WebhookEventPayloadObject
 */
export interface WebhookEventPayloadObject {
    /**
     * The unique identifier of the resource.
     * @type {string}
     * @memberof WebhookEventPayloadObject
     */
    'id': string;
    /**
     * The current state of the object, if available.
     * @type {string}
     * @memberof WebhookEventPayloadObject
     */
    'status'?: string;
    /**
     * The date and time when the operation was completed, if available.
     * @type {string}
     * @memberof WebhookEventPayloadObject
     */
    'completed_at_iso8601'?: string;
    /**
     * The uri of the resource.
     * @type {string}
     * @memberof WebhookEventPayloadObject
     */
    'href': string;
}

