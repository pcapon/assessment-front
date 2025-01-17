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
import { CompanyLightDtoApi } from './companyLightDto';
import { UserLightDtoApi } from './userLightDto';


export interface QuestionSubmittedDtoApi { 
    title: string;
    status: QuestionSubmittedDtoApiStatusEnumApi;
    company: CompanyLightDtoApi;
    companyId: string;
    id: string;
    createdAt: Date;
    createdBy: string;
    createdByUser: UserLightDtoApi;
    updatedAt: Date;
    deletedAt?: Date;
}
export enum QuestionSubmittedDtoApiStatusEnumApi {
    Submitted = 'submitted',
    Accepted = 'accepted',
    Declined = 'declined'
};



