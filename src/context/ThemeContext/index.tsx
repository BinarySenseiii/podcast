import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';

import type { ReactNode } from 'react';

import { configureTheme } from 'src/theme';
import { useSettings } from 'src/store/settings/hooks';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const settings = useSettings();
  const colorScheme = settings.values.appearance.scheme;

  useEffect(() => {
    document.documentElement.style.colorScheme = colorScheme;
  }, [colorScheme]);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={configureTheme({ colorScheme })}
    >
      {children}
    </MantineProvider>
  );
}
