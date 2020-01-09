import {
  convertObjectToCamelCase,
  convertObjectToSnakeCase,
  toFormData
} from "../src/formatting";

describe("convertObjectToSnakeCase", () => {
  it("converts keys to snake_case, even if nested", () => {
    expect(
      convertObjectToSnakeCase({
        keyName: { nestedKey: 2 },
        a: [{ nestedInArray: 1 }]
      })
    ).toEqual({ key_name: { nested_key: 2 }, a: [{ nested_in_array: 1 }] });
  });
});

describe("convertObjectToCamelCase", () => {
  it("converts keys to camelCase, even if nested", () => {
    expect(
      convertObjectToCamelCase({
        key_name: { nested_key: 2 },
        a: [{ nested_in_array: 1 }]
      })
    ).toEqual({ keyName: { nestedKey: 2 }, a: [{ nestedInArray: 1 }] });
  });
});

describe("toFormData", () => {
  it("omits undefined and null values", () => {
    expect(() => toFormData({ a: null, b: undefined })).not.toThrow();
  });
});
