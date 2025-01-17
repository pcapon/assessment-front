/**
 * Usealto API [DEV]
 * The usealto (also called alto) API swagger documentation
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface PutQuestionSubmittedDtoApi { 
    createdBy?: string;
    companyId?: string;
    /**
     * The title of the question-submitted. It\'s the actual question written by the user.
     */
    title: string;
    /**
     * The status of the question-submitted.
     */
    status: PutQuestionSubmittedDtoApiStatusEnumApi;
}
export enum PutQuestionSubmittedDtoApiStatusEnumApi {
    Submitted = 'submitted',
    Accepted = 'accepted',
    Declined = 'declined'
};



