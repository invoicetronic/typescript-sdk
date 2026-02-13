# ExportApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**exportGet**](#exportget) | **GET** /export | Export invoices as a ZIP archive|

# **exportGet**
> exportGet()

Export invoices as a ZIP archive of FatturaPA XML files, suitable for import into accounting software (TeamSystem, Zucchetti, etc.).  **Sent invoices** are only included when they have reached a definitive state (e.g., `Consegnato` for private recipients, `AccettatoDalDestinatario`, `DecorrenzaTermini`, etc.). Invoices still being processed by SDI are excluded.  **Received invoices** are always included. Unread invoices are automatically marked as read and counted as operations.  ### Period filters  You can filter by period using either: - `year` + `month` (e.g., `year=2026&month=3` for March 2026) - `year` + `quarter` (e.g., `year=2026&quarter=1` for Q1 Jan-Mar) - `document_date_from` / `document_date_to` for a custom date range  These options are mutually exclusive. The `year` parameter alone is not valid and requires either `month` or `quarter`.  ### Response  Returns `200` with a ZIP archive, or `204 No Content` if no invoices match the given filters. Files in the archive are organized by company VAT number (`{vat}/send/`, `{vat}/receive/`).  ### Rate limiting  This endpoint has a dedicated rate limit: only one export request per user can be processed at a time. Concurrent requests will receive a `429 Too Many Requests` response.

### Example

```typescript
import {
    ExportApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new ExportApi(configuration);

let type: 'Send' | 'Receive' | 'Both'; // (optional) (default to 'Both')
let companyId: number; //Company id (optional) (default to undefined)
let year: number; // (optional) (default to undefined)
let month: number; // (optional) (default to undefined)
let quarter: number; // (optional) (default to undefined)
let documentDateFrom: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)
let documentDateTo: string; //UTC ISO 8601 (2024-11-29T12:34:56Z) (optional) (default to undefined)

const { status, data } = await apiInstance.exportGet(
    type,
    companyId,
    year,
    month,
    quarter,
    documentDateFrom,
    documentDateTo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;Send&#39; | &#39;Receive&#39; | &#39;Both&#39;**]**Array<&#39;Send&#39; &#124; &#39;Receive&#39; &#124; &#39;Both&#39;>** |  | (optional) defaults to 'Both'|
| **companyId** | [**number**] | Company id | (optional) defaults to undefined|
| **year** | [**number**] |  | (optional) defaults to undefined|
| **month** | [**number**] |  | (optional) defaults to undefined|
| **quarter** | [**number**] |  | (optional) defaults to undefined|
| **documentDateFrom** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|
| **documentDateTo** | [**string**] | UTC ISO 8601 (2024-11-29T12:34:56Z) | (optional) defaults to undefined|


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
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

