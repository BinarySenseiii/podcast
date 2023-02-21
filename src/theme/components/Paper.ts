import type { PaperProps, PaperStylesParams } from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Paper: ThemeComponent<PaperProps, 'root', PaperStylesParams> = {
  styles: (theme) => ({
    root: {
      all: 'unset',
      borderRadius: 14,
      backgroundColor: theme.other.variable(theme, 'colorCard'),
    },
  }),
};
