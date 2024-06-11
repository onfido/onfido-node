# Onfido Node.js Library

The official Node.js library for integrating with the Onfido API.

Documentation can be found at <https://documentation.onfido.com>.

This library is only for use on the backend, as it uses Onfido API tokens which must be kept secret. If you do need to collect applicant data in the frontend of your application, we recommend that you use the Onfido SDKs: [iOS](https://github.com/onfido/onfido-ios-sdk), [Android](https://github.com/onfido/onfido-android-sdk), [Web](https://github.com/onfido/onfido-sdk-ui), and [React Native](https://github.com/onfido/react-native-sdk).

This version uses Onfido API v3.6. Refer to our [API versioning guide](https://developers.onfido.com/guide/api-versioning-policy#client-libraries) for details of which client library versions use which versions of the API.

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
    region: Region.EU, // Supports Region.EU, Region.US and Region.CA
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

File downloads, for example `onfido.downloadDocument(documentId, {responseType: 'arraybuffer'})`, will return an instance of a specific object for this endpoint.

These objects will have a content type, e.g. `image/png`.

```js
download.headers["content-type"];
```

Call `slice()` to get a `Blob` of the download:

```js
const blob = download.data.slice();
```

### File upload

For some common types of streams, like instances of `fs.ReadStream`, you can provide the stream directly:

```js
onfido.uploadDocument(
  "passport",
  "<APPLICANT_ID>",
  fs.createReadStream("path/to/passport.png")
);
```

### Webhook event verification

Webhook events payload needs to be verified before it can be accessed. Library allows to easily decode the payload and verify its signature before returning it as an object for user convenience:

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

## Contributing

This library is automatically generated using [OpenAPI Generator](https://openapi-generator.tech) - version: 7.6.0; therefore all the contributions, except tests files, should target [Onfido OpenAPI specification repository](https://github.com/onfido/onfido-openapi-spec/tree/master) instead of this repository.

For contributions to the tests instead, please follow the steps below:

1. [Fork](https://github.com/onfido/onfido-node/fork) repository
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create a new Pull Request

## More documentation

More documentation and code examples can be found at <https://documentation.onfido.com>.

## Support

Should you encounter any technical issues during integration, please contact Onfido's Customer Support team
via the [Customer Experience Portal](https://public.support.onfido.com/) which also includes support documentation.
