export type SimpleObject = { [key: string]: unknown };

const deepMapObjectKeys = (value: unknown, f: (key: string) => string): any => {
  if (!(value instanceof Object)) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map(item => deepMapObjectKeys(item, f));
  } else {
    const acc: SimpleObject = {};
    Object.keys(value).forEach(key => {
      acc[f(key)] = deepMapObjectKeys((value as SimpleObject)[key], f);
    });
    return acc;
  }
};

export const formatRequest = (requestBody: unknown): unknown => {
  // Convert to JSON and back first to simplify.
  requestBody = JSON.parse(JSON.stringify(requestBody));

  return deepMapObjectKeys(requestBody, key =>
    key.replace(/[A-Z]/g, char => `_${char.toLowerCase()}`)
  );
};

export const formatResponse = (responseBody: SimpleObject): SimpleObject =>
  deepMapObjectKeys(responseBody, key =>
    key.replace(/_[a-z]/g, underscoreChar => underscoreChar[1].toUpperCase())
  );

export const toQueryString = (object: {
  [key: string]: string | number | boolean | null | undefined;
}): string => {
  const queryString = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}=${encodeURIComponent(value!)}`)
    .join("&");

  return queryString === "" ? "" : `?${queryString}`;
};
