import type { CSSObject, ColorScheme, MantineTheme } from '@mantine/core';

export type SchemeVariable = Record<ColorScheme, (theme: MantineTheme) => any>;

export interface ThemeComponent<Props, Styles extends string, Params> {
  defaultProps?: Props;
  styles?: (
    theme: MantineTheme,
    params: Params
  ) => Partial<Record<Styles, CSSObject>>;
}
