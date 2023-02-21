import type { CSSObject, MantineTheme } from '@mantine/core';

import * as variables from 'src/theme/variables';

type SchemeVariable = keyof typeof variables;

declare module '@mantine/core' {
  interface MantineThemeOther {
    border: (theme: MantineTheme) => string;
    backdrop: (theme: MantineTheme) => CSSObject;
    variable: (theme: MantineTheme, variable: SchemeVariable) => any;
  }
}
