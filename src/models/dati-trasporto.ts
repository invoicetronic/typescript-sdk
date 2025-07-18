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
import type { DatiAnagraficiVettore } from './dati-anagrafici-vettore';
// May contain unused imports in some cases
// @ts-ignore
import type { IndirizzoResa } from './indirizzo-resa';

/**
 * 
 * @export
 * @interface DatiTrasporto
 */
export interface DatiTrasporto {
    /**
     * 
     * @type {DatiAnagraficiVettore}
     * @memberof DatiTrasporto
     */
    'dati_anagrafici_vettore'?: DatiAnagraficiVettore;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasporto
     */
    'mezzo_trasporto'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasporto
     */
    'causale_trasporto'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DatiTrasporto
     */
    'numero_colli'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasporto
     */
    'descrizione'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasporto
     */
    'unita_misura_peso'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DatiTrasporto
     */
    'peso_lordo'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DatiTrasporto
     */
    'peso_netto'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasporto
     */
    'data_ora_ritiro'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasporto
     */
    'data_inizio_trasporto'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasporto
     */
    'tipo_resa'?: string | null;
    /**
     * 
     * @type {IndirizzoResa}
     * @memberof DatiTrasporto
     */
    'indirizzo_resa'?: IndirizzoResa;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasporto
     */
    'data_ora_consegna'?: string | null;
}

