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
import { ScopeDtoApi } from './scopeDto';


export interface PatchResourceServerDtoApi { 
    name?: string;
    scopes?: Array<ScopeDtoApi>;
    signing_alg?: string;
    signing_secret?: string;
    skip_consent_for_verifiable_first_party_clients?: boolean;
    allow_offline_access?: boolean;
    token_lifetime?: number;
    token_dialect?: string;
    enforce_policies?: boolean;
    client?: object;
}
