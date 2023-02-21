import type {
  SegmentedControlProps,
  SegmentedControlStylesNames,
  SegmentedControlStylesParams,
} from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const SegmentedControl: ThemeComponent<
  SegmentedControlProps,
  SegmentedControlStylesNames,
  SegmentedControlStylesParams
> = {
  defaultProps: {
    data: [],
    size: 'md',
    radius: 'md',
    transitionDuration: 0,
  },
  styles: (theme) => ({
    root: {
      backgroundColor: theme.other.variable(theme, 'colorCard'),
    },
    active: {
      borderRadius: 8,
      boxShadow: 'none',
      backgroundColor: theme.other.variable(theme, 'colorBg'),
    },
    label: {
      padding: '8px 14px',
      color: 'inherit !important',
      fontSize: theme.fontSizes.sm,
    },
  }),
};
