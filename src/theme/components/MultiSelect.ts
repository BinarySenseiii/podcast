import type {
  MultiSelectProps,
  MultiSelectStylesNames,
  MultiSelectStylesParams,
} from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const MultiSelect: ThemeComponent<
  MultiSelectProps,
  MultiSelectStylesNames,
  MultiSelectStylesParams
> = {
  defaultProps: {
    data: [],
    size: 'md',
    radius: 'md',
    maxDropdownHeight: 202.5,
  },
  styles: (theme) => ({
    input: {
      minHeight: 42,
    },
    searchInput: {
      fontSize: theme.fontSizes.sm,
      fontFamily: 'inherit',
    },
    value: {
      margin: 5,
      borderRadius: 7,
      backgroundColor: theme.other.variable(theme, 'colorBg'),
    },
    dropdown: {
      border: 'none',
      borderRadius: theme.radius.md,
      backgroundColor: theme.other.variable(theme, 'colorCard'),
      boxShadow: 'none',
    },
    item: {
      borderRadius: 8,
      fontSize: theme.fontSizes.sm,

      '&:hover': {
        backgroundColor: theme.other.variable(theme, 'colorBg'),
      },
    },
  }),
};
