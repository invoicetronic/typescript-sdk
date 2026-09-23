# TypeScript SDK for the Invoicetronic API

The [Invoicetronic API][2] is a RESTful service that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed to be simple and easy to use, abstracting away SDI complexity while providing complete control over the invoice send/receive process. It provides advanced features as encryption at rest, multi-language pre-flight invoice validation, multiple upload formats, webhooks, event logging, client SDKs, and CLI tools.

For more information, see  [Invoicetronic website][2]

## Before you start

For the full integration guide, tutorials, SDKs and quickstarts, see the **[Documentation](https://invoicetronic.com/en/docs/)**. A few cross-cutting topics worth knowing before integrating:

- **[Prerequisites](https://invoicetronic.com/en/docs/prerequisites/)** — what you need to start in Sandbox and what's required to move to production.
- **[API Keys](https://invoicetronic.com/en/docs/apikeys/)** — how `ik_live_` and `ik_test_` keys select the environment.
- **[Sandbox](https://invoicetronic.com/en/docs/sandbox/)** — free test environment that mirrors the live workflow, with no credits consumed.
- **[Rate Limiting](https://invoicetronic.com/en/docs/ratelimiting/)** — per-second, per-minute and per-day limits; how to handle `429 Too Many Requests`.
- **[Pagination](https://invoicetronic.com/en/docs/pagination/)** — `page` and `page_size` parameters and the `Invoicetronic-Total-Count` response header.
- **[CORS](https://invoicetronic.com/en/docs/cors/)** — calling the API from the browser; allowed origins are configured per key.
- **[Webhooks](https://invoicetronic.com/en/docs/webhooks/)** — real-time event notifications with HMAC-SHA256 signature validation.
- **[Localization](https://invoicetronic.com/en/docs/accept-language/)** — use the `Accept-Language` header to receive error messages in Italian, English or German.

[1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/
[2]: https://invoicetronic.com/


## @invoicetronic/ts-sdk@1.11

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @invoicetronic/ts-sdk@1.11 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```
