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



/**
 * 
 * @export
 * @interface DatiRitenuta
 */
export interface DatiRitenuta {
    /**
     * 
     * @type {string}
     * @memberof DatiRitenuta
     */
    'tipo_ritenuta'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DatiRitenuta
     */
    'importo_ritenuta'?: number;
    /**
     * 
     * @type {number}
     * @memberof DatiRitenuta
     */
    'aliquota_ritenuta'?: number;
    /**
     * 
     * @type {string}
     * @memberof DatiRitenuta
     */
    'causale_pagamento'?: string | null;
}

