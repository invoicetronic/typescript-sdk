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
import type { SendReduced } from './send-reduced';

/**
 * 
 * @export
 * @interface Update
 */
export interface Update {
    /**
     * Unique identifier. Leave it at 0 for new records as it will be set automatically.
     * @type {number}
     * @memberof Update
     */
    'id'?: number;
    /**
     * Creation date. It is set automatically.
     * @type {string}
     * @memberof Update
     */
    'created'?: string;
    /**
     * Row version, for optimistic concurrency. It is set automatically.
     * @type {number}
     * @memberof Update
     */
    'version'?: number;
    /**
     * User id.
     * @type {number}
     * @memberof Update
     */
    'user_id'?: number;
    /**
     * Company id.
     * @type {number}
     * @memberof Update
     */
    'company_id'?: number;
    /**
     * Send id. This is the id of the sent invoice to which this update refers to.
     * @type {number}
     * @memberof Update
     */
    'send_id'?: number;
    /**
     * Last update from SDI.
     * @type {string}
     * @memberof Update
     */
    'last_update'?: string;
    /**
     * State of the document. Theses are the possible values, as per the SDI documentation:
     * @type {string}
     * @memberof Update
     */
    'state'?: UpdateStateEnum;
    /**
     * Description for the state.
     * @type {string}
     * @memberof Update
     */
    'description'?: string | null;
    /**
     * SDI message id.
     * @type {string}
     * @memberof Update
     */
    'message_id'?: string | null;
    /**
     * SDI errors, if any.
     * @type {Array<Error>}
     * @memberof Update
     */
    'errors'?: Array<Error> | null;
    /**
     * Wether the item has been read at least once.
     * @type {boolean}
     * @memberof Update
     */
    'is_read'?: boolean;
    /**
     * 
     * @type {SendReduced}
     * @memberof Update
     */
    'send'?: SendReduced;
}

export const UpdateStateEnum = {
    Inviato: 'Inviato',
    Consegnato: 'Consegnato',
    NonConsegnato: 'NonConsegnato',
    Scartato: 'Scartato',
    AccettatoDalDestinatario: 'AccettatoDalDestinatario',
    RifiutatoDalDestinatario: 'RifiutatoDalDestinatario',
    ImpossibilitaDiRecapito: 'ImpossibilitaDiRecapito',
    DecorrenzaTermini: 'DecorrenzaTermini',
    AttestazioneTrasmissioneFattura: 'AttestazioneTrasmissioneFattura'
} as const;

export type UpdateStateEnum = typeof UpdateStateEnum[keyof typeof UpdateStateEnum];


