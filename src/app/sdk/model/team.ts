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
import { ChallengeAssignmentApi } from './challengeAssignment';
import { ProgramApi } from './program';
import { ProgramAssignmentApi } from './programAssignment';
import { ChallengeApi } from './challenge';


export interface TeamApi { 
    id: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    /**
     * The long name of the team.
     */
    longName: string;
    /**
     * The short name of the team.
     */
    shortName: string;
    programAssignments: Array<ProgramAssignmentApi>;
    programs: Array<ProgramApi>;
    challengeAssignments: Array<ChallengeAssignmentApi>;
    challenges: Array<ChallengeApi>;
    /**
     * The bubble ID  ! This field is temporary and will be deleted once all the migration are finished
     */
    tempBubbleId?: string;
}

