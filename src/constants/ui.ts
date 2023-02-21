import type { SimpleGridBreakpoint } from '@mantine/core';

import { ENTITY } from './entity';

export const BREAKPOINTS: Record<ENTITY, SimpleGridBreakpoint[]> = {
  [ENTITY.PODCAST]: [
    { minWidth: 'sm', cols: 3, spacing: 'md' },
    { minWidth: 'xs', cols: 3, spacing: 'sm' },
    { maxWidth: 'xs', cols: 2, spacing: 'sm' },
  ],
  [ENTITY.EPISODE]: [
    { minWidth: 'sm', cols: 2, spacing: 'md' },
    { maxWidth: 'sm', cols: 1, spacing: 'sm' },
  ],
};
