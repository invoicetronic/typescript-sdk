/* tslint:disable */
/* eslint-disable */
/**
 * Invoicetronic API
 * The [Invoicetronic API][2] is a RESTful service that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed to be simple and easy to use, abstracting away SDI complexity while providing complete control over the invoice send/receive process. It provides advanced features as encryption at rest, multi-language pre-flight invoice validation, multiple upload formats, webhooks, event logging, client SDKs, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1
 * Contact: info@invoicetronic.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DocumentData } from './document-data';

/**
 * Reduced Send data for Update responses, containing only the essential fields.
 * @export
 * @interface SendReduced
 */
export interface SendReduced {
    /**
     * SDI identifier.
     * @type {string}
     * @memberof SendReduced
     */
    'identifier'?: string | null;
    /**
     * VAT number of the Cedente/Prestatore (vendor).
     * @type {string}
     * @memberof SendReduced
     */
    'prestatore'?: string | null;
    /**
     * Optional metadata, as json.
     * @type {{ [key: string]: string; }}
     * @memberof SendReduced
     */
    'meta_data'?: { [key: string]: string; } | null;
    /**
     * The invoices included in the payload.
     * @type {Array<DocumentData>}
     * @memberof SendReduced
     */
    'documents'?: Array<DocumentData> | null;
    /**
     * When the invoice was sent to SDI.
     * @type {string}
     * @memberof SendReduced
     */
    'date_sent'?: string | null;
}

