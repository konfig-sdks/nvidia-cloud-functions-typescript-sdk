/*
Cloud Functions

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

The version of the OpenAPI document: 2.87.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance.
 * @export
 * @interface InvokeFunctionResponse
 */
export interface InvokeFunctionResponse {
    /**
     * Request id
     * @type {string}
     * @memberof InvokeFunctionResponse
     */
    'reqId'?: string;
    /**
     * Status of the task/job executing cloud function.
     * @type {string}
     * @memberof InvokeFunctionResponse
     */
    'status'?: InvokeFunctionResponseStatusEnum;
    /**
     * For large results, responseReference will be a pre-signeddownload URL.
     * @type {string}
     * @memberof InvokeFunctionResponse
     */
    'responseReference'?: string;
    /**
     * Progress indicator for the task/job executing cloud function.
     * @type {number}
     * @memberof InvokeFunctionResponse
     */
    'percentComplete'?: number;
    /**
     * Error code from the container while executing cloud function.
     * @type {number}
     * @memberof InvokeFunctionResponse
     */
    'errorCode'?: number;
    /**
     * Response/result of size < 5MB size for the task/job executing cloud function.
     * @type {string}
     * @memberof InvokeFunctionResponse
     */
    'response'?: string;
}

type InvokeFunctionResponseStatusEnum = 'errored' | 'in-progress' | 'fulfilled' | 'pending-evaluation' | 'rejected'


