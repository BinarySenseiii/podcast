import { useContext } from 'react';

import { settingsContext } from 'src/context';

export function useSettings() {
  return useContext(settingsContext);
}
