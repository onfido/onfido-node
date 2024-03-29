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
 * The current state of the report in the checking process. Read-only.
 * @export
 * @enum {string}
 */

export const ReportStatus = {
    AwaitingData: 'awaiting_data',
    AwaitingApproval: 'awaiting_approval',
    Cancelled: 'cancelled',
    Complete: 'complete',
    Withdrawn: 'withdrawn',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type ReportStatus = typeof ReportStatus[keyof typeof ReportStatus];



