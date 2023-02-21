import { useState } from 'react';
import { IntlProvider } from 'react-intl';

import type { ReactNode } from 'react';

import en from 'src/translations/en.json';

const messages = { en };

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale] = useState<keyof typeof messages>('en');

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      onError={() => null}
    >
      {children}
    </IntlProvider>
  );
}
