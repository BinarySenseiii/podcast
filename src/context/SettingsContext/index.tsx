import { useState, useEffect, useCallback, createContext } from 'react';
import { set, noop, sample } from 'lodash';
import { useLocalStorage } from '@mantine/hooks';

import type { ReactNode } from 'react';

import type { SettingsState } from 'src/store/settings/types';

const defaultValue: SettingsState = {
  locale: { country: '' },
  appearance: { scheme: 'dark' },
};

export const settingsContext = createContext<{
  loading: boolean;
  values: SettingsState;
  setValues: (path: string, value: any) => void;
}>({
  loading: true,
  values: defaultValue,
  setValues: noop,
});

const { Provider } = settingsContext;

export function SettingsContext({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [storage, setStorage] = useLocalStorage<SettingsState>({
    key: 'PLAYCAST/SETTINGS',
    defaultValue,
  });

  const setValues = useCallback((path: string, value: any) => {
    setStorage((prev) => set(structuredClone(prev), path, value));
  }, []);

  useEffect(() => {
    // TODO: update logic
    const country = Intl.DateTimeFormat()
      .resolvedOptions()
      .locale.split('-')[1]
      .toLowerCase();

    const id = setTimeout(() => {
      setStorage((prev) =>
        prev.locale.country
          ? prev
          : set(structuredClone(prev), 'locale.country', country)
      );

      setLoading(false);
    }, sample([500, 1000, 1500]));

    return () => clearTimeout(id);
  }, []);

  return (
    <Provider value={{ loading, values: storage, setValues }}>
      {children}
    </Provider>
  );
}
