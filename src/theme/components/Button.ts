import type {
  ButtonProps,
  ButtonStylesNames,
  ButtonStylesParams,
} from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Button: ThemeComponent<
  ButtonProps,
  ButtonStylesNames,
  ButtonStylesParams
> = {
  defaultProps: {
    size: 'md',
    radius: 'md',
    variant: 'light',
  },
  styles: (theme, { size, color, variant }) => ({
    ...(variant === 'light' && {
      root: {
        ...(!color && {
          color: theme.other.variable(theme, 'colorPrimary'),
        }),
        ...(size === 'md' && {
          height: 41,
          fontSize: theme.fontSizes.sm,
        }),

        '&:focus': {
          ...theme.fn.focusStyles(),
        },

        '&:disabled': {
          color: theme.other.variable(theme, 'colorPlaceholder'),
          backgroundColor: theme.other.variable(theme, 'colorCardDisabled'),
          pointerEvents: 'auto',
        },
      },
    }),
  }),
};
