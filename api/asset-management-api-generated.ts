/* tslint:disable */
/* eslint-disable */
/*
Cloud Functions

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

The version of the OpenAPI document: 2.87.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AssetResponse } from '../models';
// @ts-ignore
import { CreateAssetRequest } from '../models';
// @ts-ignore
import { CreateAssetResponse } from '../models';
// @ts-ignore
import { ListAssetsResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AssetManagementApi - axios parameter creator
 * @export
 */
export const AssetManagementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a unique id representing an asset and a pre-signed URL to upload the  asset artifact to AWS S3 bucket for the NVIDIA Cloud Account. Requires either  a bearer token or an api-key with \'invoke_function\' scope in the HTTP  Authorization header.
         * @summary Create Asset
         * @param {CreateAssetRequest} createAssetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAssetAndUrl: async (createAssetRequest: CreateAssetRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createAssetRequest' is not null or undefined
            assertParamExists('createAssetAndUrl', 'createAssetRequest', createAssetRequest)
            const localVarPath = `/v2/nvcf/assets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createAssetRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/nvcf/assets',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createAssetRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes asset belonging to the current NVIDIA Cloud Account. Requires either  a bearer token or an api-key with \'invoke_function\' scope in the HTTP  Authorization header.
         * @summary Delete Asset
         * @param {string} assetId Id of the asset to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAssetById: async (assetId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('deleteAssetById', 'assetId', assetId)
            const localVarPath = `/v2/nvcf/assets/{assetId}`
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId !== undefined ? assetId : `-assetId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/nvcf/assets/{assetId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List assets owned by the current NVIDIA Cloud Account. Requires either a  bearer token or an api-key with invoke_function scope in the HTTP Authorization  header. 
         * @summary List Assets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAssets: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/nvcf/assets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/nvcf/assets',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns details for the specified asset-id belonging to the current NVIDIA  Cloud Account. Requires either a bearer token or an api-key with  \'invoke_function\' scope in the HTTP Authorization header. 
         * @summary Show Asset Details
         * @param {string} assetId Asset id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDetails: async (assetId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('showDetails', 'assetId', assetId)
            const localVarPath = `/v2/nvcf/assets/{assetId}`
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId !== undefined ? assetId : `-assetId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/nvcf/assets/{assetId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AssetManagementApi - functional programming interface
 * @export
 */
export const AssetManagementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AssetManagementApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a unique id representing an asset and a pre-signed URL to upload the  asset artifact to AWS S3 bucket for the NVIDIA Cloud Account. Requires either  a bearer token or an api-key with \'invoke_function\' scope in the HTTP  Authorization header.
         * @summary Create Asset
         * @param {AssetManagementApiCreateAssetAndUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAssetAndUrl(requestParameters: AssetManagementApiCreateAssetAndUrlRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateAssetResponse>> {
            const createAssetRequest: CreateAssetRequest = {
                description: requestParameters.description,
                contentType: requestParameters.contentType
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAssetAndUrl(createAssetRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes asset belonging to the current NVIDIA Cloud Account. Requires either  a bearer token or an api-key with \'invoke_function\' scope in the HTTP  Authorization header.
         * @summary Delete Asset
         * @param {AssetManagementApiDeleteAssetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAssetById(requestParameters: AssetManagementApiDeleteAssetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAssetById(requestParameters.assetId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List assets owned by the current NVIDIA Cloud Account. Requires either a  bearer token or an api-key with invoke_function scope in the HTTP Authorization  header. 
         * @summary List Assets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAssets(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListAssetsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAssets(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns details for the specified asset-id belonging to the current NVIDIA  Cloud Account. Requires either a bearer token or an api-key with  \'invoke_function\' scope in the HTTP Authorization header. 
         * @summary Show Asset Details
         * @param {AssetManagementApiShowDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showDetails(requestParameters: AssetManagementApiShowDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AssetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showDetails(requestParameters.assetId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AssetManagementApi - factory interface
 * @export
 */
export const AssetManagementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AssetManagementApiFp(configuration)
    return {
        /**
         * Creates a unique id representing an asset and a pre-signed URL to upload the  asset artifact to AWS S3 bucket for the NVIDIA Cloud Account. Requires either  a bearer token or an api-key with \'invoke_function\' scope in the HTTP  Authorization header.
         * @summary Create Asset
         * @param {AssetManagementApiCreateAssetAndUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAssetAndUrl(requestParameters: AssetManagementApiCreateAssetAndUrlRequest, options?: AxiosRequestConfig): AxiosPromise<CreateAssetResponse> {
            return localVarFp.createAssetAndUrl(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes asset belonging to the current NVIDIA Cloud Account. Requires either  a bearer token or an api-key with \'invoke_function\' scope in the HTTP  Authorization header.
         * @summary Delete Asset
         * @param {AssetManagementApiDeleteAssetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAssetById(requestParameters: AssetManagementApiDeleteAssetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteAssetById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List assets owned by the current NVIDIA Cloud Account. Requires either a  bearer token or an api-key with invoke_function scope in the HTTP Authorization  header. 
         * @summary List Assets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAssets(options?: AxiosRequestConfig): AxiosPromise<ListAssetsResponse> {
            return localVarFp.listAssets(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns details for the specified asset-id belonging to the current NVIDIA  Cloud Account. Requires either a bearer token or an api-key with  \'invoke_function\' scope in the HTTP Authorization header. 
         * @summary Show Asset Details
         * @param {AssetManagementApiShowDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDetails(requestParameters: AssetManagementApiShowDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<AssetResponse> {
            return localVarFp.showDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAssetAndUrl operation in AssetManagementApi.
 * @export
 * @interface AssetManagementApiCreateAssetAndUrlRequest
 */
export type AssetManagementApiCreateAssetAndUrlRequest = {
    
} & CreateAssetRequest

/**
 * Request parameters for deleteAssetById operation in AssetManagementApi.
 * @export
 * @interface AssetManagementApiDeleteAssetByIdRequest
 */
export type AssetManagementApiDeleteAssetByIdRequest = {
    
    /**
    * Id of the asset to be deleted
    * @type {string}
    * @memberof AssetManagementApiDeleteAssetById
    */
    readonly assetId: string
    
}

/**
 * Request parameters for showDetails operation in AssetManagementApi.
 * @export
 * @interface AssetManagementApiShowDetailsRequest
 */
export type AssetManagementApiShowDetailsRequest = {
    
    /**
    * Asset id
    * @type {string}
    * @memberof AssetManagementApiShowDetails
    */
    readonly assetId: string
    
}

/**
 * AssetManagementApiGenerated - object-oriented interface
 * @export
 * @class AssetManagementApiGenerated
 * @extends {BaseAPI}
 */
export class AssetManagementApiGenerated extends BaseAPI {
    /**
     * Creates a unique id representing an asset and a pre-signed URL to upload the  asset artifact to AWS S3 bucket for the NVIDIA Cloud Account. Requires either  a bearer token or an api-key with \'invoke_function\' scope in the HTTP  Authorization header.
     * @summary Create Asset
     * @param {AssetManagementApiCreateAssetAndUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetManagementApiGenerated
     */
    public createAssetAndUrl(requestParameters: AssetManagementApiCreateAssetAndUrlRequest, options?: AxiosRequestConfig) {
        return AssetManagementApiFp(this.configuration).createAssetAndUrl(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes asset belonging to the current NVIDIA Cloud Account. Requires either  a bearer token or an api-key with \'invoke_function\' scope in the HTTP  Authorization header.
     * @summary Delete Asset
     * @param {AssetManagementApiDeleteAssetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetManagementApiGenerated
     */
    public deleteAssetById(requestParameters: AssetManagementApiDeleteAssetByIdRequest, options?: AxiosRequestConfig) {
        return AssetManagementApiFp(this.configuration).deleteAssetById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List assets owned by the current NVIDIA Cloud Account. Requires either a  bearer token or an api-key with invoke_function scope in the HTTP Authorization  header. 
     * @summary List Assets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetManagementApiGenerated
     */
    public listAssets(options?: AxiosRequestConfig) {
        return AssetManagementApiFp(this.configuration).listAssets(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns details for the specified asset-id belonging to the current NVIDIA  Cloud Account. Requires either a bearer token or an api-key with  \'invoke_function\' scope in the HTTP Authorization header. 
     * @summary Show Asset Details
     * @param {AssetManagementApiShowDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetManagementApiGenerated
     */
    public showDetails(requestParameters: AssetManagementApiShowDetailsRequest, options?: AxiosRequestConfig) {
        return AssetManagementApiFp(this.configuration).showDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}