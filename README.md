# Onfido Node.js Library

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

Configure with your API token, and region if necessary:

```js
const onfido = new Onfido({
  apiToken: process.env.ONFIDO_API_TOKEN
  // Defaults to Region.EU (api.onfido.com), supports Region.US and Region.CA
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

## Response format

Most responses will be normal JavaScript objects. Property names will be in camelCase rather than snake_case, including property names in nested objects.

```js
const applicant = await onfido.applicant.create({
  firstName: "Jane",
  lastName: "Doe",
  address: {
    flatNumber: "12",
    postcode: "S2 2DF",
    country: "GBR",
  }
});

console.log(applicant);
{
  id: "<APPLICANT_ID>",
  createdAt: "2020-01-22T10:44:01Z",
  firstName: "Jane",
  lastName: "Doe",
  email: null,
  dob: null,
  deleteAt: null,
  href: "/v3/applicants/<APPLICANT_ID>",
  address: {
    flatNumber: "12",
    buildingNumber: null,
    buildingName: null,
    street: null,
    subStreet: null,
    town: null,
    state: null,
    postcode: "S2 2DF",
    country: "GBR",
    line1: null,
    line2: null,
    line3: null
  },
  idNumbers: []
}
```

File downloads, for example `onfido.document.download(documentId)`, will return instances of `OnfidoDownload`.

These objects will have a content type, e.g. `image/png`.

```js
download.contentType;
```

Call `asStream()` to get a `Readable` stream of the download. You can read more about [`Readable` streams](https://nodejs.org/api/stream.html#stream_readable_streams).

```js
const readableStream = download.asStream();
```

## More Documentation

More documentation and code examples can be found at <https://documentation.onfido.com>
