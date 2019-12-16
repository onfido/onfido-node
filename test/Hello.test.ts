import { Hello } from "onfido-node/Hello";

it("returns hello world", () => {
  expect(new Hello().world()).toEqual("Hello, world!");
});
