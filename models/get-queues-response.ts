/*
Cloud Functions

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

The version of the OpenAPI document: 2.87.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { QueueDto } from './queue-dto';

/**
 * Request queue details of all the functions with same id in an account
 * @export
 * @interface GetQueuesResponse
 */
export interface GetQueuesResponse {
    /**
     * Function id
     * @type {string}
     * @memberof GetQueuesResponse
     */
    'functionId': string;
    /**
     * Details of all the queues associated with same named functions
     * @type {Array<QueueDto>}
     * @memberof GetQueuesResponse
     */
    'queues': Array<QueueDto>;
}

