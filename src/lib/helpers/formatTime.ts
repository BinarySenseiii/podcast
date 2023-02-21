import humanizeDuration from 'humanize-duration';

import type { Options } from 'humanize-duration';

export function humanizeTime(time: string | number | null, options?: Options) {
  if (!time) return null;

  const [s = 0, m = 0, h = 0] = String(time).split(':').map(Number).reverse();
  const ms = String(time).endsWith('000') ? s : (s + m * 60 + h * 3600) * 1000;

  return humanizeDuration(ms, {
    round: true,
    delimiter: ' ',
    units: ['h', 'm'],
    fallbacks: ['en'],
    ...options,
  });
}

export function specifyTime(time: string | number) {
  const value = Math.round(Number(time));

  const [s = 0, m = 0, h = 0] = String(value).split(':').map(Number).reverse();
  const sec = String(value).endsWith('000') ? s / 1000 : s + m * 60 + h * 3600;

  return [
    Math.floor(sec / 3600),
    Math.floor((sec % 3600) / 60),
    Math.round(sec % 60),
  ]
    .map((n) => String(n).padStart(2, '0'))
    .join(':');
}
