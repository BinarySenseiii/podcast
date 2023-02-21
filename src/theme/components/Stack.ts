import type { StackProps, StackStylesParams } from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Stack: ThemeComponent<StackProps, '', StackStylesParams> = {
  defaultProps: {
    spacing: 'xs',
  },
};
