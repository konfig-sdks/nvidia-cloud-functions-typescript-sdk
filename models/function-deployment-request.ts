/*
Cloud Functions

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

The version of the OpenAPI document: 2.87.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GpuSpecificationDto } from './gpu-specification-dto';

/**
 * Request to deploy a function
 * @export
 * @interface FunctionDeploymentRequest
 */
export interface FunctionDeploymentRequest {
    /**
     * Deployment specs with Backend, GPU, instance-type, etc. details
     * @type {Array<GpuSpecificationDto>}
     * @memberof FunctionDeploymentRequest
     */
    'deploymentSpecifications': Array<GpuSpecificationDto>;
}
