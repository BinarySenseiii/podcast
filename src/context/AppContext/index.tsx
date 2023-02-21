import Head from 'next/head';
import { Center, Loader } from '@mantine/core';

import type { ReactNode } from 'react';

import { Shell } from 'src/screens/Shell';
import { useSettings } from 'src/store/settings/hooks';

export function AppProvider({ children }: { children: ReactNode }) {
  const settings = useSettings();

  const loader = (
    <Center sx={{ height: '100vh' }}>
      <Loader />
    </Center>
  );

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <Shell>{settings.loading ? loader : children}</Shell>
    </>
  );
}
