/*
Cloud Functions

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

The version of the OpenAPI document: 2.87.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MeteringDataEntryDto } from './metering-data-entry-dto';

/**
 * Data Transfer Object(DTO) representing header/address for Cloud Functions processing. 
 * @export
 * @interface RequestHeaderDto
 */
export interface RequestHeaderDto {
    /**
     * List of UUIDs corresponding to the uploaded assets to be used as input for executing the task.
     * @type {Array<string>}
     * @memberof RequestHeaderDto
     */
    'inputAssetReferences'?: Array<string>;
    /**
     * Metadata used for billing/metering purposes.
     * @type {Array<MeteringDataEntryDto>}
     * @memberof RequestHeaderDto
     */
    'meteringData'?: Array<MeteringDataEntryDto>;
    /**
     * Polling timeout duration.
     * @type {number}
     * @memberof RequestHeaderDto
     */
    'pollDurationSeconds'?: number;
}

