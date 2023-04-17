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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { ScoreByTypeEnumApi } from '../model/scoreByTypeEnum';
// @ts-ignore
import { ScoreFillValuesEnumApi } from '../model/scoreFillValuesEnum';
// @ts-ignore
import { ScoreTimeframeEnumApi } from '../model/scoreTimeframeEnum';
// @ts-ignore
import { ScoreTypeEnumApi } from '../model/scoreTypeEnum';
// @ts-ignore
import { ScoresResponseDtoResponseApi } from '../model/scoresResponseDtoResponse';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface GetScoresRequestParams {
    /** The type of score to filter on. */
    type: ScoreTypeEnumApi;
    /** The timeframe to group scores by. */
    timeframe: ScoreTimeframeEnumApi;
    /** The date to filter scores from guesses created after the date.  The format of the datetime should be ISO 8601 with timezone: YYYY-MM-DDTHH:mm:ss.sssZ.  Example: 2023-02-27T21:42:00.000Z. */
    dateAfter: Date;
    /** The date to filter scores from guesses created before the date.  The format of the datetime should be ISO 8601 with timezone: YYYY-MM-DDTHH:mm:ss.sssZ.  Example: 2023-02-27T21:42:00.000Z. */
    dateBefore: Date;
    /** An optional array of IDs to filter on. */
    ids?: string;
    /** The type of score to filter by. */
    scoredBy?: ScoreByTypeEnumApi;
    sortBy?: string;
    /** params to choose or not to fill the gaps in scores with a value. The value can be 0 or null or false. if not provided the dates with no scores will be filled with 0. if set to false the dates with no scores will not be included. */
    fillValues?: ScoreFillValuesEnumApi;
    /** Unique identifier of the company. */
    companyId?: string;
    /** The ID of the entity to filter by. */
    scoredById?: string;
    /** The minimum total count of scores to filter by.  Example 10 */
    countGreaterThan?: number;
}


@Injectable({
  providedIn: 'root'
})
export class ScoresApiService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Get scores by types
     * Gets the scores for the specified query and company ID.  For the scores on programs, all the program-run will be aggregated into one score. this means that if a program has 3 runs, the score will be the average of the 3 runs. the totalcount will be the sum of the 3 runs and the validcount will be the number of valid guesses within the 3 runs.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getScores(requestParameters: GetScoresRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<ScoresResponseDtoResponseApi>;
    public getScores(requestParameters: GetScoresRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<ScoresResponseDtoResponseApi>>;
    public getScores(requestParameters: GetScoresRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<ScoresResponseDtoResponseApi>>;
    public getScores(requestParameters: GetScoresRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        const type = requestParameters.type;
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling getScores.');
        }
        const timeframe = requestParameters.timeframe;
        if (timeframe === null || timeframe === undefined) {
            throw new Error('Required parameter timeframe was null or undefined when calling getScores.');
        }
        const dateAfter = requestParameters.dateAfter;
        if (dateAfter === null || dateAfter === undefined) {
            throw new Error('Required parameter dateAfter was null or undefined when calling getScores.');
        }
        const dateBefore = requestParameters.dateBefore;
        if (dateBefore === null || dateBefore === undefined) {
            throw new Error('Required parameter dateBefore was null or undefined when calling getScores.');
        }
        const ids = requestParameters.ids;
        const scoredBy = requestParameters.scoredBy;
        const sortBy = requestParameters.sortBy;
        const fillValues = requestParameters.fillValues;
        const companyId = requestParameters.companyId;
        const scoredById = requestParameters.scoredById;
        const countGreaterThan = requestParameters.countGreaterThan;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (type !== undefined && type !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>type, 'type');
        }
        if (ids !== undefined && ids !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ids, 'ids');
        }
        if (scoredBy !== undefined && scoredBy !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>scoredBy, 'scoredBy');
        }
        if (timeframe !== undefined && timeframe !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>timeframe, 'timeframe');
        }
        if (sortBy !== undefined && sortBy !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>sortBy, 'sortBy');
        }
        if (fillValues !== undefined && fillValues !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>fillValues, 'fillValues');
        }
        if (companyId !== undefined && companyId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>companyId, 'companyId');
        }
        if (scoredById !== undefined && scoredById !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>scoredById, 'scoredById');
        }
        if (dateAfter !== undefined && dateAfter !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>dateAfter, 'dateAfter');
        }
        if (dateBefore !== undefined && dateBefore !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>dateBefore, 'dateBefore');
        }
        if (countGreaterThan !== undefined && countGreaterThan !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>countGreaterThan, 'countGreaterThan');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (x-api-key) required
        localVarCredential = this.configuration.lookupCredential('x-api-key');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('x-api-key', localVarCredential);
        }

        // authentication (bearer) required
        localVarCredential = this.configuration.lookupCredential('bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/v1/scores`;
        return this.httpClient.request<ScoresResponseDtoResponseApi>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
