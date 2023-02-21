import type { AnchorProps } from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Anchor: ThemeComponent<AnchorProps, 'root', {}> = {
  styles: (theme) => ({
    root: {
      color: theme.other.variable(theme, 'colorPrimary'),
    },
  }),
};
