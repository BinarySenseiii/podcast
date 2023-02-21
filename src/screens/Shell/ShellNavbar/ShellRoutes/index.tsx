import { useMemo } from 'react';
import { entries } from 'lodash';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { TbSearch, TbSettings, TbPlaylist, TbLayoutGrid } from 'react-icons/tb';

import { ROUTE } from 'src/constants';

import { Control } from 'src/components/UI';

const ROUTES = {
  [ROUTE.SEARCH.ROOT]: TbSearch,
  [ROUTE.EXPLORE.ROOT]: TbLayoutGrid,
  [ROUTE.PLAYLISTS.ROOT]: TbPlaylist,
  [ROUTE.SETTINGS.ROOT]: TbSettings,
};

export function ShellRoutes() {
  const intl = useIntl();
  const router = useRouter();
  const theme = useMantineTheme();

  const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);

  const routes = useMemo(
    () =>
      entries(ROUTES).map(([route, icon]) => ({
        icon,
        onClick: () => router.push(route),
        active: router.pathname.includes(route),
        title: intl.formatMessage({ id: `ui.${route.replace('/', '')}` }),
      })),
    [router.pathname]
  );

  return (
    <>
      {routes.map(({ icon, title, active, onClick }) => (
        <Control
          key={title}
          icon={icon}
          active={active}
          onClick={onClick}
          {...(!md && { title })}
        />
      ))}
    </>
  );
}
