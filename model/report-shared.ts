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
import { ReportDocument } from './report-document';

/**
 * 
 * @export
 * @interface ReportShared
 */
export interface ReportShared {
    /**
     * The unique identifier for the report. Read-only.
     * @type {string}
     * @memberof ReportShared
     */
    'id': string;
    /**
     * The date and time at which the report was first initiated. Read-only.
     * @type {string}
     * @memberof ReportShared
     */
    'created_at'?: string;
    /**
     * The API endpoint to retrieve the report. Read-only.
     * @type {string}
     * @memberof ReportShared
     */
    'href'?: string;
    /**
     * The current state of the report in the checking process. Read-only.
     * @type {string}
     * @memberof ReportShared
     */
    'status'?: ReportSharedStatusEnum;
    /**
     * The result of the report. Read-only.
     * @type {string}
     * @memberof ReportShared
     */
    'result'?: ReportSharedResultEnum;
    /**
     * The sub_result of the report. It gives a more detailed result for document reports only, and will be null otherwise. Read-only.
     * @type {string}
     * @memberof ReportShared
     */
    'sub_result'?: ReportSharedSubResultEnum;
    /**
     * The ID of the check to which the report belongs. Read-only.
     * @type {string}
     * @memberof ReportShared
     */
    'check_id'?: string;
    /**
     * Array of objects with document ids that were used in the Onfido engine. [ONLY POPULATED FOR DOCUMENT AND FACIAL SIMILARITY REPORTS]
     * @type {Array<ReportDocument>}
     * @memberof ReportShared
     */
    'documents'?: Array<ReportDocument>;
    /**
     * The name of the report type.
     * @type {string}
     * @memberof ReportShared
     */
    'name': ReportSharedNameEnum;
    /**
     * The details of the report. This is specific to each type of report.
     * @type {object}
     * @memberof ReportShared
     */
    'breakdown'?: object;
    /**
     * The properties associated with the report, if any. Read-only.
     * @type {{ [key: string]: any; }}
     * @memberof ReportShared
     */
    'properties'?: { [key: string]: any; };
}

export const ReportSharedStatusEnum = {
    AwaitingData: 'awaiting_data',
    AwaitingApproval: 'awaiting_approval',
    Cancelled: 'cancelled',
    Complete: 'complete',
    Withdrawn: 'withdrawn',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type ReportSharedStatusEnum = typeof ReportSharedStatusEnum[keyof typeof ReportSharedStatusEnum];
export const ReportSharedResultEnum = {
    Clear: 'clear',
    Consider: 'consider',
    Unidentified: 'unidentified',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type ReportSharedResultEnum = typeof ReportSharedResultEnum[keyof typeof ReportSharedResultEnum];
export const ReportSharedSubResultEnum = {
    Clear: 'clear',
    Rejected: 'rejected',
    Suspected: 'suspected',
    Caution: 'caution',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type ReportSharedSubResultEnum = typeof ReportSharedSubResultEnum[keyof typeof ReportSharedSubResultEnum];
export const ReportSharedNameEnum = {
    Document: 'document',
    DocumentVideo: 'document_video',
    DocumentVideoWithAddressInformation: 'document_video_with_address_information',
    DocumentWithAddressInformation: 'document_with_address_information',
    DocumentWithDrivingLicenceInformation: 'document_with_driving_licence_information',
    DocumentWithDriverVerification: 'document_with_driver_verification',
    FacialSimilarityPhoto: 'facial_similarity_photo',
    FacialSimilarityPhotoFullyAuto: 'facial_similarity_photo_fully_auto',
    FacialSimilarityVideo: 'facial_similarity_video',
    FacialSimilarityMotion: 'facial_similarity_motion',
    KnownFaces: 'known_faces',
    IdentityEnhanced: 'identity_enhanced',
    WatchlistAml: 'watchlist_aml',
    WatchlistEnhanced: 'watchlist_enhanced',
    WatchlistStandard: 'watchlist_standard',
    WatchlistPepsOnly: 'watchlist_peps_only',
    WatchlistSanctionsOnly: 'watchlist_sanctions_only',
    ProofOfAddress: 'proof_of_address',
    UsDrivingLicence: 'us_driving_licence',
    DeviceIntelligence: 'device_intelligence',
    IndiaPan: 'india_pan',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type ReportSharedNameEnum = typeof ReportSharedNameEnum[keyof typeof ReportSharedNameEnum];

