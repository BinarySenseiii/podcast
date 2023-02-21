import { get } from 'lodash';

export function filterBy<T extends any[]>(
  array: T,
  keys: string[],
  predicate: (value: any) => boolean
) {
  return (array || []).filter((item) =>
    keys.some((key) => predicate(get(item, key)))
  ) as T;
}
