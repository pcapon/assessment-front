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
import { StatsDtoApi } from './statsDto';
import { TagLightDtoApi } from './tagLightDto';


export interface QuestionStatsDtoApi { 
    id: string;
    label: string;
    totalGuessesCount: number;
    validGuessesCount: number;
    score?: number;
    usersCount: number;
    programs?: Array<StatsDtoApi>;
    tags?: Array<TagLightDtoApi>;
    teams?: Array<StatsDtoApi>;
}

