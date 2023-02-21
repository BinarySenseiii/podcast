import type { ColorScheme } from '@mantine/core';

export interface SettingsAppearanceState {
  scheme: ColorScheme;
}

export interface SettingsLocaleState {
  country: string;
}

export interface SettingsState {
  locale: SettingsLocaleState;
  appearance: SettingsAppearanceState;
}
