/*
Cloud Functions

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

The version of the OpenAPI document: 2.87.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ArtifactDto } from './artifact-dto';
import { ContainerEnvironmentEntryDto } from './container-environment-entry-dto';

/**
 * Request payload to create function.
 * @export
 * @interface CreateFunctionRequest
 */
export interface CreateFunctionRequest {
    /**
     * Function name must start with lowercase/uppercase/digit and can only contain lowercase, uppercase, digit, hyphen, and underscore characters
     * @type {string}
     * @memberof CreateFunctionRequest
     */
    'name': string;
    /**
     * Entrypoint for invoking the container to process a request
     * @type {string}
     * @memberof CreateFunctionRequest
     */
    'inferenceUrl': string;
    /**
     * Health endpoint for the container or the helmChart
     * @type {string}
     * @memberof CreateFunctionRequest
     */
    'healthUri'?: string;
    /**
     * Optional port number where the inference listener is running. Defaults to 8000  for Triton. 
     * @type {number}
     * @memberof CreateFunctionRequest
     */
    'inferencePort'?: number;
    /**
     * Args to be passed when launching the container
     * @type {string}
     * @memberof CreateFunctionRequest
     */
    'containerArgs'?: string;
    /**
     * Environment settings for launching the container
     * @type {Array<ContainerEnvironmentEntryDto>}
     * @memberof CreateFunctionRequest
     */
    'containerEnvironment'?: Array<ContainerEnvironmentEntryDto>;
    /**
     * Optional set of models
     * @type {Set<ArtifactDto>}
     * @memberof CreateFunctionRequest
     */
    'models'?: Set<ArtifactDto>;
    /**
     * Optional custom container image
     * @type {string}
     * @memberof CreateFunctionRequest
     */
    'containerImage'?: string;
    /**
     * Optional Helm Chart
     * @type {string}
     * @memberof CreateFunctionRequest
     */
    'helmChart'?: string;
    /**
     * Helm Chart Service Name is required when helmChart property is specified 
     * @type {string}
     * @memberof CreateFunctionRequest
     */
    'helmChartServiceName'?: string;
    /**
     * Optional set of resources
     * @type {Set<ArtifactDto>}
     * @memberof CreateFunctionRequest
     */
    'resources'?: Set<ArtifactDto>;
    /**
     * Invocation request body format
     * @type {string}
     * @memberof CreateFunctionRequest
     */
    'apiBodyFormat'?: CreateFunctionRequestApiBodyFormatEnum;
}

type CreateFunctionRequestApiBodyFormatEnum = 'PREDICT_V2' | 'CUSTOM'


