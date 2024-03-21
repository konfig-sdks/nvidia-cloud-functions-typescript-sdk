<div align="left">

[![Visit Nvidia](./header.png)](https://www.nvidia.com&#x2F;en-us&#x2F;ai&#x2F;)

# [Nvidia](https://www.nvidia.com&#x2F;en-us&#x2F;ai&#x2F;)<a id="nvidia"></a>

Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`nvidiacloudfunctions.assetManagement.createAssetAndUrl`](#nvidiacloudfunctionsassetmanagementcreateassetandurl)
  * [`nvidiacloudfunctions.assetManagement.deleteAssetById`](#nvidiacloudfunctionsassetmanagementdeleteassetbyid)
  * [`nvidiacloudfunctions.assetManagement.listAssets`](#nvidiacloudfunctionsassetmanagementlistassets)
  * [`nvidiacloudfunctions.assetManagement.showDetails`](#nvidiacloudfunctionsassetmanagementshowdetails)
  * [`nvidiacloudfunctions.authorizedAccounts.addAccountToFunction`](#nvidiacloudfunctionsauthorizedaccountsaddaccounttofunction)
  * [`nvidiacloudfunctions.authorizedAccounts.addAccountToFunctionVersion`](#nvidiacloudfunctionsauthorizedaccountsaddaccounttofunctionversion)
  * [`nvidiacloudfunctions.authorizedAccounts.authorizeFunctionAccounts`](#nvidiacloudfunctionsauthorizedaccountsauthorizefunctionaccounts)
  * [`nvidiacloudfunctions.authorizedAccounts.authorizeFunctionAccounts_0`](#nvidiacloudfunctionsauthorizedaccountsauthorizefunctionaccounts_0)
  * [`nvidiacloudfunctions.authorizedAccounts.deleteAllExtraForFunction`](#nvidiacloudfunctionsauthorizedaccountsdeleteallextraforfunction)
  * [`nvidiacloudfunctions.authorizedAccounts.deleteExtraForFunctionVersion`](#nvidiacloudfunctionsauthorizedaccountsdeleteextraforfunctionversion)
  * [`nvidiacloudfunctions.authorizedAccounts.functionVersionAuthorizations`](#nvidiacloudfunctionsauthorizedaccountsfunctionversionauthorizations)
  * [`nvidiacloudfunctions.authorizedAccounts.listForFunction`](#nvidiacloudfunctionsauthorizedaccountslistforfunction)
  * [`nvidiacloudfunctions.authorizedAccounts.removeFromFunctionAuthorization`](#nvidiacloudfunctionsauthorizedaccountsremovefromfunctionauthorization)
  * [`nvidiacloudfunctions.authorizedAccounts.removePartyForVersion`](#nvidiacloudfunctionsauthorizedaccountsremovepartyforversion)
  * [`nvidiacloudfunctions.clusterGroupsAndGPUs.list`](#nvidiacloudfunctionsclustergroupsandgpuslist)
  * [`nvidiacloudfunctions.envelopeFunctionInvocation.callFunction`](#nvidiacloudfunctionsenvelopefunctioninvocationcallfunction)
  * [`nvidiacloudfunctions.envelopeFunctionInvocation.invokeFunction`](#nvidiacloudfunctionsenvelopefunctioninvocationinvokefunction)
  * [`nvidiacloudfunctions.envelopeFunctionInvocation.pollForResultUsingFunctionInvocationRequest`](#nvidiacloudfunctionsenvelopefunctioninvocationpollforresultusingfunctioninvocationrequest)
  * [`nvidiacloudfunctions.functionDeployment.deleteByIdAndVersion`](#nvidiacloudfunctionsfunctiondeploymentdeletebyidandversion)
  * [`nvidiacloudfunctions.functionDeployment.details`](#nvidiacloudfunctionsfunctiondeploymentdetails)
  * [`nvidiacloudfunctions.functionDeployment.initiateDeploymentForVersion`](#nvidiacloudfunctionsfunctiondeploymentinitiatedeploymentforversion)
  * [`nvidiacloudfunctions.functionDeployment.updateSpecs`](#nvidiacloudfunctionsfunctiondeploymentupdatespecs)
  * [`nvidiacloudfunctions.functionInvocation.invokeFunction`](#nvidiacloudfunctionsfunctioninvocationinvokefunction)
  * [`nvidiacloudfunctions.functionInvocation.invokeFunction_0`](#nvidiacloudfunctionsfunctioninvocationinvokefunction_0)
  * [`nvidiacloudfunctions.functionInvocation.pollForResultUsingFunctionInvocationRequest`](#nvidiacloudfunctionsfunctioninvocationpollforresultusingfunctioninvocationrequest)
  * [`nvidiacloudfunctions.functionManagement.createFunctionVersion`](#nvidiacloudfunctionsfunctionmanagementcreatefunctionversion)
  * [`nvidiacloudfunctions.functionManagement.deleteFunctionVersion`](#nvidiacloudfunctionsfunctionmanagementdeletefunctionversion)
  * [`nvidiacloudfunctions.functionManagement.getVersionDetails`](#nvidiacloudfunctionsfunctionmanagementgetversiondetails)
  * [`nvidiacloudfunctions.functionManagement.listFunctionIds`](#nvidiacloudfunctionsfunctionmanagementlistfunctionids)
  * [`nvidiacloudfunctions.functionManagement.listFunctionVersions`](#nvidiacloudfunctionsfunctionmanagementlistfunctionversions)
  * [`nvidiacloudfunctions.functionManagement.listFunctions`](#nvidiacloudfunctionsfunctionmanagementlistfunctions)
  * [`nvidiacloudfunctions.functionManagement.registerNewFunction`](#nvidiacloudfunctionsfunctionmanagementregisternewfunction)
  * [`nvidiacloudfunctions.health.getInfo`](#nvidiacloudfunctionshealthgetinfo)
  * [`nvidiacloudfunctions.queueDetails.functionQueuesDetails`](#nvidiacloudfunctionsqueuedetailsfunctionqueuesdetails)
  * [`nvidiacloudfunctions.queueDetails.getAllQueuesDetails`](#nvidiacloudfunctionsqueuedetailsgetallqueuesdetails)
  * [`nvidiacloudfunctions.queueDetails.getQueuePositionByRequestId`](#nvidiacloudfunctionsqueuedetailsgetqueuepositionbyrequestid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=NVIDIA&serviceName=CloudFunctions&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { NvidiaCloudFunctions } from "nvidia-cloud-functions-typescript-sdk";

const nvidiacloudfunctions = new NvidiaCloudFunctions({
  // Defining the base path is optional and defaults to https://api.nvcf.nvidia.com
  // basePath: "https://api.nvcf.nvidia.com",
});

const createAssetAndUrlResponse =
  await nvidiacloudfunctions.assetManagement.createAssetAndUrl({
    description: "description_example",
    contentType: "contentType_example",
  });

console.log(createAssetAndUrlResponse);
```

## Reference<a id="reference"></a>


### `nvidiacloudfunctions.assetManagement.createAssetAndUrl`<a id="nvidiacloudfunctionsassetmanagementcreateassetandurl"></a>

Creates a unique id representing an asset and a pre-signed URL to upload the  asset artifact to AWS S3 bucket for the NVIDIA Cloud Account. Requires either  a bearer token or an api-key with 'invoke_function' scope in the HTTP  Authorization header.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAssetAndUrlResponse =
  await nvidiacloudfunctions.assetManagement.createAssetAndUrl({
    description: "description_example",
    contentType: "contentType_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

Asset description

##### contentType: `string`<a id="contenttype-string"></a>

Content type of the asset such image/png, image/jpeg, etc.

#### 🔄 Return<a id="🔄-return"></a>

[CreateAssetResponse](./models/create-asset-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/assets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.assetManagement.deleteAssetById`<a id="nvidiacloudfunctionsassetmanagementdeleteassetbyid"></a>

Deletes asset belonging to the current NVIDIA Cloud Account. Requires either  a bearer token or an api-key with 'invoke_function' scope in the HTTP  Authorization header.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAssetByIdResponse =
  await nvidiacloudfunctions.assetManagement.deleteAssetById({
    assetId: "assetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assetId: `string`<a id="assetid-string"></a>

Id of the asset to be deleted

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/assets/{assetId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.assetManagement.listAssets`<a id="nvidiacloudfunctionsassetmanagementlistassets"></a>

List assets owned by the current NVIDIA Cloud Account. Requires either a  bearer token or an api-key with invoke_function scope in the HTTP Authorization  header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAssetsResponse =
  await nvidiacloudfunctions.assetManagement.listAssets();
```

#### 🔄 Return<a id="🔄-return"></a>

[ListAssetsResponse](./models/list-assets-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/assets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.assetManagement.showDetails`<a id="nvidiacloudfunctionsassetmanagementshowdetails"></a>

Returns details for the specified asset-id belonging to the current NVIDIA  Cloud Account. Requires either a bearer token or an api-key with  'invoke_function' scope in the HTTP Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showDetailsResponse =
  await nvidiacloudfunctions.assetManagement.showDetails({
    assetId: "assetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assetId: `string`<a id="assetid-string"></a>

Asset id

#### 🔄 Return<a id="🔄-return"></a>

[AssetResponse](./models/asset-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/assets/{assetId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.authorizedAccounts.addAccountToFunction`<a id="nvidiacloudfunctionsauthorizedaccountsaddaccounttofunction"></a>

Adds the specified NVIDIA Cloud Account to the set of authorized accounts that  are can invoke all the versions of the specified function. If the specified  function does not have any existing inheritable authorized accounts, it results  in a response with status 404. If the specified account is already in the set  of existing inheritable authorized accounts, it results in a response with  status code 409. If a function is public, then Account Admin cannot perform  this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addAccountToFunctionResponse =
  await nvidiacloudfunctions.authorizedAccounts.addAccountToFunction({
    functionId: "functionId_example",
    authorizedParty: {
      ncaId: "ncaId_example",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizedParty: [`AuthorizedPartyDto`](./models/authorized-party-dto.ts)<a id="authorizedparty-authorizedpartydtomodelsauthorized-party-dtots"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedPartiesResponse](./models/authorized-parties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/authorizations/functions/{functionId}/add` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.authorizedAccounts.addAccountToFunctionVersion`<a id="nvidiacloudfunctionsauthorizedaccountsaddaccounttofunctionversion"></a>

Adds the specified NVIDIA Cloud Account to the set of authorized accounts that  can invoke the specified function version. If the specified function version  does not have any existing inheritable authorized accounts, it results in a  response with status 404. If the specified account is already in the set of  existing authorized accounts that are directly associated with the function  version, it results in a response wit status code 409. If a function is public,  then Account Admin cannot perform this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addAccountToFunctionVersionResponse =
  await nvidiacloudfunctions.authorizedAccounts.addAccountToFunctionVersion({
    functionId: "functionId_example",
    functionVersionId: "functionVersionId_example",
    authorizedParty: {
      ncaId: "ncaId_example",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizedParty: [`AuthorizedPartyDto`](./models/authorized-party-dto.ts)<a id="authorizedparty-authorizedpartydtomodelsauthorized-party-dtots"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Function version

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedPartiesResponse](./models/authorized-parties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}/add` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.authorizedAccounts.authorizeFunctionAccounts`<a id="nvidiacloudfunctionsauthorizedaccountsauthorizefunctionaccounts"></a>

Authorizes additional NVIDIA Cloud Accounts to invoke a specific function  version. By default, a function belongs to the NVIDIA Cloud Account that  created it, and the credentials used for function invocation must reference  the same NVIDIA Cloud Account. Upon invocation of this endpoint, any existing  authorized accounts will be overwritten by the newly specified authorized  accounts. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const authorizeFunctionAccountsResponse =
  await nvidiacloudfunctions.authorizedAccounts.authorizeFunctionAccounts({
    functionId: "functionId_example",
    functionVersionId: "functionVersionId_example",
    authorizedParties: [
      {
        ncaId: "ncaId_example",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizedParties: [`AuthorizedPartyDto`](./models/authorized-party-dto.ts)[]<a id="authorizedparties-authorizedpartydtomodelsauthorized-party-dtots"></a>

Parties authorized to invoke function

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Function version id

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedPartiesResponse](./models/authorized-parties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.authorizedAccounts.authorizeFunctionAccounts_0`<a id="nvidiacloudfunctionsauthorizedaccountsauthorizefunctionaccounts_0"></a>

Authorizes additional NVIDIA Cloud Accounts to invoke any version of the  specified function. By default, a function belongs to the NVIDIA Cloud Account  that created it, and the credentials used for function invocation must  reference the same NVIDIA Cloud Account. Upon invocation of this endpoint, any  existing authorized accounts will be overwritten by the newly specified  authorized accounts. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const authorizeFunctionAccounts_0Response =
  await nvidiacloudfunctions.authorizedAccounts.authorizeFunctionAccounts_0({
    functionId: "functionId_example",
    authorizedParties: [
      {
        ncaId: "ncaId_example",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizedParties: [`AuthorizedPartyDto`](./models/authorized-party-dto.ts)[]<a id="authorizedparties-authorizedpartydtomodelsauthorized-party-dtots"></a>

Parties authorized to invoke function

##### functionId: `string`<a id="functionid-string"></a>

Function id

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedPartiesResponse](./models/authorized-parties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/authorizations/functions/{functionId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.authorizedAccounts.deleteAllExtraForFunction`<a id="nvidiacloudfunctionsauthorizedaccountsdeleteallextraforfunction"></a>

Deletes all the extra NVIDIA Cloud Accounts that were authorized to invoke the  function and all its versions. If a function version has its own set of  authorized accounts, those are not deleted. If the specified function is  public, then Account Admin cannot perform this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAllExtraForFunctionResponse =
  await nvidiacloudfunctions.authorizedAccounts.deleteAllExtraForFunction({
    functionId: "functionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedPartiesResponse](./models/authorized-parties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/authorizations/functions/{functionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.authorizedAccounts.deleteExtraForFunctionVersion`<a id="nvidiacloudfunctionsauthorizedaccountsdeleteextraforfunctionversion"></a>

Deletes all the authorized accounts that are directly associated with the  specified function version. Authorized parties that are inherited by the  function version are not deleted. If the specified function version is public,  then Account Admin cannot perform this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteExtraForFunctionVersionResponse =
  await nvidiacloudfunctions.authorizedAccounts.deleteExtraForFunctionVersion({
    functionId: "functionId_example",
    functionVersionId: "functionVersionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Function version

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedPartiesResponse](./models/authorized-parties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.authorizedAccounts.functionVersionAuthorizations`<a id="nvidiacloudfunctionsauthorizedaccountsfunctionversionauthorizations"></a>

Gets NVIDIA Cloud Account IDs that are authorized to invoke specified function  version. Response includes authorized accounts that were added specifically  to the function version and the inherited authorized accounts that were  added at the function level. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const functionVersionAuthorizationsResponse =
  await nvidiacloudfunctions.authorizedAccounts.functionVersionAuthorizations({
    functionId: "functionId_example",
    functionVersionId: "functionVersionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Function version

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedPartiesResponse](./models/authorized-parties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.authorizedAccounts.listForFunction`<a id="nvidiacloudfunctionsauthorizedaccountslistforfunction"></a>

Lists NVIDIA Cloud Account IDs that are authorized to invoke any version of the  specified function. The response includes an array showing authorized accounts  for each version. Individual versions of a function can have their own  authorized accounts. So, each object in the array can have different  authorized accounts listed. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listForFunctionResponse =
  await nvidiacloudfunctions.authorizedAccounts.listForFunction({
    functionId: "functionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

#### 🔄 Return<a id="🔄-return"></a>

[ListAuthorizedPartiesResponse](./models/list-authorized-parties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/authorizations/functions/{functionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.authorizedAccounts.removeFromFunctionAuthorization`<a id="nvidiacloudfunctionsauthorizedaccountsremovefromfunctionauthorization"></a>

Removes the specified NVIDIA Cloud Account from the set of authorized accounts  that can invoke all the versions of the specified function. If the specified  function does not have any existing inheritable authorized parties, it results  in a response with status 404. Also, if the specified account is not in the  existing set of inheritable authorized accounts, it results in a response with  status 400. If the specified function is public, then Account Admin cannot  perform this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromFunctionAuthorizationResponse =
  await nvidiacloudfunctions.authorizedAccounts.removeFromFunctionAuthorization(
    {
      functionId: "functionId_example",
      authorizedParty: {
        ncaId: "ncaId_example",
      },
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizedParty: [`AuthorizedPartyDto`](./models/authorized-party-dto.ts)<a id="authorizedparty-authorizedpartydtomodelsauthorized-party-dtots"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedPartiesResponse](./models/authorized-parties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/authorizations/functions/{functionId}/remove` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.authorizedAccounts.removePartyForVersion`<a id="nvidiacloudfunctionsauthorizedaccountsremovepartyforversion"></a>

Removes the specified NVIDIA Cloud Account from the set of authorized accounts  that are directly associated with specified function version. If the specified  function version does not have any of its own(not inherited) authorized  accounts, it results in a response with status 404. Also, if the specified  authorized account is not in the set of existing authorized parties that are  directly associated with the specified function version, it results in a  response with status code 400. If the specified function version is public,  then Account Admin cannot perform this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePartyForVersionResponse =
  await nvidiacloudfunctions.authorizedAccounts.removePartyForVersion({
    functionId: "functionId_example",
    functionVersionId: "functionVersionId_example",
    authorizedParty: {
      ncaId: "ncaId_example",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizedParty: [`AuthorizedPartyDto`](./models/authorized-party-dto.ts)<a id="authorizedparty-authorizedpartydtomodelsauthorized-party-dtots"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Function version

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedPartiesResponse](./models/authorized-parties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}/remove` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.clusterGroupsAndGPUs.list`<a id="nvidiacloudfunctionsclustergroupsandgpuslist"></a>

Lists Cluster Groups for the current account. The response includes cluster  groups defined specifically in the current account and publicly available  cluster groups such as GFN, OCI, etc. Requires a bearer token with 'list_cluster_groups' scope in HTTP Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await nvidiacloudfunctions.clusterGroupsAndGPUs.list();
```

#### 🔄 Return<a id="🔄-return"></a>

[ClusterGroupsResponse](./models/cluster-groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/clusterGroups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.envelopeFunctionInvocation.callFunction`<a id="nvidiacloudfunctionsenvelopefunctioninvocationcallfunction"></a>

Invokes the specified function that was successfully deployed. If the version  is not specified, any active function versions will handle the request. If  the version is specified in the URI, then the request is exclusively processed  by the designated version of the function. By default, this endpoint will block  for 5 seconds. If the request is not fulfilled before the timeout, it's status  is considered in-progress or pending and the response includes HTTP status code  202 with an invocation request ID, indicating that the client should commence  polling for the result using the invocation request ID. Access to this endpoint  mandates inclusion of either a bearer token or an api-key with 'invoke_function'  scope in the HTTP Authorization header. Additionally, this endpoint has the  capability to provide updates on the progress of the request, contingent  upon the workload's provision of such information. In-progress responses are returned in order. If no in-progress response is received  during polling you will receive the most recent in-progress response. Only the first  256 unread in-progress messages are kept. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const callFunctionResponse =
  await nvidiacloudfunctions.envelopeFunctionInvocation.callFunction({
    functionId: "functionId_example",
    requestBody: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestBody: `object`<a id="requestbody-object"></a>

##### functionId: `string`<a id="functionid-string"></a>

##### requestHeader: [`RequestHeaderDto`](./models/request-header-dto.ts)<a id="requestheader-requestheaderdtomodelsrequest-header-dtots"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InvokeFunctionResponse](./models/invoke-function-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/exec/functions/{functionId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.envelopeFunctionInvocation.invokeFunction`<a id="nvidiacloudfunctionsenvelopefunctioninvocationinvokefunction"></a>

Invokes the specified function that was successfully deployed. If the version  is not specified, any active function versions will handle the request. If  the version is specified in the URI, then the request is exclusively processed  by the designated version of the function. By default, this endpoint will block  for 5 seconds. If the request is not fulfilled before the timeout, it's status  is considered in-progress or pending and the response includes HTTP status code  202 with an invocation request ID, indicating that the client should commence  polling for the result using the invocation request ID. Access to this endpoint  mandates inclusion of either a bearer token or an api-key with 'invoke_function'  scope in the HTTP Authorization header. Additionally, this endpoint has the  capability to provide updates on the progress of the request, contingent  upon the workload's provision of such information. In-progress responses are returned in order. If no in-progress response is received  during polling you will receive the most recent in-progress response. Only the first  256 unread in-progress messages are kept. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const invokeFunctionResponse =
  await nvidiacloudfunctions.envelopeFunctionInvocation.invokeFunction({
    functionId: "functionId_example",
    versionId: "versionId_example",
    requestBody: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestBody: `object`<a id="requestbody-object"></a>

##### functionId: `string`<a id="functionid-string"></a>

##### versionId: `string`<a id="versionid-string"></a>

##### requestHeader: [`RequestHeaderDto`](./models/request-header-dto.ts)<a id="requestheader-requestheaderdtomodelsrequest-header-dtots"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InvokeFunctionResponse](./models/invoke-function-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/exec/functions/{functionId}/versions/{versionId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.envelopeFunctionInvocation.pollForResultUsingFunctionInvocationRequest`<a id="nvidiacloudfunctionsenvelopefunctioninvocationpollforresultusingfunctioninvocationrequest"></a>

Retrieves the status of an in-progress or pending request using its unique  invocation request ID. If the result is available, it will be included in  the response, marking the request as fulfilled. Conversely, if the result is  not yet available, the request is deemed pending. Access to this endpoint  mandates inclusion of either a bearer token or an api-key with  'invoke_function' scope in the HTTP Authorization header. In-progress responses are returned in order. If no in-progress response is received  during polling you will receive the most recent in-progress response. Only the first  256 unread in-progress messages are kept. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pollForResultUsingFunctionInvocationRequestResponse =
  await nvidiacloudfunctions.envelopeFunctionInvocation.pollForResultUsingFunctionInvocationRequest(
    {
      requestId: "requestId_example",
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestId: `string`<a id="requestid-string"></a>

Function invocation request id

#### 🔄 Return<a id="🔄-return"></a>

[InvokeFunctionResponse](./models/invoke-function-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/exec/status/{requestId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionDeployment.deleteByIdAndVersion`<a id="nvidiacloudfunctionsfunctiondeploymentdeletebyidandversion"></a>

Deletes the deployment associated with the specified function. Upon  deletion, any active instances will be terminated, and the function's status  will transition to 'INACTIVE'. To undeploy a function version gracefully,  specify 'graceful=true' query parameter, allowing current tasks to complete  before terminating the instances. If the specified function version is public,  then Account Admin cannot perform this operation. Access to this endpoint mandates a bearer token with 'deploy_function' scope in the  HTTP Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdAndVersionResponse =
  await nvidiacloudfunctions.functionDeployment.deleteByIdAndVersion({
    functionId: "functionId_example",
    functionVersionId: "functionVersionId_example",
    graceful: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Function version id

##### graceful: `boolean`<a id="graceful-boolean"></a>

Query param to deactivate function for graceful shutdown

#### 🔄 Return<a id="🔄-return"></a>

[FunctionResponse](./models/function-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionDeployment.details`<a id="nvidiacloudfunctionsfunctiondeploymentdetails"></a>

Allows Account Admins to retrieve the deployment details of the specified  function version. Access to this endpoint mandates a bearer token with 'deploy_function' scope in the  HTTP Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const detailsResponse = await nvidiacloudfunctions.functionDeployment.details({
  functionId: "functionId_example",
  functionVersionId: "functionVersionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Function version id

#### 🔄 Return<a id="🔄-return"></a>

[DeploymentResponse](./models/deployment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionDeployment.initiateDeploymentForVersion`<a id="nvidiacloudfunctionsfunctiondeploymentinitiatedeploymentforversion"></a>

Initiates deployment for the specified function version. Upon invocation of  this endpoint, the function's status transitions to 'DEPLOYING'. If the  specified function version is public, then Account Admin cannot perform this  operation. Access to this endpoint mandates a bearer token with 'deploy_function' scope in the  HTTP Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initiateDeploymentForVersionResponse =
  await nvidiacloudfunctions.functionDeployment.initiateDeploymentForVersion({
    functionId: "functionId_example",
    functionVersionId: "functionVersionId_example",
    deploymentSpecifications: [
      {
        gpu: "gpu_example",
        backend: "backend_example",
        maxInstances: 1,
        minInstances: 1,
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### deploymentSpecifications: [`GpuSpecificationDto`](./models/gpu-specification-dto.ts)[]<a id="deploymentspecifications-gpuspecificationdtomodelsgpu-specification-dtots"></a>

Deployment specs with Backend, GPU, instance-type, etc. details

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Function version id

#### 🔄 Return<a id="🔄-return"></a>

[DeploymentResponse](./models/deployment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionDeployment.updateSpecs`<a id="nvidiacloudfunctionsfunctiondeploymentupdatespecs"></a>

Updates the deployment specs of the specified function version. It's important  to note that GPU type and backend configurations cannot be modified through  this endpoint. If the specified function is public, then Account Admin cannot  perform this operation. Access to this endpoint mandates a bearer token with 'deploy_function' scope in the  HTTP Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSpecsResponse =
  await nvidiacloudfunctions.functionDeployment.updateSpecs({
    functionId: "functionId_example",
    functionVersionId: "functionVersionId_example",
    deploymentSpecifications: [
      {
        gpu: "gpu_example",
        backend: "backend_example",
        maxInstances: 1,
        minInstances: 1,
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### deploymentSpecifications: [`GpuSpecificationDto`](./models/gpu-specification-dto.ts)[]<a id="deploymentspecifications-gpuspecificationdtomodelsgpu-specification-dtots"></a>

Deployment specs with Backend, GPU, instance-type, etc. details

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Function version id

#### 🔄 Return<a id="🔄-return"></a>

[DeploymentResponse](./models/deployment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionInvocation.invokeFunction`<a id="nvidiacloudfunctionsfunctioninvocationinvokefunction"></a>

Invokes the specified function that was successfully deployed. If the version  is not specified, any active function versions will handle the request. If  the version is specified in the URI, then the request is exclusively processed  by the designated version of the function. By default, this endpoint will block  for 5 seconds. If the request is not fulfilled before the timeout, it's status  is considered in-progress or pending and the response includes HTTP status code  202 with an invocation request ID, indicating that the client should commence  polling for the result using the invocation request ID. Access to this endpoint  mandates inclusion of either a bearer token or an api-key with 'invoke_function'  scope in the HTTP Authorization header. Additionally, this endpoint has the  capability to provide updates on the progress of the request, contingent  upon the workload's provision of such information. In-progress responses are returned in order. If no in-progress response is received  during polling you will receive the most recent in-progress response. Only the first  256 unread in-progress messages are kept. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const invokeFunctionResponse =
  await nvidiacloudfunctions.functionInvocation.invokeFunction({
    functionId: "functionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

##### nvcfInputAssetReferences: `string`[]<a id="nvcfinputassetreferences-string"></a>

##### nvcfPollSeconds: `number`<a id="nvcfpollseconds-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FunctionInvocationInvokeFunction200Response](./models/function-invocation-invoke-function200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/pexec/functions/{functionId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionInvocation.invokeFunction_0`<a id="nvidiacloudfunctionsfunctioninvocationinvokefunction_0"></a>

Invokes the specified function that was successfully deployed. If the version  is not specified, any active function versions will handle the request. If  the version is specified in the URI, then the request is exclusively processed  by the designated version of the function. By default, this endpoint will block  for 5 seconds. If the request is not fulfilled before the timeout, it's status  is considered in-progress or pending and the response includes HTTP status code  202 with an invocation request ID, indicating that the client should commence  polling for the result using the invocation request ID. Access to this endpoint  mandates inclusion of either a bearer token or an api-key with 'invoke_function'  scope in the HTTP Authorization header. Additionally, this endpoint has the  capability to provide updates on the progress of the request, contingent  upon the workload's provision of such information. In-progress responses are returned in order. If no in-progress response is received  during polling you will receive the most recent in-progress response. Only the first  256 unread in-progress messages are kept. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const invokeFunction_0Response =
  await nvidiacloudfunctions.functionInvocation.invokeFunction_0({
    functionId: "functionId_example",
    versionId: "versionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

##### versionId: `string`<a id="versionid-string"></a>

##### nvcfInputAssetReferences: `string`[]<a id="nvcfinputassetreferences-string"></a>

##### nvcfPollSeconds: `number`<a id="nvcfpollseconds-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FunctionInvocationInvokeFunction200Response](./models/function-invocation-invoke-function200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/pexec/functions/{functionId}/versions/{versionId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionInvocation.pollForResultUsingFunctionInvocationRequest`<a id="nvidiacloudfunctionsfunctioninvocationpollforresultusingfunctioninvocationrequest"></a>

Retrieves the status of an in-progress or pending request using its unique  invocation request ID. If the result is available, it will be included in  the response, marking the request as fulfilled. Conversely, if the result is  not yet available, the request is deemed pending. Access to this endpoint  mandates inclusion of either a bearer token or an api-key with  'invoke_function' scope in the HTTP Authorization header. In-progress responses are returned in order. If no in-progress response is received  during polling you will receive the most recent in-progress response. Only the first  256 unread in-progress messages are kept. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pollForResultUsingFunctionInvocationRequestResponse =
  await nvidiacloudfunctions.functionInvocation.pollForResultUsingFunctionInvocationRequest(
    {
      requestId: "requestId_example",
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestId: `string`<a id="requestid-string"></a>

Function invocation request id

##### nvcfPollSeconds: `number`<a id="nvcfpollseconds-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FunctionInvocationPollForResultUsingFunctionInvocationRequestResponse](./models/function-invocation-poll-for-result-using-function-invocation-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/pexec/status/{requestId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionManagement.createFunctionVersion`<a id="nvidiacloudfunctionsfunctionmanagementcreatefunctionversion"></a>

Creates a version of the specified function within the authenticated NVIDIA  Cloud Account. Requires a bearer token with 'register_function' scope in the  HTTP Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFunctionVersionResponse =
  await nvidiacloudfunctions.functionManagement.createFunctionVersion({
    functionId: "functionId_example",
    name: "gBAMDTMv2D2ylmgd10Z3UB6UkJSIS",
    inferenceUrl: "inferenceUrl_example",
    apiBodyFormat: "PREDICT_V2",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Function name must start with lowercase/uppercase/digit and can only contain lowercase, uppercase, digit, hyphen, and underscore characters

##### inferenceUrl: `string`<a id="inferenceurl-string"></a>

Entrypoint for invoking the container to process a request

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### healthUri: `string`<a id="healthuri-string"></a>

Health endpoint for the container or the helmChart

##### inferencePort: `number`<a id="inferenceport-number"></a>

Optional port number where the inference listener is running. Defaults to 8000  for Triton. 

##### containerArgs: `string`<a id="containerargs-string"></a>

Args to be passed when launching the container

##### containerEnvironment: [`ContainerEnvironmentEntryDto`](./models/container-environment-entry-dto.ts)[]<a id="containerenvironment-containerenvironmententrydtomodelscontainer-environment-entry-dtots"></a>

Environment settings for launching the container

##### models: [`ArtifactDto`](./models/artifact-dto.ts)[]<a id="models-artifactdtomodelsartifact-dtots"></a>

Optional set of models

##### containerImage: `string`<a id="containerimage-string"></a>

Optional custom container image

##### helmChart: `string`<a id="helmchart-string"></a>

Optional Helm Chart

##### helmChartServiceName: `string`<a id="helmchartservicename-string"></a>

Helm Chart Service Name is required when helmChart property is specified 

##### resources: [`ArtifactDto`](./models/artifact-dto.ts)[]<a id="resources-artifactdtomodelsartifact-dtots"></a>

Optional set of resources

##### apiBodyFormat: `string`<a id="apibodyformat-string"></a>

Invocation request body format

#### 🔄 Return<a id="🔄-return"></a>

[CreateFunctionResponse](./models/create-function-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/functions/{functionId}/versions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionManagement.deleteFunctionVersion`<a id="nvidiacloudfunctionsfunctionmanagementdeletefunctionversion"></a>

Deletes the specified function version in the authenticated NVIDIA Cloud  Account. Requires a bearer token with 'delete_function' scope in the HTTP  Authorization header. If the function version is public, then Account Admin  cannot delete the function. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFunctionVersionResponse =
  await nvidiacloudfunctions.functionManagement.deleteFunctionVersion({
    functionId: "functionId_example",
    functionVersionId: "functionVersionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Version id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/functions/{functionId}/versions/{functionVersionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionManagement.getVersionDetails`<a id="nvidiacloudfunctionsfunctionmanagementgetversiondetails"></a>

Retrieves detailed information of the specified function version in the  authenticated NVIDIA Cloud Account. Requires either a bearer token or an  api-key with 'list_functions' or 'list_functions_details' scopes in the HTTP  Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVersionDetailsResponse =
  await nvidiacloudfunctions.functionManagement.getVersionDetails({
    functionId: "functionId_example",
    functionVersionId: "functionVersionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### functionVersionId: `string`<a id="functionversionid-string"></a>

Version id 

#### 🔄 Return<a id="🔄-return"></a>

[FunctionResponse](./models/function-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/functions/{functionId}/versions/{functionVersionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionManagement.listFunctionIds`<a id="nvidiacloudfunctionsfunctionmanagementlistfunctionids"></a>

Lists ids of all the functions in the authenticated NVIDIA Cloud Account.  Requires either a bearer token or an api-key with 'list_functions' or  'list_functions_details' scopes in the HTTP Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFunctionIdsResponse =
  await nvidiacloudfunctions.functionManagement.listFunctionIds({
    visibility: ["authorized", "private", "public"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### visibility: `string`[]<a id="visibility-string"></a>

Query param \'visibility\' indicates the kind of functions to be included  in the response. 

#### 🔄 Return<a id="🔄-return"></a>

[ListFunctionIdsResponse](./models/list-function-ids-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/functions/ids` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionManagement.listFunctionVersions`<a id="nvidiacloudfunctionsfunctionmanagementlistfunctionversions"></a>

Lists details of all the versions of the specified function in the authenticated  NVIDIA Cloud Account. Requires either a bearer token or an api-key with  'list_functions' or 'list_functions_details' scopes in the HTTP Authorization  header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFunctionVersionsResponse =
  await nvidiacloudfunctions.functionManagement.listFunctionVersions({
    functionId: "functionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

#### 🔄 Return<a id="🔄-return"></a>

[ListFunctionsResponse](./models/list-functions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/functions/{functionId}/versions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionManagement.listFunctions`<a id="nvidiacloudfunctionsfunctionmanagementlistfunctions"></a>

Lists all the functions associated with the authenticated NVIDIA Cloud Account.  Requires either a bearer token or an api-key with 'list_functions' or  'list_functions_details' scopes in the HTTP Authorization header.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFunctionsResponse =
  await nvidiacloudfunctions.functionManagement.listFunctions({
    visibility: ["authorized", "private", "public"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### visibility: `string`[]<a id="visibility-string"></a>

Query param \'visibility\' indicates the kind of functions to be included  in the response. 

#### 🔄 Return<a id="🔄-return"></a>

[ListFunctionsResponse](./models/list-functions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/functions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.functionManagement.registerNewFunction`<a id="nvidiacloudfunctionsfunctionmanagementregisternewfunction"></a>

Creates a new function within the authenticated NVIDIA Cloud Account. Requires a  bearer token with 'register_function' scope in the HTTP Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const registerNewFunctionResponse =
  await nvidiacloudfunctions.functionManagement.registerNewFunction({
    name: "gBAMDTMv2D2ylmgd10Z3UB6UkJSIS",
    inferenceUrl: "inferenceUrl_example",
    apiBodyFormat: "PREDICT_V2",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Function name must start with lowercase/uppercase/digit and can only contain lowercase, uppercase, digit, hyphen, and underscore characters

##### inferenceUrl: `string`<a id="inferenceurl-string"></a>

Entrypoint for invoking the container to process a request

##### healthUri: `string`<a id="healthuri-string"></a>

Health endpoint for the container or the helmChart

##### inferencePort: `number`<a id="inferenceport-number"></a>

Optional port number where the inference listener is running. Defaults to 8000  for Triton. 

##### containerArgs: `string`<a id="containerargs-string"></a>

Args to be passed when launching the container

##### containerEnvironment: [`ContainerEnvironmentEntryDto`](./models/container-environment-entry-dto.ts)[]<a id="containerenvironment-containerenvironmententrydtomodelscontainer-environment-entry-dtots"></a>

Environment settings for launching the container

##### models: [`ArtifactDto`](./models/artifact-dto.ts)[]<a id="models-artifactdtomodelsartifact-dtots"></a>

Optional set of models

##### containerImage: `string`<a id="containerimage-string"></a>

Optional custom container image

##### helmChart: `string`<a id="helmchart-string"></a>

Optional Helm Chart

##### helmChartServiceName: `string`<a id="helmchartservicename-string"></a>

Helm Chart Service Name is required when helmChart property is specified 

##### resources: [`ArtifactDto`](./models/artifact-dto.ts)[]<a id="resources-artifactdtomodelsartifact-dtots"></a>

Optional set of resources

##### apiBodyFormat: `string`<a id="apibodyformat-string"></a>

Invocation request body format

#### 🔄 Return<a id="🔄-return"></a>

[CreateFunctionResponse](./models/create-function-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/functions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.health.getInfo`<a id="nvidiacloudfunctionshealthgetinfo"></a>

Get Health Information about this service

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await nvidiacloudfunctions.health.getInfo();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthComponent](./models/health-component.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/**` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.queueDetails.functionQueuesDetails`<a id="nvidiacloudfunctionsqueuedetailsfunctionqueuesdetails"></a>

Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with 'queue_details' scope in the HTTP  Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const functionQueuesDetailsResponse =
  await nvidiacloudfunctions.queueDetails.functionQueuesDetails({
    functionId: "functionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

#### 🔄 Return<a id="🔄-return"></a>

[GetQueuesResponse](./models/get-queues-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/queues/functions/{functionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.queueDetails.getAllQueuesDetails`<a id="nvidiacloudfunctionsqueuedetailsgetallqueuesdetails"></a>

Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with 'queue_details' scope in the HTTP  Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllQueuesDetailsResponse =
  await nvidiacloudfunctions.queueDetails.getAllQueuesDetails({
    functionId: "functionId_example",
    versionId: "versionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function id

##### versionId: `string`<a id="versionid-string"></a>

Function version id

#### 🔄 Return<a id="🔄-return"></a>

[GetQueuesResponse](./models/get-queues-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/queues/functions/{functionId}/versions/{versionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidiacloudfunctions.queueDetails.getQueuePositionByRequestId`<a id="nvidiacloudfunctionsqueuedetailsgetqueuepositionbyrequestid"></a>

Using the specified function invocation request id, returns the estimated  position of the corresponding message up to 1000 in the queue. Requires a bearer token or an api-key with 'queue_details' scope in the HTTP  Authorization header. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQueuePositionByRequestIdResponse =
  await nvidiacloudfunctions.queueDetails.getQueuePositionByRequestId({
    requestId: "requestId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestId: `string`<a id="requestid-string"></a>

Function invocation request id

#### 🔄 Return<a id="🔄-return"></a>

[GetPositionInQueueResponse](./models/get-position-in-queue-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/nvcf/queues/{requestId}/position` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
