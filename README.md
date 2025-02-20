# Onfido Node.js Library

The official Node.js library for integrating with the Onfido API.

Documentation is available at <https://documentation.onfido.com>.

This library is for backend use only, as it requires secret Onfido API tokens and should not be used in the frontend due to security reasons.

If you need to collect applicant data in the frontend of your application, we recommend that you use the Onfido SDKs:

- [iOS](https://github.com/onfido/onfido-ios-sdk)
- [Android](https://github.com/onfido/onfido-android-sdk)
- [Web](https://github.com/onfido/onfido-sdk-ui)
- [React Native](https://github.com/onfido/react-native-sdk)

This version uses Onfido API v3.6. Refer to our [API versioning guide](https://developers.onfido.com/guide/api-versioning-policy#client-libraries) for details of which client library versions use which versions of the API.

[![npm version](https://badge.fury.io/js/@onfido%2Fapi.svg)](https://badge.fury.io/js/@onfido%2Fapi)
![Build Status](https://github.com/onfido/onfido-node/actions/workflows/node.yml/badge.svg)

## Installation & Usage

### Installation

#### Npm

```sh
npm install @onfido/api
```

#### Yarn

```sh
yarn add @onfido/api
```

## Getting Started

Require the package:

```js
const {
  DefaultApi,
  Configuration,
  WebhookEventVerifier
} = require("@onfido/api");
const { isAxiosError } = require("axios");
```

For TypeScript users, types are available as well:

```ts
import {
  DefaultApi,
  Configuration,
  Region,
  WebhookEventVerifier
} from "@onfido/api";
import { isAxiosError } from "axios";
```

Configure with your API token and region:

```js
const onfido = new DefaultApi(
  new Configuration({
    apiToken: process.env.ONFIDO_API_TOKEN,
    region: Region.EU, // Supports Region.EU (Europe), Region.US (United States), and Region.CA (Canada)
    baseOptions: { timeout: 60_000 } // Additional Axios options (timeout, etc.)
  })
);
```

NB: by default, timeout is set to 30 seconds.

### Making a call to the API

Using `async`/`await` (in an `async function`):

```js
(async () => {
  try {
    const applicant = await onfido.createApplicant({
      first_name: "Jane",
      last_name: "Doe",
      location: {
        ip_address: "127.0.0.1",
        country_of_residence: "GBR"
      }
    });

    // ...
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(`status code: ${error.response?.status}`);
      const error_details = error.response?.data.error;
      // An error response was received from the Onfido API, extra info is available.
      if (error_details) {
        console.log(error_details.message);
        console.log(error_details.type);
      } else {
        // No response was received for some reason e.g. a network error.
        console.log(error.message);
      }
    } else {
      console.log(error.message);
    }
  }
})();
```

Please find more information regarding Axios errors in library [documentation](https://axios-http.com/docs/handling_errors).

Using promises:

```js
onfido
  .createApplicant({
    first_name: "Jane",
    last_name: "Doe",
    location: {
      ip_address: "127.0.0.1",
      country_of_residence: "GBR"
    }
  })
  .then(applicant =>
    onfido.createCheck({
      applicant_id: applicant.data.id,
      report_names: ["identity_enhanced"]
    })
  )
  .then(check =>
    // Handle successfully created check.
  )
  .catch(error => {
    // Handle error.
  });
```

### File download

File downloads, for example `onfido.downloadDocument(documentId)`, will return an instance of a `FileTransfer` object.

This object will have a content type, e.g. `image/png`.

```js
download.headers["content-type"];
```

Call `slice()` to get a `Buffer` of the download:

```js
const blob = download.data.slice();
```

### File upload

File upload should make use of the provided `FileTransfer` class, e.g.:

```js
onfido.uploadDocument(
  "passport",
  "<APPLICANT_ID>",
  new FileTransfer(Buffer.from(document.buffer), document.filename)
);
```

`FileTransfer` object can also be created from an existing file, e.g. `new FileTransfer("path/to/passport.png")`.

### Webhook event verification

Webhook events payload needs to be verified before it can be accessed. Verifying webhook payloads is crucial for security reasons, as it ensures that the payloads are indeed from Onfido and have not been tampered with. The library allows you to easily decode the payload and verify its signature before returning it as an object for user convenience:

```js
(async () => {
  try {
    const token = process.env.ONFIDO_WEBHOOK_SECRET_TOKEN;
    const verifier = new WebhookEventVerifier(token);
    const signature = "a0...760e";

    const event = verifier.readPayload(`{"payload":{"r...3"}}`, signature);
  } catch (e) {
    if (e instanceof OnfidoInvalidSignatureError) {
      // Invalid webhook signature
    }
  }
})();
```

### Recommendations

#### Do not use square bracket syntax

Except for accessing Task object's outputs, avoid using the square bracket syntax (i.e. `[]`) to access undefined properties to prevent breaking changes when these fields appear.

## Contributing

This library is automatically generated using [OpenAPI Generator](https://openapi-generator.tech) (version: 7.11.0); therefore, all contributions (except test files) should target the [Onfido OpenAPI specification repository](https://github.com/onfido/onfido-openapi-spec/tree/master) instead of this repository. Please follow the contribution guidelines provided in the OpenAPI specification repository.

For contributions to the tests instead, please follow the steps below:

1. Fork the [repository](https://github.com/onfido/onfido-node/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add detailed description of the feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create a new Pull Request

## Versioning policy

Versioning helps manage changes and ensures compatibility across different versions of the library.

[Semantic Versioning](https://semver.org) policy is used for library versioning, following the guidelines and limitations outlined below:

- MAJOR versions (x.0.0) may:
  - target a new API version
  - include non-backward compatible change
- MINOR versions (0.x.0) may:
  - add a new functionality, non-mandatory parameter or property
  - deprecate an old functionality
  - include non-backward compatible change to a functionality which is:
    - labelled as alpha or beta
    - completely broken and not usable
- PATCH version (0.0.x) will:
  - fix a bug
  - include backward compatible changes only

## More documentation

Additional documentation and code examples can be found at <https://documentation.onfido.com>.

## Support

Should you encounter any technical issues during integration, please contact Onfido's Customer Support team via the [Customer Experience Portal](https://public.support.onfido.com/) which also includes support documentation.
