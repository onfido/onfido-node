import FormData from "form-data";
import { Readable } from "stream";

export type SimpleObject = { [key: string]: unknown };

type ContentsAndOptions = {
  contents: Readable;
  knownLength?: number;
  filename?: string;
  filepath?: string;
  contentType?: string;
};

export type FileLike = Readable | ContentsAndOptions;

const snakeCase = (s: string): string =>
  s.replace(/[A-Z]/g, char => `_${char.toLowerCase()}`);

const camelCase = (s: string): string =>
  s.replace(/_[a-z]/g, underscoreChar => underscoreChar[1].toUpperCase());

const deepMapObjectKeys = (value: unknown, f: (key: string) => string): any => {
  if (!(value instanceof Object)) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map(item => deepMapObjectKeys(item, f));
  } else {
    return Object.keys(value).reduce<SimpleObject>((acc, key) => {
      acc[f(key)] = deepMapObjectKeys((value as SimpleObject)[key], f);
      return acc;
    }, {});
  }
};

export const convertObjectToSnakeCase = (requestBody: unknown): unknown => {
  // Converting to JSON and back first handles things like dates, circular references etc.
  requestBody = JSON.parse(JSON.stringify(requestBody));

  return deepMapObjectKeys(requestBody, snakeCase);
};

export const convertObjectToCamelCase = (
  responseBody: SimpleObject
): SimpleObject => deepMapObjectKeys(responseBody, camelCase);

export const toFormData = (object: SimpleObject): FormData => {
  return Object.entries(object).reduce((formData, [key, value]) => {
    if (value instanceof Object && "contents" in value) {
      const { contents, ...options } = value as ContentsAndOptions;
      formData.append(snakeCase(key), contents, options);
    } else if (value !== undefined && value !== null) {
      formData.append(snakeCase(key), value);
    }
    return formData;
  }, new FormData());
};
