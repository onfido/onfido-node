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
 * @interface IdNumber
 */
export interface IdNumber {
    /**
     * Type of ID number.
     * @type {string}
     * @memberof IdNumber
     */
    'type'?: IdNumberTypeEnum;
    /**
     * Value of ID number
     * @type {string}
     * @memberof IdNumber
     */
    'value'?: string;
    /**
     * Two letter code of issuing state (state-issued driving licenses only)
     * @type {string}
     * @memberof IdNumber
     */
    'state_code'?: string;
}

export const IdNumberTypeEnum = {
    Ssn: 'ssn',
    SocialInsurance: 'social_insurance',
    TaxId: 'tax_id',
    IdentityCard: 'identity_card',
    DrivingLicence: 'driving_licence',
    ShareCode: 'share_code',
    VoterId: 'voter_id',
    Passport: 'passport',
    Other: 'other',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type IdNumberTypeEnum = typeof IdNumberTypeEnum[keyof typeof IdNumberTypeEnum];

