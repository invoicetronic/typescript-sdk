# SendApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sendFilePost**](#sendfilepost) | **POST** /send/file | Add an invoice by file|
|[**sendGet**](#sendget) | **GET** /send | List invoices|
|[**sendIdGet**](#sendidget) | **GET** /send/{id} | Get a invoice by id|
|[**sendIdPayloadGet**](#sendidpayloadget) | **GET** /send/{id}/payload | Get a send invoice payload by id|
|[**sendIdentifierGet**](#sendidentifierget) | **GET** /send/{identifier} | Get a invoice by identifier|
|[**sendJsonPost**](#sendjsonpost) | **POST** /send/json | Add an invoice by json|
|[**sendPost**](#sendpost) | **POST** /send | Add an invoice|
|[**sendValidateFilePost**](#sendvalidatefilepost) | **POST** /send/validate/file | Validate an invoice file|
|[**sendValidateJsonPost**](#sendvalidatejsonpost) | **POST** /send/validate/json | Validate an invoice by json|
|[**sendValidatePost**](#sendvalidatepost) | **POST** /send/validate | Validate an invoice|
|[**sendValidateXmlPost**](#sendvalidatexmlpost) | **POST** /send/validate/xml | Validate an invoice by xml|
|[**sendXmlPost**](#sendxmlpost) | **POST** /send/xml | Add an invoice by xml|

# **sendFilePost**
> Send sendFilePost()

Add a new invoice by uploading a file. Supported formats are XML (FatturaPA) and P7M (signed). The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the `update` endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).  ### Idempotency  To protect against duplicate submissions caused by network retries, you can send an optional `Idempotency-Key` header with any unique, client-generated value (up to 255 characters).  - The first request with a given key is processed normally, and its response (status, body and `Location`) is stored for 24 hours. - Any subsequent request that reuses the same key within that window replays the original response instead of sending a second invoice to SDI. A replayed response carries the `Idempotent-Replayed: true` header, so you can tell it apart from a freshly processed one. - If a request with the same key is still being processed, the retry receives `409 Conflict`. - If the same key is reused with a **different** invoice payload, the request is rejected with `422 Unprocessable Entity`: a given key must always map to the same request.  Keys are scoped per account, so different accounts can use the same key value without interfering. If the idempotency store is temporarily unavailable, the request is processed normally without idempotency protection.

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let file: File; // (default to undefined)
let validate: boolean; //Validate the document first, and reject it on failure. (optional) (default to false)
let signature: 'None' | 'Apply' | 'Force' | 'Auto'; //Whether to digitally sign the document. (optional) (default to 'Auto')
let idempotencyKey: string; //Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. A replayed response carries the `Idempotent-Replayed: true` header. (optional) (default to undefined)

const { status, data } = await apiInstance.sendFilePost(
    file,
    validate,
    signature,
    idempotencyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **validate** | [**boolean**] | Validate the document first, and reject it on failure. | (optional) defaults to false|
| **signature** | [**&#39;None&#39; | &#39;Apply&#39; | &#39;Force&#39; | &#39;Auto&#39;**]**Array<&#39;None&#39; &#124; &#39;Apply&#39; &#124; &#39;Force&#39; &#124; &#39;Auto&#39;>** | Whether to digitally sign the document. | (optional) defaults to 'Auto'|
| **idempotencyKey** | [**string**] | Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. A replayed response carries the &#x60;Idempotent-Replayed: true&#x60; header. | (optional) defaults to undefined|


### Return type

**Send**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |
|**403** | Forbidden |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |
|**422** | Unprocessable Content |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendGet**
> Array<Send> sendGet()

Retrieve a paginated list of send invoices. Results can be filtered by various criteria such as company, date ranges, document number, current SDI state (`latest_state`), and free-text search (`q`). Use `ids` to fetch specific Send records in a single call (comma-separated, up to 100). Returns invoice metadata; set `include_payload` to true to include the full invoice content.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let companyId: number; //Company id (optional) (default to undefined)
let identifier: string; //SDI identifier. (optional) (default to undefined)
let committente: string; //Vat number or fiscal code. (optional) (default to undefined)
let prestatore: string; //Vat number or fiscal code. (optional) (default to undefined)
let fileName: string; //File name. (optional) (default to undefined)
let lastUpdateFrom: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let lastUpdateTo: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let dateSentFrom: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let dateSentTo: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let documentDateFrom: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let documentDateTo: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let documentNumber: string; //Document number. (optional) (default to undefined)
let latestState: 'Inviato' | 'Consegnato' | 'NonConsegnato' | 'Scartato' | 'AccettatoDalDestinatario' | 'RifiutatoDalDestinatario' | 'ImpossibilitaDiRecapito' | 'DecorrenzaTermini' | 'AttestazioneTrasmissioneFattura'; //Filter by the most recent SDI state for the invoice. Matches the `latest_state` field exposed inline on each Send. (optional) (default to undefined)
let includePayload: boolean; //Include payload in the response. Defaults to false. (optional) (default to undefined)
let ids: string; //Comma-separated list of Send ids (max 100). Filters the collection to the matching rows; unknown or unauthorized ids are silently skipped. (optional) (default to undefined)
let page: number; //Page number. (optional) (default to 1)
let pageSize: number; //Items per page. Cannot be greater than 200. (optional) (default to 100)
let sort: string; //Sort by field. Prefix with \'-\' for descending order. (optional) (default to undefined)
let q: string; //Full-text search across committente, prestatore, identifier, and file name. (optional) (default to undefined)

const { status, data } = await apiInstance.sendGet(
    companyId,
    identifier,
    committente,
    prestatore,
    fileName,
    lastUpdateFrom,
    lastUpdateTo,
    dateSentFrom,
    dateSentTo,
    documentDateFrom,
    documentDateTo,
    documentNumber,
    latestState,
    includePayload,
    ids,
    page,
    pageSize,
    sort,
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyId** | [**number**] | Company id | (optional) defaults to undefined|
| **identifier** | [**string**] | SDI identifier. | (optional) defaults to undefined|
| **committente** | [**string**] | Vat number or fiscal code. | (optional) defaults to undefined|
| **prestatore** | [**string**] | Vat number or fiscal code. | (optional) defaults to undefined|
| **fileName** | [**string**] | File name. | (optional) defaults to undefined|
| **lastUpdateFrom** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **lastUpdateTo** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **dateSentFrom** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **dateSentTo** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **documentDateFrom** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **documentDateTo** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **documentNumber** | [**string**] | Document number. | (optional) defaults to undefined|
| **latestState** | [**&#39;Inviato&#39; | &#39;Consegnato&#39; | &#39;NonConsegnato&#39; | &#39;Scartato&#39; | &#39;AccettatoDalDestinatario&#39; | &#39;RifiutatoDalDestinatario&#39; | &#39;ImpossibilitaDiRecapito&#39; | &#39;DecorrenzaTermini&#39; | &#39;AttestazioneTrasmissioneFattura&#39;**]**Array<&#39;Inviato&#39; &#124; &#39;Consegnato&#39; &#124; &#39;NonConsegnato&#39; &#124; &#39;Scartato&#39; &#124; &#39;AccettatoDalDestinatario&#39; &#124; &#39;RifiutatoDalDestinatario&#39; &#124; &#39;ImpossibilitaDiRecapito&#39; &#124; &#39;DecorrenzaTermini&#39; &#124; &#39;AttestazioneTrasmissioneFattura&#39;>** | Filter by the most recent SDI state for the invoice. Matches the &#x60;latest_state&#x60; field exposed inline on each Send. | (optional) defaults to undefined|
| **includePayload** | [**boolean**] | Include payload in the response. Defaults to false. | (optional) defaults to undefined|
| **ids** | [**string**] | Comma-separated list of Send ids (max 100). Filters the collection to the matching rows; unknown or unauthorized ids are silently skipped. | (optional) defaults to undefined|
| **page** | [**number**] | Page number. | (optional) defaults to 1|
| **pageSize** | [**number**] | Items per page. Cannot be greater than 200. | (optional) defaults to 100|
| **sort** | [**string**] | Sort by field. Prefix with \&#39;-\&#39; for descending order. | (optional) defaults to undefined|
| **q** | [**string**] | Full-text search across committente, prestatore, identifier, and file name. | (optional) defaults to undefined|


### Return type

**Array<Send>**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendIdGet**
> Send sendIdGet()

Retrieve a send invoice by its internal id. The `id` is unique and assigned by the system when the invoice is created. Returns invoice metadata; set `include_payload` to true to include the full invoice content.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let id: number; //Item id (default to undefined)
let includePayload: boolean; //Include payload in the response. Defaults to false. (optional) (default to false)

const { status, data } = await apiInstance.sendIdGet(
    id,
    includePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|
| **includePayload** | [**boolean**] | Include payload in the response. Defaults to false. | (optional) defaults to false|


### Return type

**Send**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendIdPayloadGet**
> sendIdPayloadGet()

Retrieve only the payload of a send invoice, without the full invoice metadata. This is useful when you already have the invoice metadata and only need the XML content.  The response is a `text/plain` string, identical to the `payload` field returned by the standard GET endpoint with `include_payload=true`. Depending on how the invoice was originally submitted, the payload may be Base64-encoded or plain XML. 

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.sendIdPayloadGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendIdentifierGet**
> Send sendIdentifierGet()

Retrieve a send invoice by its SDI identifier. The `identifier` is assigned by the SDI and becomes available after the invoice has been accepted. Returns invoice metadata; set `include_payload` to true to include the full invoice content.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let identifier: string; // (default to undefined)
let includePayload: boolean; //Include payload in the response. Defaults to false. (optional) (default to false)

const { status, data } = await apiInstance.sendIdentifierGet(
    identifier,
    includePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identifier** | [**string**] |  | defaults to undefined|
| **includePayload** | [**boolean**] | Include payload in the response. Defaults to false. | (optional) defaults to false|


### Return type

**Send**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendJsonPost**
> Send sendJsonPost(body)

Add a new invoice using a FatturaPA JSON representation. Property names mirror the FatturaPA XML schema (PascalCase, e.g. `FatturaElettronicaHeader`). The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the `update` endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).  ### Idempotency  To protect against duplicate submissions caused by network retries, you can send an optional `Idempotency-Key` header with any unique, client-generated value (up to 255 characters).  - The first request with a given key is processed normally, and its response (status, body and `Location`) is stored for 24 hours. - Any subsequent request that reuses the same key within that window replays the original response instead of sending a second invoice to SDI. A replayed response carries the `Idempotent-Replayed: true` header, so you can tell it apart from a freshly processed one. - If a request with the same key is still being processed, the retry receives `409 Conflict`. - If the same key is reused with a **different** invoice payload, the request is rejected with `422 Unprocessable Entity`: a given key must always map to the same request.  Keys are scoped per account, so different accounts can use the same key value without interfering. If the idempotency store is temporarily unavailable, the request is processed normally without idempotency protection.

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let body: object; //
let validate: boolean; //Validate the document first, and reject it on failure. (optional) (default to false)
let signature: 'None' | 'Apply' | 'Force' | 'Auto'; //Whether to digitally sign the document. (optional) (default to 'Auto')
let idempotencyKey: string; //Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. A replayed response carries the `Idempotent-Replayed: true` header. (optional) (default to undefined)

const { status, data } = await apiInstance.sendJsonPost(
    body,
    validate,
    signature,
    idempotencyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **validate** | [**boolean**] | Validate the document first, and reject it on failure. | (optional) defaults to false|
| **signature** | [**&#39;None&#39; | &#39;Apply&#39; | &#39;Force&#39; | &#39;Auto&#39;**]**Array<&#39;None&#39; &#124; &#39;Apply&#39; &#124; &#39;Force&#39; &#124; &#39;Auto&#39;>** | Whether to digitally sign the document. | (optional) defaults to 'Auto'|
| **idempotencyKey** | [**string**] | Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. A replayed response carries the &#x60;Idempotent-Replayed: true&#x60; header. | (optional) defaults to undefined|


### Return type

**Send**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |
|**403** | Forbidden |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |
|**422** | Unprocessable Content |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendPost**
> Send sendPost(send)

Add a new invoice using a structured Send object. The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the `update` endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).  ### Idempotency  To protect against duplicate submissions caused by network retries, you can send an optional `Idempotency-Key` header with any unique, client-generated value (up to 255 characters).  - The first request with a given key is processed normally, and its response (status, body and `Location`) is stored for 24 hours. - Any subsequent request that reuses the same key within that window replays the original response instead of sending a second invoice to SDI. A replayed response carries the `Idempotent-Replayed: true` header, so you can tell it apart from a freshly processed one. - If a request with the same key is still being processed, the retry receives `409 Conflict`. - If the same key is reused with a **different** invoice payload, the request is rejected with `422 Unprocessable Entity`: a given key must always map to the same request.  Keys are scoped per account, so different accounts can use the same key value without interfering. If the idempotency store is temporarily unavailable, the request is processed normally without idempotency protection.

### Example

```typescript
import {
    SendApi,
    Configuration,
    Send
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let send: Send; //
let validate: boolean; //Validate the document first, and reject it on failure. (optional) (default to false)
let signature: 'None' | 'Apply' | 'Force' | 'Auto'; //Whether to digitally sign the document. (optional) (default to 'Auto')
let idempotencyKey: string; //Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. A replayed response carries the `Idempotent-Replayed: true` header. (optional) (default to undefined)

const { status, data } = await apiInstance.sendPost(
    send,
    validate,
    signature,
    idempotencyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **send** | **Send**|  | |
| **validate** | [**boolean**] | Validate the document first, and reject it on failure. | (optional) defaults to false|
| **signature** | [**&#39;None&#39; | &#39;Apply&#39; | &#39;Force&#39; | &#39;Auto&#39;**]**Array<&#39;None&#39; &#124; &#39;Apply&#39; &#124; &#39;Force&#39; &#124; &#39;Auto&#39;>** | Whether to digitally sign the document. | (optional) defaults to 'Auto'|
| **idempotencyKey** | [**string**] | Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. A replayed response carries the &#x60;Idempotent-Replayed: true&#x60; header. | (optional) defaults to undefined|


### Return type

**Send**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |
|**403** | Forbidden |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |
|**422** | Unprocessable Content |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendValidateFilePost**
> sendValidateFilePost()

Validate an invoice file without sending it to SDI. Supported formats are XML (FatturaPA) and P7M (signed). Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let file: File; // (default to undefined)

const { status, data } = await apiInstance.sendValidateFilePost(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**422** | Unprocessable Content |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendValidateJsonPost**
> sendValidateJsonPost(body)

Validate a FatturaPA JSON invoice without sending it to SDI. Property names mirror the FatturaPA XML schema (PascalCase, e.g. `FatturaElettronicaHeader`). Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let body: object; //

const { status, data } = await apiInstance.sendValidateJsonPost(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**422** | Unprocessable Content |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendValidatePost**
> sendValidatePost(send)

Validate an invoice without sending it to SDI. Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```typescript
import {
    SendApi,
    Configuration,
    Send
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let send: Send; //

const { status, data } = await apiInstance.sendValidatePost(
    send
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **send** | **Send**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**422** | Unprocessable Content |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendValidateXmlPost**
> sendValidateXmlPost(body)

Validate an XML invoice document without sending it to SDI. Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let body: object; //

const { status, data } = await apiInstance.sendValidateXmlPost(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**422** | Unprocessable Content |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendXmlPost**
> Send sendXmlPost(body)

Add a new invoice using a raw XML document in FatturaPA format. The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the `update` endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy\'s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).  ### Idempotency  To protect against duplicate submissions caused by network retries, you can send an optional `Idempotency-Key` header with any unique, client-generated value (up to 255 characters).  - The first request with a given key is processed normally, and its response (status, body and `Location`) is stored for 24 hours. - Any subsequent request that reuses the same key within that window replays the original response instead of sending a second invoice to SDI. A replayed response carries the `Idempotent-Replayed: true` header, so you can tell it apart from a freshly processed one. - If a request with the same key is still being processed, the retry receives `409 Conflict`. - If the same key is reused with a **different** invoice payload, the request is rejected with `422 Unprocessable Entity`: a given key must always map to the same request.  Keys are scoped per account, so different accounts can use the same key value without interfering. If the idempotency store is temporarily unavailable, the request is processed normally without idempotency protection.

### Example

```typescript
import {
    SendApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SendApi(configuration);

let body: object; //
let validate: boolean; //Validate the document first, and reject it on failure. (optional) (default to false)
let signature: 'None' | 'Apply' | 'Force' | 'Auto'; //Whether to digitally sign the document. (optional) (default to 'Auto')
let idempotencyKey: string; //Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. A replayed response carries the `Idempotent-Replayed: true` header. (optional) (default to undefined)

const { status, data } = await apiInstance.sendXmlPost(
    body,
    validate,
    signature,
    idempotencyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **validate** | [**boolean**] | Validate the document first, and reject it on failure. | (optional) defaults to false|
| **signature** | [**&#39;None&#39; | &#39;Apply&#39; | &#39;Force&#39; | &#39;Auto&#39;**]**Array<&#39;None&#39; &#124; &#39;Apply&#39; &#124; &#39;Force&#39; &#124; &#39;Auto&#39;>** | Whether to digitally sign the document. | (optional) defaults to 'Auto'|
| **idempotencyKey** | [**string**] | Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. A replayed response carries the &#x60;Idempotent-Replayed: true&#x60; header. | (optional) defaults to undefined|


### Return type

**Send**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |
|**403** | Forbidden |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |
|**422** | Unprocessable Content |  * Idempotent-Replayed - Present and set to &#x60;true&#x60; only when the response was replayed from a previous request with the same &#x60;Idempotency-Key&#x60;; absent otherwise. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

