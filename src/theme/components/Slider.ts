import type {
  SliderProps,
  SliderStylesNames,
  RangeSliderProps,
} from '@mantine/core';

import type { ThemeComponent } from 'src/theme/types';

export const Slider: ThemeComponent<
  SliderProps,
  SliderStylesNames,
  RangeSliderProps
> = {
  styles: (theme) => ({
    thumb: {
      width: 12,
      height: 12,
      border: 'none',
      backgroundColor: theme.other.variable(theme, 'colorPrimary'),
    },
    dragging: {
      width: 16,
      height: 16,
    },
  }),
};
