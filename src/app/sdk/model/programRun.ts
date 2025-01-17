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
import { ProgramApi } from './program';
import { ProgramRunQuestionApi } from './programRunQuestion';


export interface ProgramRunApi { 
    id: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    finishedAt: Date;
    program: ProgramApi;
    programId: string;
    programExpectation: number;
    questions: Array<ProgramRunQuestionApi>;
    questionsCount: number;
    goodGuessesCount: number;
    guessesCount: number;
    isValid?: boolean;
    /**
     * The bubble ID  ! This field is temporary and will be deleted once all the migration are finished
     */
    tempBubbleId?: string;
}

