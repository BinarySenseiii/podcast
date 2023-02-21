import type {
  InputProps,
  InputStylesNames,
  InputStylesParams,
} from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Input: ThemeComponent<
  InputProps,
  InputStylesNames,
  InputStylesParams
> = {
  defaultProps: {
    size: 'sm',
    radius: 'md',
    variant: 'filled',
  },
  styles: (theme) => ({
    input: {
      minHeight: 41,
      border: 'none',
      backgroundColor: theme.other.variable(theme, 'colorCard'),

      '&:focus': {
        ...theme.fn.focusStyles(),
      },
    },
  }),
};
