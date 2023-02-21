import { useIntl } from 'react-intl';
import { useMediaQuery } from '@mantine/hooks';
import { TbLayoutSidebarRight } from 'react-icons/tb';
import { Indicator, useMantineTheme } from '@mantine/core';

import { Control } from 'src/components/UI';
import { useShellPlayer, useShellSidebar } from 'src/store/shell/hooks';

export function ShellOptions() {
  const intl = useIntl();
  const theme = useMantineTheme();

  const player = useShellPlayer();
  const sidebar = useShellSidebar();

  const lg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);
  const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <>
      {lg && (
        <Indicator
          disabled={!player.status.ready}
          position={sm ? 'top-center' : 'middle-end'}
          color={theme.other.variable(
            theme,
            player.status.playing ? 'colorPrimary' : 'colorPlaceholder'
          )}
        >
          <Control
            icon={TbLayoutSidebarRight}
            active={sidebar.state.visible}
            onClick={() => sidebar.actions.toggle()}
            {...(!md && { title: intl.formatMessage({ id: 'ui.playingNow' }) })}
          />
        </Indicator>
      )}
    </>
  );
}
