import { OnfidoApiError } from "onfido-node";

it("extracts the type, message and fields", () => {
  const error = OnfidoApiError.fromResponse(
    {
      error: {
        type: "the_type",
        message: "the message",
        fields: {
          field: "error"
        }
      }
    },
    500
  );

  expect(error.type).toBe("the_type");
  expect(error.message).toBe(
    'the message (status code 500) | {"field":"error"}'
  );
  expect(error.fields).toEqual({ field: "error" });
});

it("has the original response body and status code", () => {
  const error = OnfidoApiError.fromResponse("Not Found", 404);
  expect(error.responseBody).toBe("Not Found");
  expect(error.statusCode).toBe(404);
});

it("handles response not having an error object", () => {
  const error = OnfidoApiError.fromResponse("Unknown error", 500);
  expect(error.type).toBe("unknown");
  expect(error.message).toBe("Unknown error (status code 500)");
  expect(error.fields).toBeUndefined();
});

it("indicates whether it was a client error", () => {
  expect(OnfidoApiError.fromResponse("", 422).isClientError()).toBe(true);
  expect(OnfidoApiError.fromResponse("", 500).isClientError()).toBe(false);
});
