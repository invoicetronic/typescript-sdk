# SubkeyApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**subkeyGet**](#subkeyget) | **GET** /subkey | List restricted keys|
|[**subkeyIdDelete**](#subkeyiddelete) | **DELETE** /subkey/{id} | Delete a restricted key|
|[**subkeyIdGet**](#subkeyidget) | **GET** /subkey/{id} | Get a restricted key by id|
|[**subkeyIdRollPost**](#subkeyidrollpost) | **POST** /subkey/{id}/roll | Roll the secrets of a restricted key|
|[**subkeyPost**](#subkeypost) | **POST** /subkey | Add a restricted key|
|[**subkeyPut**](#subkeyput) | **PUT** /subkey | Update a restricted key|

# **subkeyGet**
> Array<SubKey> subkeyGet()

Retrieve a paginated list of the restricted keys of the calling main key. Secrets are never included.  **Restricted keys** are API keys created under your main key, with the permissions and companies you choose. Use them to give each of your customers, integrations or collaborators only the access they need: a restricted key limited to one company sees only that company\'s invoices, updates, webhooks and events.  Only a main key can manage restricted keys: a restricted key calling these endpoints gets `403 Forbidden` with `code` = `subkey_not_allowed`.  **Onboarding a company in two calls.** Create the company with `POST /company`, then create a restricted key limited to it with `POST /subkey` and `company_ids` = `[<company id>]`. Hand the key to your customer: it can operate only on that company.  **Secrets are shown once.** `test_key` and `live_key` are returned only when a key is created or rolled, never by reads. Store them safely. If a secret is lost or exposed, roll the key with `POST /subkey/{id}/roll`: its id, permissions, companies and CORS origins stay the same. Pass `expires_in_hours` (up to 168) to keep the replaced secrets working while you migrate; without it they stop working at once.  **Permissions** are set per resource. `company`, `send`, `receive` and `webhook` accept `Read` or `Write`; `update`, `log`, `webhookhistory`, `export` and `status` accept only `Read`. A missing resource means no access. Each permission cannot exceed the one of your main key (`400`, `code` = `permission_exceeds_parent`). On creation, omitted or empty `permissions` copy those of your main key at that moment.  | Resource | `Read` | `Write` | |---|---|---| | `company` | list and read companies | also create, update and delete them | | `send` | list and read outgoing invoices | also send and validate invoices | | `receive` | list and read incoming invoices | also delete them | | `webhook` | list and read webhooks | also create, update and delete them | | `update`, `log`, `webhookhistory`, `export`, `status` | read | — |  **Companies.** Omitted or empty `company_ids` give access to all the companies of your account, including the ones created later. Every id must belong to your account (`400`, `code` = `company_not_found`). A restricted key limited to some companies cannot see the companies it creates: use your main key for onboarding.  **Limits.** An account can hold up to 1,000 restricted keys (`400`, `code` = `subkey_limit_reached`). Operations performed with restricted keys use the credits of your account. 

### Example

```typescript
import {
    SubkeyApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SubkeyApi(configuration);

let page: number; //Page number. (optional) (default to 1)
let pageSize: number; //Items per page. Cannot be greater than 200. (optional) (default to 100)
let companyId: number; //Company id (optional) (default to undefined)
let active: boolean; //Active keys only (true) or inactive only (false). (optional) (default to undefined)
let q: string; //Human-readable label: free-text search. (optional) (default to undefined)

const { status, data } = await apiInstance.subkeyGet(
    page,
    pageSize,
    companyId,
    active,
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number. | (optional) defaults to 1|
| **pageSize** | [**number**] | Items per page. Cannot be greater than 200. | (optional) defaults to 100|
| **companyId** | [**number**] | Company id | (optional) defaults to undefined|
| **active** | [**boolean**] | Active keys only (true) or inactive only (false). | (optional) defaults to undefined|
| **q** | [**string**] | Human-readable label: free-text search. | (optional) defaults to undefined|


### Return type

**Array<SubKey>**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subkeyIdDelete**
> SubKey subkeyIdDelete()

Delete a restricted key of the calling main key. It stops authenticating at once.  **Restricted keys** are API keys created under your main key, with the permissions and companies you choose. Use them to give each of your customers, integrations or collaborators only the access they need: a restricted key limited to one company sees only that company\'s invoices, updates, webhooks and events.  Only a main key can manage restricted keys: a restricted key calling these endpoints gets `403 Forbidden` with `code` = `subkey_not_allowed`.  **Onboarding a company in two calls.** Create the company with `POST /company`, then create a restricted key limited to it with `POST /subkey` and `company_ids` = `[<company id>]`. Hand the key to your customer: it can operate only on that company.  **Secrets are shown once.** `test_key` and `live_key` are returned only when a key is created or rolled, never by reads. Store them safely. If a secret is lost or exposed, roll the key with `POST /subkey/{id}/roll`: its id, permissions, companies and CORS origins stay the same. Pass `expires_in_hours` (up to 168) to keep the replaced secrets working while you migrate; without it they stop working at once.  **Permissions** are set per resource. `company`, `send`, `receive` and `webhook` accept `Read` or `Write`; `update`, `log`, `webhookhistory`, `export` and `status` accept only `Read`. A missing resource means no access. Each permission cannot exceed the one of your main key (`400`, `code` = `permission_exceeds_parent`). On creation, omitted or empty `permissions` copy those of your main key at that moment.  | Resource | `Read` | `Write` | |---|---|---| | `company` | list and read companies | also create, update and delete them | | `send` | list and read outgoing invoices | also send and validate invoices | | `receive` | list and read incoming invoices | also delete them | | `webhook` | list and read webhooks | also create, update and delete them | | `update`, `log`, `webhookhistory`, `export`, `status` | read | — |  **Companies.** Omitted or empty `company_ids` give access to all the companies of your account, including the ones created later. Every id must belong to your account (`400`, `code` = `company_not_found`). A restricted key limited to some companies cannot see the companies it creates: use your main key for onboarding.  **Limits.** An account can hold up to 1,000 restricted keys (`400`, `code` = `subkey_limit_reached`). Operations performed with restricted keys use the credits of your account. 

### Example

```typescript
import {
    SubkeyApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SubkeyApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.subkeyIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**SubKey**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subkeyIdGet**
> SubKey subkeyIdGet()

Retrieve a restricted key of the calling main key. Secrets are never included.  **Restricted keys** are API keys created under your main key, with the permissions and companies you choose. Use them to give each of your customers, integrations or collaborators only the access they need: a restricted key limited to one company sees only that company\'s invoices, updates, webhooks and events.  Only a main key can manage restricted keys: a restricted key calling these endpoints gets `403 Forbidden` with `code` = `subkey_not_allowed`.  **Onboarding a company in two calls.** Create the company with `POST /company`, then create a restricted key limited to it with `POST /subkey` and `company_ids` = `[<company id>]`. Hand the key to your customer: it can operate only on that company.  **Secrets are shown once.** `test_key` and `live_key` are returned only when a key is created or rolled, never by reads. Store them safely. If a secret is lost or exposed, roll the key with `POST /subkey/{id}/roll`: its id, permissions, companies and CORS origins stay the same. Pass `expires_in_hours` (up to 168) to keep the replaced secrets working while you migrate; without it they stop working at once.  **Permissions** are set per resource. `company`, `send`, `receive` and `webhook` accept `Read` or `Write`; `update`, `log`, `webhookhistory`, `export` and `status` accept only `Read`. A missing resource means no access. Each permission cannot exceed the one of your main key (`400`, `code` = `permission_exceeds_parent`). On creation, omitted or empty `permissions` copy those of your main key at that moment.  | Resource | `Read` | `Write` | |---|---|---| | `company` | list and read companies | also create, update and delete them | | `send` | list and read outgoing invoices | also send and validate invoices | | `receive` | list and read incoming invoices | also delete them | | `webhook` | list and read webhooks | also create, update and delete them | | `update`, `log`, `webhookhistory`, `export`, `status` | read | — |  **Companies.** Omitted or empty `company_ids` give access to all the companies of your account, including the ones created later. Every id must belong to your account (`400`, `code` = `company_not_found`). A restricted key limited to some companies cannot see the companies it creates: use your main key for onboarding.  **Limits.** An account can hold up to 1,000 restricted keys (`400`, `code` = `subkey_limit_reached`). Operations performed with restricted keys use the credits of your account. 

### Example

```typescript
import {
    SubkeyApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SubkeyApi(configuration);

let id: number; //Item id (default to undefined)

const { status, data } = await apiInstance.subkeyIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|


### Return type

**SubKey**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subkeyIdRollPost**
> SubKeyWithSecrets subkeyIdRollPost()

Generate new `test_key` and `live_key` for a restricted key, keeping its id, permissions, companies and CORS origins. The replaced secrets stop working at once, or after `expires_in_hours` to migrate without downtime. The response carries the new secrets: store them safely.  **Restricted keys** are API keys created under your main key, with the permissions and companies you choose. Use them to give each of your customers, integrations or collaborators only the access they need: a restricted key limited to one company sees only that company\'s invoices, updates, webhooks and events.  Only a main key can manage restricted keys: a restricted key calling these endpoints gets `403 Forbidden` with `code` = `subkey_not_allowed`.  **Onboarding a company in two calls.** Create the company with `POST /company`, then create a restricted key limited to it with `POST /subkey` and `company_ids` = `[<company id>]`. Hand the key to your customer: it can operate only on that company.  **Secrets are shown once.** `test_key` and `live_key` are returned only when a key is created or rolled, never by reads. Store them safely. If a secret is lost or exposed, roll the key with `POST /subkey/{id}/roll`: its id, permissions, companies and CORS origins stay the same. Pass `expires_in_hours` (up to 168) to keep the replaced secrets working while you migrate; without it they stop working at once.  **Permissions** are set per resource. `company`, `send`, `receive` and `webhook` accept `Read` or `Write`; `update`, `log`, `webhookhistory`, `export` and `status` accept only `Read`. A missing resource means no access. Each permission cannot exceed the one of your main key (`400`, `code` = `permission_exceeds_parent`). On creation, omitted or empty `permissions` copy those of your main key at that moment.  | Resource | `Read` | `Write` | |---|---|---| | `company` | list and read companies | also create, update and delete them | | `send` | list and read outgoing invoices | also send and validate invoices | | `receive` | list and read incoming invoices | also delete them | | `webhook` | list and read webhooks | also create, update and delete them | | `update`, `log`, `webhookhistory`, `export`, `status` | read | — |  **Companies.** Omitted or empty `company_ids` give access to all the companies of your account, including the ones created later. Every id must belong to your account (`400`, `code` = `company_not_found`). A restricted key limited to some companies cannot see the companies it creates: use your main key for onboarding.  **Limits.** An account can hold up to 1,000 restricted keys (`400`, `code` = `subkey_limit_reached`). Operations performed with restricted keys use the credits of your account. 

### Example

```typescript
import {
    SubkeyApi,
    Configuration
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SubkeyApi(configuration);

let id: number; //Item id (default to undefined)
let expiresInHours: number; //Hours the replaced secrets keep working, from 1 to 168. When omitted, they stop working at once. (optional) (default to undefined)

const { status, data } = await apiInstance.subkeyIdRollPost(
    id,
    expiresInHours
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item id | defaults to undefined|
| **expiresInHours** | [**number**] | Hours the replaced secrets keep working, from 1 to 168. When omitted, they stop working at once. | (optional) defaults to undefined|


### Return type

**SubKeyWithSecrets**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subkeyPost**
> SubKeyWithSecrets subkeyPost(subKeyRequest)

Create a restricted key under the calling main key. The response is the only one carrying `test_key` and `live_key`, together with the one of a roll: store them safely.  **Restricted keys** are API keys created under your main key, with the permissions and companies you choose. Use them to give each of your customers, integrations or collaborators only the access they need: a restricted key limited to one company sees only that company\'s invoices, updates, webhooks and events.  Only a main key can manage restricted keys: a restricted key calling these endpoints gets `403 Forbidden` with `code` = `subkey_not_allowed`.  **Onboarding a company in two calls.** Create the company with `POST /company`, then create a restricted key limited to it with `POST /subkey` and `company_ids` = `[<company id>]`. Hand the key to your customer: it can operate only on that company.  **Secrets are shown once.** `test_key` and `live_key` are returned only when a key is created or rolled, never by reads. Store them safely. If a secret is lost or exposed, roll the key with `POST /subkey/{id}/roll`: its id, permissions, companies and CORS origins stay the same. Pass `expires_in_hours` (up to 168) to keep the replaced secrets working while you migrate; without it they stop working at once.  **Permissions** are set per resource. `company`, `send`, `receive` and `webhook` accept `Read` or `Write`; `update`, `log`, `webhookhistory`, `export` and `status` accept only `Read`. A missing resource means no access. Each permission cannot exceed the one of your main key (`400`, `code` = `permission_exceeds_parent`). On creation, omitted or empty `permissions` copy those of your main key at that moment.  | Resource | `Read` | `Write` | |---|---|---| | `company` | list and read companies | also create, update and delete them | | `send` | list and read outgoing invoices | also send and validate invoices | | `receive` | list and read incoming invoices | also delete them | | `webhook` | list and read webhooks | also create, update and delete them | | `update`, `log`, `webhookhistory`, `export`, `status` | read | — |  **Companies.** Omitted or empty `company_ids` give access to all the companies of your account, including the ones created later. Every id must belong to your account (`400`, `code` = `company_not_found`). A restricted key limited to some companies cannot see the companies it creates: use your main key for onboarding.  **Limits.** An account can hold up to 1,000 restricted keys (`400`, `code` = `subkey_limit_reached`). Operations performed with restricted keys use the credits of your account. 

### Example

```typescript
import {
    SubkeyApi,
    Configuration,
    SubKeyRequest
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SubkeyApi(configuration);

let subKeyRequest: SubKeyRequest; //

const { status, data } = await apiInstance.subkeyPost(
    subKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subKeyRequest** | **SubKeyRequest**|  | |


### Return type

**SubKeyWithSecrets**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subkeyPut**
> SubKey subkeyPut(subKeyUpdate)

Replace the description, active flag, permissions, companies and CORS origins of a restricted key. Omitted `permissions`, `company_ids` or `cors_origins` mean none. A stale `version` fails with `422`.  **Restricted keys** are API keys created under your main key, with the permissions and companies you choose. Use them to give each of your customers, integrations or collaborators only the access they need: a restricted key limited to one company sees only that company\'s invoices, updates, webhooks and events.  Only a main key can manage restricted keys: a restricted key calling these endpoints gets `403 Forbidden` with `code` = `subkey_not_allowed`.  **Onboarding a company in two calls.** Create the company with `POST /company`, then create a restricted key limited to it with `POST /subkey` and `company_ids` = `[<company id>]`. Hand the key to your customer: it can operate only on that company.  **Secrets are shown once.** `test_key` and `live_key` are returned only when a key is created or rolled, never by reads. Store them safely. If a secret is lost or exposed, roll the key with `POST /subkey/{id}/roll`: its id, permissions, companies and CORS origins stay the same. Pass `expires_in_hours` (up to 168) to keep the replaced secrets working while you migrate; without it they stop working at once.  **Permissions** are set per resource. `company`, `send`, `receive` and `webhook` accept `Read` or `Write`; `update`, `log`, `webhookhistory`, `export` and `status` accept only `Read`. A missing resource means no access. Each permission cannot exceed the one of your main key (`400`, `code` = `permission_exceeds_parent`). On creation, omitted or empty `permissions` copy those of your main key at that moment.  | Resource | `Read` | `Write` | |---|---|---| | `company` | list and read companies | also create, update and delete them | | `send` | list and read outgoing invoices | also send and validate invoices | | `receive` | list and read incoming invoices | also delete them | | `webhook` | list and read webhooks | also create, update and delete them | | `update`, `log`, `webhookhistory`, `export`, `status` | read | — |  **Companies.** Omitted or empty `company_ids` give access to all the companies of your account, including the ones created later. Every id must belong to your account (`400`, `code` = `company_not_found`). A restricted key limited to some companies cannot see the companies it creates: use your main key for onboarding.  **Limits.** An account can hold up to 1,000 restricted keys (`400`, `code` = `subkey_limit_reached`). Operations performed with restricted keys use the credits of your account. 

### Example

```typescript
import {
    SubkeyApi,
    Configuration,
    SubKeyUpdate
} from '@invoicetronic/ts-sdk';

const configuration = new Configuration();
const apiInstance = new SubkeyApi(configuration);

let subKeyUpdate: SubKeyUpdate; //

const { status, data } = await apiInstance.subkeyPut(
    subKeyUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subKeyUpdate** | **SubKeyUpdate**|  | |


### Return type

**SubKey**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |
|**422** | Unprocessable Content |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

