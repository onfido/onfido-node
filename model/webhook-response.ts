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
 * @interface WebhookResponse
 */
export interface WebhookResponse {
    /**
     * The unique identifier of the webhook.
     * @type {string}
     * @memberof WebhookResponse
     */
    'id': string;
    /**
     * The url that will listen to notifications (must be https).
     * @type {string}
     * @memberof WebhookResponse
     */
    'url'?: string;
    /**
     * Webhook secret token used to sign the webhook\'s payload.
     * @type {string}
     * @memberof WebhookResponse
     */
    'token'?: string;
    /**
     * The API endpoint to retrieve the webhook.
     * @type {string}
     * @memberof WebhookResponse
     */
    'href'?: string;
}

