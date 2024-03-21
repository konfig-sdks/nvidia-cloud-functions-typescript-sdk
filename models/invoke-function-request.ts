/*
Cloud Functions

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

The version of the OpenAPI document: 2.87.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RequestHeaderDto } from './request-header-dto';

/**
 * Request body for creating a job/task for inference/train using a GPU powered spot instance in cloud.
 * @export
 * @interface InvokeFunctionRequest
 */
export interface InvokeFunctionRequest {
    /**
     * 
     * @type {object}
     * @memberof InvokeFunctionRequest
     */
    'requestBody': object;
    /**
     * 
     * @type {RequestHeaderDto}
     * @memberof InvokeFunctionRequest
     */
    'requestHeader'?: RequestHeaderDto;
}
