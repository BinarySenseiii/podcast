import { get, isNull, mapValues } from 'lodash';

import type { Image } from 'src/store/podcasts/types';

export function mergeImage(left: Image, right: Image) {
  return mapValues(left, (leftValue, key) => {
    const rightValue = get(right, key);
    return isNull(rightValue) ? leftValue : rightValue;
  });
}
