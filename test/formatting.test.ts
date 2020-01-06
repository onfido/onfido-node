import {
  convertObjectToCamelCase,
  convertObjectToSnakeCase
} from "../src/formatting";

describe("formatRequest", () => {
  it("converts keys to snake_case, even if nested", () => {
    expect(
      convertObjectToSnakeCase({
        keyName: { nestedKey: 2 },
        a: [{ nestedInArray: 1 }]
      })
    ).toEqual({ key_name: { nested_key: 2 }, a: [{ nested_in_array: 1 }] });
  });
});

describe("formatResponse", () => {
  it("converts keys to camelCase, even if nested", () => {
    expect(
      convertObjectToCamelCase({
        key_name: { nested_key: 2 },
        a: [{ nested_in_array: 1 }]
      })
    ).toEqual({ keyName: { nestedKey: 2 }, a: [{ nestedInArray: 1 }] });
  });
});
