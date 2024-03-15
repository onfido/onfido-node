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
 * Object for the configuration of the Workflow Run link.
 * @export
 * @interface WorkflowRunSharedLink
 */
export interface WorkflowRunSharedLink {
    /**
     * Link to access the Workflow Run without the need to integrate with Onfido\'s SDKs.
     * @type {string}
     * @memberof WorkflowRunSharedLink
     */
    'url'?: string;
    /**
     * When the interactive section of the Workflow Run has completed successfully, the user will be redirected to this URL instead of seeing the default Onfido \'thank you\' page.
     * @type {string}
     * @memberof WorkflowRunSharedLink
     */
    'completed_redirect_url'?: string;
    /**
     * When the link has expired, the user will be immediately redirected to this URL instead of seeing the default Onfido error message.
     * @type {string}
     * @memberof WorkflowRunSharedLink
     */
    'expired_redirect_url'?: string;
    /**
     * Date and time when the link will expire.
     * @type {string}
     * @memberof WorkflowRunSharedLink
     */
    'expires_at'?: string;
    /**
     * The code for the language when the workflow run is acessed using the link.
     * @type {string}
     * @memberof WorkflowRunSharedLink
     */
    'language'?: WorkflowRunSharedLinkLanguageEnum;
}

export const WorkflowRunSharedLinkLanguageEnum = {
    EnUs: 'en_US',
    DeDe: 'de_DE',
    EsEs: 'es_ES',
    FrFr: 'fr_FR',
    ItIt: 'it_IT',
    PtPt: 'pt_PT',
    NlNl: 'nl_NL',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type WorkflowRunSharedLinkLanguageEnum = typeof WorkflowRunSharedLinkLanguageEnum[keyof typeof WorkflowRunSharedLinkLanguageEnum];

