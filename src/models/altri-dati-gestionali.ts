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



/**
 * 
 * @export
 * @interface AltriDatiGestionali
 */
export interface AltriDatiGestionali {
    /**
     * 
     * @type {string}
     * @memberof AltriDatiGestionali
     */
    'tipo_dato'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AltriDatiGestionali
     */
    'riferimento_testo'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AltriDatiGestionali
     */
    'riferimento_numero'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AltriDatiGestionali
     */
    'riferimento_data'?: string | null;
}

