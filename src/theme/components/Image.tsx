import type {
  ImageProps,
  ImageStylesNames,
  ImageStylesParams,
} from '@mantine/core';

import { Logo } from 'src/components/UI';

import type { ThemeComponent } from 'src/theme/types';

export const Image: ThemeComponent<
  ImageProps,
  ImageStylesNames,
  ImageStylesParams
> = {
  defaultProps: {
    withPlaceholder: true,
    placeholder: <Logo short />,
  },
  styles: (theme) => ({
    figure: {
      width: '100%',
      height: '100%',
    },
    imageWrapper: {
      width: '100%',
      height: '100%',
    },
    image: {
      height: '100%',
    },
    placeholder: {
      backgroundColor: theme.other.variable(theme, 'colorBg'),
    },
  }),
};
