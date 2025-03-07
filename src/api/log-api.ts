/* tslint:disable */
/* eslint-disable */
/**
 * Invoicetronic API
 * The [Invoicetronic API][2] is a RESTful service that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed to be simple and easy to use, abstracting away SDI complexity while providing complete control over the invoice send/receive process. It provides advanced features as encryption at rest, multi-language pre-flight invoice validation, multiple upload formats, webhooks, event logging, client SDKs, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1
 * Contact: support@invoicetronic.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import type { Event } from '../../src/models';
// @ts-ignore
import type { ProblemHttpResult } from '../../src/models';
/**
 * LogApi - axios parameter creator
 * @export
 */
export const LogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.
         * @summary List events
         * @param {number} [companyId] Company id
         * @param {string} [endpoint] 
         * @param {string} [method] 
         * @param {number} [apiVerion] Api version
         * @param {number} [statusCode] Response status code
         * @param {string} [dateCreatedFrom] UTC ISO 8601 (2024-11-29T12:34:56Z)
         * @param {string} [dateCreatedTo] UTC ISO 8601 (2024-11-29T12:34:56Z)
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {string} [sort] Sort by field. Prefix with \&#39;-\&#39; for descending order.
         * @param {string} [query] 
         * @param {boolean} [success] 
         * @param {string} [dateTimeFrom] Date and time of the event
         * @param {string} [dateTimeTo] Date and time of the event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logGet: async (companyId?: number, endpoint?: string, method?: string, apiVerion?: number, statusCode?: number, dateCreatedFrom?: string, dateCreatedTo?: string, page?: number, pageSize?: number, sort?: string, query?: string, success?: boolean, dateTimeFrom?: string, dateTimeTo?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/log`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            if (companyId !== undefined) {
                localVarQueryParameter['company_id'] = companyId;
            }

            if (endpoint !== undefined) {
                localVarQueryParameter['endpoint'] = endpoint;
            }

            if (method !== undefined) {
                localVarQueryParameter['method'] = method;
            }

            if (apiVerion !== undefined) {
                localVarQueryParameter['api_verion'] = apiVerion;
            }

            if (statusCode !== undefined) {
                localVarQueryParameter['status_code'] = statusCode;
            }

            if (dateCreatedFrom !== undefined) {
                localVarQueryParameter['date_created_from'] = (dateCreatedFrom as any instanceof Date) ?
                    (dateCreatedFrom as any).toISOString() :
                    dateCreatedFrom;
            }

            if (dateCreatedTo !== undefined) {
                localVarQueryParameter['date_created_to'] = (dateCreatedTo as any instanceof Date) ?
                    (dateCreatedTo as any).toISOString() :
                    dateCreatedTo;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }

            if (success !== undefined) {
                localVarQueryParameter['success'] = success;
            }

            if (dateTimeFrom !== undefined) {
                localVarQueryParameter['date_time_from'] = (dateTimeFrom as any instanceof Date) ?
                    (dateTimeFrom as any).toISOString() :
                    dateTimeFrom;
            }

            if (dateTimeTo !== undefined) {
                localVarQueryParameter['date_time_to'] = (dateTimeTo as any instanceof Date) ?
                    (dateTimeTo as any).toISOString() :
                    dateTimeTo;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.
         * @summary Get an event by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logIdGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('logIdGet', 'id', id)
            const localVarPath = `/log/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LogApi - functional programming interface
 * @export
 */
export const LogApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LogApiAxiosParamCreator(configuration)
    return {
        /**
         * Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.
         * @summary List events
         * @param {number} [companyId] Company id
         * @param {string} [endpoint] 
         * @param {string} [method] 
         * @param {number} [apiVerion] Api version
         * @param {number} [statusCode] Response status code
         * @param {string} [dateCreatedFrom] UTC ISO 8601 (2024-11-29T12:34:56Z)
         * @param {string} [dateCreatedTo] UTC ISO 8601 (2024-11-29T12:34:56Z)
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {string} [sort] Sort by field. Prefix with \&#39;-\&#39; for descending order.
         * @param {string} [query] 
         * @param {boolean} [success] 
         * @param {string} [dateTimeFrom] Date and time of the event
         * @param {string} [dateTimeTo] Date and time of the event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logGet(companyId?: number, endpoint?: string, method?: string, apiVerion?: number, statusCode?: number, dateCreatedFrom?: string, dateCreatedTo?: string, page?: number, pageSize?: number, sort?: string, query?: string, success?: boolean, dateTimeFrom?: string, dateTimeTo?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Event>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logGet(companyId, endpoint, method, apiVerion, statusCode, dateCreatedFrom, dateCreatedTo, page, pageSize, sort, query, success, dateTimeFrom, dateTimeTo, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LogApi.logGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.
         * @summary Get an event by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logIdGet(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logIdGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LogApi.logIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LogApi - factory interface
 * @export
 */
export const LogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LogApiFp(configuration)
    return {
        /**
         * Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.
         * @summary List events
         * @param {number} [companyId] Company id
         * @param {string} [endpoint] 
         * @param {string} [method] 
         * @param {number} [apiVerion] Api version
         * @param {number} [statusCode] Response status code
         * @param {string} [dateCreatedFrom] UTC ISO 8601 (2024-11-29T12:34:56Z)
         * @param {string} [dateCreatedTo] UTC ISO 8601 (2024-11-29T12:34:56Z)
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {string} [sort] Sort by field. Prefix with \&#39;-\&#39; for descending order.
         * @param {string} [query] 
         * @param {boolean} [success] 
         * @param {string} [dateTimeFrom] Date and time of the event
         * @param {string} [dateTimeTo] Date and time of the event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logGet(companyId?: number, endpoint?: string, method?: string, apiVerion?: number, statusCode?: number, dateCreatedFrom?: string, dateCreatedTo?: string, page?: number, pageSize?: number, sort?: string, query?: string, success?: boolean, dateTimeFrom?: string, dateTimeTo?: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<Event>> {
            return localVarFp.logGet(companyId, endpoint, method, apiVerion, statusCode, dateCreatedFrom, dateCreatedTo, page, pageSize, sort, query, success, dateTimeFrom, dateTimeTo, options).then((request) => request(axios, basePath));
        },
        /**
         * Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.
         * @summary Get an event by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Event> {
            return localVarFp.logIdGet(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LogApi - interface
 * @export
 * @interface LogApi
 */
export interface LogApiInterface {
    /**
     * Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.
     * @summary List events
     * @param {number} [companyId] Company id
     * @param {string} [endpoint] 
     * @param {string} [method] 
     * @param {number} [apiVerion] Api version
     * @param {number} [statusCode] Response status code
     * @param {string} [dateCreatedFrom] UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {string} [dateCreatedTo] UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {number} [page] Page number. Defaults to 1.
     * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
     * @param {string} [sort] Sort by field. Prefix with \&#39;-\&#39; for descending order.
     * @param {string} [query] 
     * @param {boolean} [success] 
     * @param {string} [dateTimeFrom] Date and time of the event
     * @param {string} [dateTimeTo] Date and time of the event
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogApiInterface
     */
    logGet(companyId?: number, endpoint?: string, method?: string, apiVerion?: number, statusCode?: number, dateCreatedFrom?: string, dateCreatedTo?: string, page?: number, pageSize?: number, sort?: string, query?: string, success?: boolean, dateTimeFrom?: string, dateTimeTo?: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<Event>>;

    /**
     * Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.
     * @summary Get an event by id
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogApiInterface
     */
    logIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Event>;

}

/**
 * LogApi - object-oriented interface
 * @export
 * @class LogApi
 * @extends {BaseAPI}
 */
export class LogApi extends BaseAPI implements LogApiInterface {
    /**
     * Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.
     * @summary List events
     * @param {number} [companyId] Company id
     * @param {string} [endpoint] 
     * @param {string} [method] 
     * @param {number} [apiVerion] Api version
     * @param {number} [statusCode] Response status code
     * @param {string} [dateCreatedFrom] UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {string} [dateCreatedTo] UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {number} [page] Page number. Defaults to 1.
     * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
     * @param {string} [sort] Sort by field. Prefix with \&#39;-\&#39; for descending order.
     * @param {string} [query] 
     * @param {boolean} [success] 
     * @param {string} [dateTimeFrom] Date and time of the event
     * @param {string} [dateTimeTo] Date and time of the event
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogApi
     */
    public logGet(companyId?: number, endpoint?: string, method?: string, apiVerion?: number, statusCode?: number, dateCreatedFrom?: string, dateCreatedTo?: string, page?: number, pageSize?: number, sort?: string, query?: string, success?: boolean, dateTimeFrom?: string, dateTimeTo?: string, options?: RawAxiosRequestConfig) {
        return LogApiFp(this.configuration).logGet(companyId, endpoint, method, apiVerion, statusCode, dateCreatedFrom, dateCreatedTo, page, pageSize, sort, query, success, dateTimeFrom, dateTimeTo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Every API operation is logged and can be retrieved here. Log records are preserved for 15 days.
     * @summary Get an event by id
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogApi
     */
    public logIdGet(id: number, options?: RawAxiosRequestConfig) {
        return LogApiFp(this.configuration).logIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
}

