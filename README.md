# Work In Progress - Onfido Node.js Library

:warning: **Under development**

The official Node.js library for integrating with the Onfido API.

Documentation can be found at <https://documentation.onfido.com>

This library is only for use on the backend, as it uses Onfido API tokens which must be kept secret. If you do need to collect applicant data in the frontend of your application, we recommend that you use one of [the Onfido SDKs](https://developers.onfido.com/sdks/).

## Installation

For npm:

```sh
npm install @onfido/api
```

For Yarn:

```sh
yarn add @onfido/api
```

## Getting Started

Require the package:

```js
const { Onfido, Region } = require("@onfido/api");
```

For TypeScript users, types are available as well:

```ts
import { Onfido, Region, Applicant, OnfidoApiError } from "@onfido/api";
```

Configure with you API token, and region if necessary:

```js
const onfido = new Onfido({
  apiToken: process.env.ONFIDO_API_TOKEN
  // Defaults to EU region (api.onfido.com)
  // region: Region.US
});
```

Using with `async`/`await` (in an `async function`):

```js
try {
  const applicant = await onfido.applicant.create({
    firstName: "Jane",
    lastName: "Doe"
  });

  const check = await onfido.check.create({
    applicantId: applicant.id,
    reportNames: ["identity_enhanced"]
  });

  return check;
} catch (error) {
  if (error instanceof OnfidoApiError) {
    // An error response was received from the Onfido API, extra info is available.
    console.log(error.message);
    console.log(error.type);
    console.log(error.isClientError());
  } else {
    // No response was received for some reason e.g. a network error.
    console.log(error.message);
  }
}
```

Using with promises:

```js
onfido.applicant
  .create({
    firstName: "Jane",
    lastName: "Doe"
  })
  .then(applicant =>
    onfido.check.create({
      applicantId: applicant.id,
      reportNames: ["identity_enhanced"]
    })
  )
  .then(check =>
    // Handle successfully created check.
  )
  .catch(error => {
    // Handle error.
  });
```
