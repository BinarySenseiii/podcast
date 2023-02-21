import { get, isObject } from 'lodash';

export function overrideBy<T>(
  data: Record<string, any>,
  schema: Record<string, any>
): T {
  return Object.entries(schema).reduce(
    (acc, [key, path]) => ({
      ...acc,
      [key]: isObject(get(schema, key))
        ? overrideBy(data, get(schema, key))
        : get(data, path, null),
    }),
    {} as T
  );
}
