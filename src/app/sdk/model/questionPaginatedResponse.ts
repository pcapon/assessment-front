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
import { QuestionApi } from './question';
import { AltoBaseResponsePaginatedDtoMetaApi } from './altoBaseResponsePaginatedDtoMeta';


export interface QuestionPaginatedResponseApi { 
    statusCode: number;
    data?: Array<QuestionApi>;
    meta: AltoBaseResponsePaginatedDtoMetaApi;
}

