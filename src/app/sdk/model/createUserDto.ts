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
import { RoleEnumApi } from './roleEnum';


export interface CreateUserDtoApi { 
    createdBy?: string;
    companyId?: string;
    roles?: Array<RoleEnumApi>;
    email: string;
    teamId?: string;
    pref?: object;
    bubbleId?: string;
    username?: string;
    firstname?: string;
    lastname?: string;
    timezone?: string;
    country?: string;
    pictureUrl?: string;
    slackId?: string;
    slackBotChannel?: string;
}
