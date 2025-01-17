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
import { ChallengeStateEnumApi } from './challengeStateEnum';
import { TeamApi } from './team';
import { ChallengeTypeEnumApi } from './challengeTypeEnum';


export interface CreateChallengeDtoApi { 
    createdBy?: string;
    companyId?: string;
    type: ChallengeTypeEnumApi;
    status?: ChallengeStateEnumApi;
    /**
     * Specifies the teams associated with the challenge. Optional.
     */
    teams?: Array<TeamApi>;
    name: string;
    guessesPerDay: number;
    scoreMinPercent: number;
    startDate: Date;
    endDate: Date;
    reward?: string;
}



