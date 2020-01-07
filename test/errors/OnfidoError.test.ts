import { OnfidoError } from "onfido-node";

it("has a message", () => {
  const error = new OnfidoError("the message");
  expect(error.message).toBe("the message");
});
