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
import { GetPositionInQueueResponse } from '../models';
// @ts-ignore
import { GetQueuesResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * QueueDetailsApi - axios parameter creator
 * @export
 */
export const QueueDetailsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
         * @summary Queue Details
         * @param {string} functionId Function id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        functionQueuesDetails: async (functionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'functionId' is not null or undefined
            assertParamExists('functionQueuesDetails', 'functionId', functionId)
            const localVarPath = `/v2/nvcf/queues/functions/{functionId}`
                .replace(`{${"functionId"}}`, encodeURIComponent(String(functionId !== undefined ? functionId : `-functionId-`)));
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
                pathTemplate: '/v2/nvcf/queues/functions/{functionId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
         * @summary Queue Details
         * @param {string} functionId Function id
         * @param {string} versionId Function version id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllQueuesDetails: async (functionId: string, versionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'functionId' is not null or undefined
            assertParamExists('getAllQueuesDetails', 'functionId', functionId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('getAllQueuesDetails', 'versionId', versionId)
            const localVarPath = `/v2/nvcf/queues/functions/{functionId}/versions/{versionId}`
                .replace(`{${"functionId"}}`, encodeURIComponent(String(functionId !== undefined ? functionId : `-functionId-`)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId !== undefined ? versionId : `-versionId-`)));
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
                pathTemplate: '/v2/nvcf/queues/functions/{functionId}/versions/{versionId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Using the specified function invocation request id, returns the estimated  position of the corresponding message up to 1000 in the queue. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
         * @summary Queue Position
         * @param {string} requestId Function invocation request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQueuePositionByRequestId: async (requestId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestId' is not null or undefined
            assertParamExists('getQueuePositionByRequestId', 'requestId', requestId)
            const localVarPath = `/v2/nvcf/queues/{requestId}/position`
                .replace(`{${"requestId"}}`, encodeURIComponent(String(requestId !== undefined ? requestId : `-requestId-`)));
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
                pathTemplate: '/v2/nvcf/queues/{requestId}/position',
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
 * QueueDetailsApi - functional programming interface
 * @export
 */
export const QueueDetailsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QueueDetailsApiAxiosParamCreator(configuration)
    return {
        /**
         * Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
         * @summary Queue Details
         * @param {QueueDetailsApiFunctionQueuesDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async functionQueuesDetails(requestParameters: QueueDetailsApiFunctionQueuesDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetQueuesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.functionQueuesDetails(requestParameters.functionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
         * @summary Queue Details
         * @param {QueueDetailsApiGetAllQueuesDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllQueuesDetails(requestParameters: QueueDetailsApiGetAllQueuesDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetQueuesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllQueuesDetails(requestParameters.functionId, requestParameters.versionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Using the specified function invocation request id, returns the estimated  position of the corresponding message up to 1000 in the queue. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
         * @summary Queue Position
         * @param {QueueDetailsApiGetQueuePositionByRequestIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getQueuePositionByRequestId(requestParameters: QueueDetailsApiGetQueuePositionByRequestIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPositionInQueueResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getQueuePositionByRequestId(requestParameters.requestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * QueueDetailsApi - factory interface
 * @export
 */
export const QueueDetailsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QueueDetailsApiFp(configuration)
    return {
        /**
         * Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
         * @summary Queue Details
         * @param {QueueDetailsApiFunctionQueuesDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        functionQueuesDetails(requestParameters: QueueDetailsApiFunctionQueuesDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<GetQueuesResponse> {
            return localVarFp.functionQueuesDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
         * @summary Queue Details
         * @param {QueueDetailsApiGetAllQueuesDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllQueuesDetails(requestParameters: QueueDetailsApiGetAllQueuesDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<GetQueuesResponse> {
            return localVarFp.getAllQueuesDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Using the specified function invocation request id, returns the estimated  position of the corresponding message up to 1000 in the queue. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
         * @summary Queue Position
         * @param {QueueDetailsApiGetQueuePositionByRequestIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQueuePositionByRequestId(requestParameters: QueueDetailsApiGetQueuePositionByRequestIdRequest, options?: AxiosRequestConfig): AxiosPromise<GetPositionInQueueResponse> {
            return localVarFp.getQueuePositionByRequestId(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for functionQueuesDetails operation in QueueDetailsApi.
 * @export
 * @interface QueueDetailsApiFunctionQueuesDetailsRequest
 */
export type QueueDetailsApiFunctionQueuesDetailsRequest = {
    
    /**
    * Function id
    * @type {string}
    * @memberof QueueDetailsApiFunctionQueuesDetails
    */
    readonly functionId: string
    
}

/**
 * Request parameters for getAllQueuesDetails operation in QueueDetailsApi.
 * @export
 * @interface QueueDetailsApiGetAllQueuesDetailsRequest
 */
export type QueueDetailsApiGetAllQueuesDetailsRequest = {
    
    /**
    * Function id
    * @type {string}
    * @memberof QueueDetailsApiGetAllQueuesDetails
    */
    readonly functionId: string
    
    /**
    * Function version id
    * @type {string}
    * @memberof QueueDetailsApiGetAllQueuesDetails
    */
    readonly versionId: string
    
}

/**
 * Request parameters for getQueuePositionByRequestId operation in QueueDetailsApi.
 * @export
 * @interface QueueDetailsApiGetQueuePositionByRequestIdRequest
 */
export type QueueDetailsApiGetQueuePositionByRequestIdRequest = {
    
    /**
    * Function invocation request id
    * @type {string}
    * @memberof QueueDetailsApiGetQueuePositionByRequestId
    */
    readonly requestId: string
    
}

/**
 * QueueDetailsApiGenerated - object-oriented interface
 * @export
 * @class QueueDetailsApiGenerated
 * @extends {BaseAPI}
 */
export class QueueDetailsApiGenerated extends BaseAPI {
    /**
     * Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
     * @summary Queue Details
     * @param {QueueDetailsApiFunctionQueuesDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueueDetailsApiGenerated
     */
    public functionQueuesDetails(requestParameters: QueueDetailsApiFunctionQueuesDetailsRequest, options?: AxiosRequestConfig) {
        return QueueDetailsApiFp(this.configuration).functionQueuesDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
     * @summary Queue Details
     * @param {QueueDetailsApiGetAllQueuesDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueueDetailsApiGenerated
     */
    public getAllQueuesDetails(requestParameters: QueueDetailsApiGetAllQueuesDetailsRequest, options?: AxiosRequestConfig) {
        return QueueDetailsApiFp(this.configuration).getAllQueuesDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Using the specified function invocation request id, returns the estimated  position of the corresponding message up to 1000 in the queue. Requires a bearer token or an api-key with \'queue_details\' scope in the HTTP  Authorization header. 
     * @summary Queue Position
     * @param {QueueDetailsApiGetQueuePositionByRequestIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueueDetailsApiGenerated
     */
    public getQueuePositionByRequestId(requestParameters: QueueDetailsApiGetQueuePositionByRequestIdRequest, options?: AxiosRequestConfig) {
        return QueueDetailsApiFp(this.configuration).getQueuePositionByRequestId(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
