/*
Cloud Functions

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

The version of the OpenAPI document: 2.87.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Response body containing asset-id and the corresponding pre-signed URL to upload an asset of specified content-type to AWS S3 bucket.
 * @export
 * @interface CreateAssetResponse
 */
export interface CreateAssetResponse {
    /**
     * Asset description to be used when uploading the asset
     * @type {string}
     * @memberof CreateAssetResponse
     */
    'description'?: string;
    /**
     * Unique id of the asset to be uploaded to AWS S3 bucket
     * @type {string}
     * @memberof CreateAssetResponse
     */
    'assetId'?: string;
    /**
     * Pre-signed upload URL to upload asset
     * @type {string}
     * @memberof CreateAssetResponse
     */
    'uploadUrl'?: string;
    /**
     * Content type of the asset such image/png, image/jpeg, etc.
     * @type {string}
     * @memberof CreateAssetResponse
     */
    'contentType'?: string;
}

