/* tslint:disable */
/* eslint-disable */
/**
 * Italian eInvoice API
 * The Italian eInvoice API is a RESTful API that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple and easy to use, abstracting away SDI complexity while still providing complete control over the invoice send/receive process. The API also provides advanced features and a rich toolchain, such as invoice validation, multiple upload methods, webhooks, event logs, CORS support, client SDKs for commonly used languages, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1.0.0
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
         * Every API operation is logged and can be retrieved here.
         * @summary List events
         * @param {number} [page] Page number.
         * @param {number} [pageSize] Items per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1LogGet: async (page?: number, pageSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/invoice/v1/log`;
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

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
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
         * Every API operation is logged and can be retrieved here.
         * @summary Get an event by id
         * @param {number} id Item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1LogIdGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('invoiceV1LogIdGet', 'id', id)
            const localVarPath = `/invoice/v1/log/{id}`
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
         * Every API operation is logged and can be retrieved here.
         * @summary List events
         * @param {number} [page] Page number.
         * @param {number} [pageSize] Items per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1LogGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Event>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1LogGet(page, pageSize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LogApi.invoiceV1LogGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Every API operation is logged and can be retrieved here.
         * @summary Get an event by id
         * @param {number} id Item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1LogIdGet(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1LogIdGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LogApi.invoiceV1LogIdGet']?.[localVarOperationServerIndex]?.url;
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
         * Every API operation is logged and can be retrieved here.
         * @summary List events
         * @param {number} [page] Page number.
         * @param {number} [pageSize] Items per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1LogGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<Event>> {
            return localVarFp.invoiceV1LogGet(page, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * Every API operation is logged and can be retrieved here.
         * @summary Get an event by id
         * @param {number} id Item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1LogIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Event> {
            return localVarFp.invoiceV1LogIdGet(id, options).then((request) => request(axios, basePath));
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
     * Every API operation is logged and can be retrieved here.
     * @summary List events
     * @param {number} [page] Page number.
     * @param {number} [pageSize] Items per page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogApiInterface
     */
    invoiceV1LogGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<Event>>;

    /**
     * Every API operation is logged and can be retrieved here.
     * @summary Get an event by id
     * @param {number} id Item id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogApiInterface
     */
    invoiceV1LogIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Event>;

}

/**
 * LogApi - object-oriented interface
 * @export
 * @class LogApi
 * @extends {BaseAPI}
 */
export class LogApi extends BaseAPI implements LogApiInterface {
    /**
     * Every API operation is logged and can be retrieved here.
     * @summary List events
     * @param {number} [page] Page number.
     * @param {number} [pageSize] Items per page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogApi
     */
    public invoiceV1LogGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig) {
        return LogApiFp(this.configuration).invoiceV1LogGet(page, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Every API operation is logged and can be retrieved here.
     * @summary Get an event by id
     * @param {number} id Item id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogApi
     */
    public invoiceV1LogIdGet(id: number, options?: RawAxiosRequestConfig) {
        return LogApiFp(this.configuration).invoiceV1LogIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
}

