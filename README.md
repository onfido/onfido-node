# Onfido Node.js Library

The official Node.js library for integrating with the Onfido API.

Documentation can be found at <https://documentation.onfido.com>

This library is only for use on the backend, as it uses Onfido API tokens which must be kept secret. If you do need to collect applicant data in the frontend of your application, we recommend that you use the Onfido SDKs: [iOS](https://github.com/onfido/onfido-ios-sdk), [Android](https://github.com/onfido/onfido-android-sdk), [Web](https://github.com/onfido/onfido-sdk-ui), and [React Native](https://github.com/onfido/react-native-sdk). 

This version uses Onfido API v3.6. Refer to our [API versioning guide](https://developers.onfido.com/guide/api-versioning-policy#client-libraries) for details of which client library versions use which versions of the API.

## Installation

For npm:

```sh
npm install @onfido/api
```

For Yarn:

```sh
yarn add @onfido/api
```

## Getting started

Require the package:

```js
const { Onfido, Region } = require("@onfido/api");
```

For TypeScript users, types are available as well:

```ts
import { Onfido, Region, Applicant, OnfidoApiError } from "@onfido/api";
```

Configure with your API token and region:

```js
const onfido = new Onfido({
  apiToken: process.env.ONFIDO_API_TOKEN,
  // Supports Region.EU, Region.US and Region.CA
  region: Region.EU
});
```

Using with `async`/`await` (in an `async function`):

```js
try {
  const applicant = await onfido.applicant.create({
    firstName: "Jane",
    lastName: "Doe", 
    location: {
      ipAddress: "127.0.0.1",
      countryOfResidence: "GBR"
    }
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
    lastName: "Doe",
    location: {
      ipAddress: "127.0.0.1",
      countryOfResidence: "GBR"
    }
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
  },
  location: {
    ipAddress: "127.0.0.1",
    countryOfResidence: "GBR",
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
  idNumbers: [],
  phoneNumber: null,
  location: {
    ipAddress: "127.0.0.1",
    countryOfResidence: "GBR"
  }
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

## File upload

For some common types of streams, like instances of `fs.ReadStream`, you can provide the stream directly in the `file` property:

```js
onfido.document.upload({
  applicantId: "<APPLICANT_ID>",
  file: fs.createReadStream("path/to/passport.png"),
  type: "passport"
});
```

Alternatively, you may need to provide some extra information, for example when uploading a Base64 encoded image:

```js
const buffer = Buffer.from(base64Data, "base64");
const bufferStream = new PassThrough();
bufferStream.end(buffer);

onfido.document.upload({
  applicantId: "<APPLICANT_ID>",
  file: {
    contents: bufferStream,
    filepath: "image.png",
    contentType: "image/png"
  },
  type: "passport"
});
```

## More documentation

More documentation and code examples can be found at <https://documentation.onfido.com>

## Support

Should you encounter any technical issues during integration, please contact Onfido’s Customer Support team
via [email](mailto:support@onfido.com), including the word ISSUE: at the start of the subject line.

Alternatively, you can search the support documentation available via the customer experience
portal, [public.support.onfido.com](http://public.support.onfido.com).

