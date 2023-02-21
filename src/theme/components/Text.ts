import type { TextProps, TextStylesParams } from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Text: ThemeComponent<TextProps, '', TextStylesParams> = {
  defaultProps: {
    size: 'sm',
  },
};
