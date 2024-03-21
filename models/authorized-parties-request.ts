/*
Cloud Functions

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

The version of the OpenAPI document: 2.87.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AuthorizedPartyDto } from './authorized-party-dto';

/**
 * Request to associated authorized parties for a specific version or allversions of a function
 * @export
 * @interface AuthorizedPartiesRequest
 */
export interface AuthorizedPartiesRequest {
    /**
     * Parties authorized to invoke function
     * @type {Array<AuthorizedPartyDto>}
     * @memberof AuthorizedPartiesRequest
     */
    'authorizedParties': Array<AuthorizedPartyDto>;
}
