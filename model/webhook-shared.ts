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
import { WebhookEventType } from './webhook-event-type';

/**
 * 
 * @export
 * @interface WebhookShared
 */
export interface WebhookShared {
    /**
     * Determine if the webhook is active.
     * @type {boolean}
     * @memberof WebhookShared
     */
    'enabled'?: boolean;
    /**
     * The events that will be published to the webhook. If the events parameter is omitted all the events will be subscribed. 
     * @type {Array<WebhookEventType>}
     * @memberof WebhookShared
     */
    'events'?: Array<WebhookEventType>;
    /**
     * The environments from which the webhook will receive events. Allowed values are “sandbox” and “live”. If the environments parameter is omitted the webhook will receive events from both environments. 
     * @type {Array<string>}
     * @memberof WebhookShared
     */
    'environments'?: Array<string>;
    /**
     * Webhook version used to control the payload object when sending webhooks.
     * @type {number}
     * @memberof WebhookShared
     */
    'payload_version'?: number;
}

