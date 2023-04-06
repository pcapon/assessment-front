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
import { CommentQuestionApi } from './commentQuestion';


export interface CommentApi { 
    id: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    question: CommentQuestionApi;
    /**
     * The id of the question related to this comment.
     */
    questionId: string;
    /**
     * String that represents the text (the content) of the comment.
     */
    text: string;
    /**
     * Optional string that represents an image associated with the comment
     */
    image?: string;
    /**
     * Boolean that specify whether or not the comment has been read.
     */
    isRead: boolean;
}

