/*
Cloud Functions

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

The version of the OpenAPI document: 2.87.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Data Transfer Object(DTO) representing a spot instance
 * @export
 * @interface InstanceDto
 */
export interface InstanceDto {
    /**
     * Unique id of the instance
     * @type {string}
     * @memberof InstanceDto
     */
    'instanceId'?: string;
    /**
     * Function executing on the instance
     * @type {string}
     * @memberof InstanceDto
     */
    'functionId'?: string;
    /**
     * Function version executing on the instance
     * @type {string}
     * @memberof InstanceDto
     */
    'functionVersionId'?: string;
    /**
     * GPU instance-type powering the instance
     * @type {string}
     * @memberof InstanceDto
     */
    'instanceType'?: string;
    /**
     * Instance status
     * @type {string}
     * @memberof InstanceDto
     */
    'instanceStatus'?: InstanceDtoInstanceStatusEnum;
    /**
     * SIS request-id used to launch this instance
     * @type {string}
     * @memberof InstanceDto
     */
    'sisRequestId'?: string;
    /**
     * NVIDIA Cloud Account Id that owns the function running on the instance
     * @type {string}
     * @memberof InstanceDto
     */
    'ncaId'?: string;
    /**
     * GPU name powering the instance
     * @type {string}
     * @memberof InstanceDto
     */
    'gpu'?: string;
    /**
     * Backend where the instance is running
     * @type {string}
     * @memberof InstanceDto
     */
    'backend'?: string;
    /**
     * Location such as zone name or region where the instance is running
     * @type {string}
     * @memberof InstanceDto
     */
    'location'?: string;
    /**
     * Instance creation timestamp
     * @type {string}
     * @memberof InstanceDto
     */
    'instanceCreatedAt'?: string;
    /**
     * Instance\'s last updated timestamp
     * @type {string}
     * @memberof InstanceDto
     */
    'instanceUpdatedAt'?: string;
}

type InstanceDtoInstanceStatusEnum = 'ACTIVE' | 'ERRORED' | 'PREEMPTED' | 'DELETED'


