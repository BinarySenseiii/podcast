import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useMediaQuery } from '@mantine/hooks';
import { Stack, Title, useMantineTheme } from '@mantine/core';

import { Section } from 'src/components/UI';
import { useShellSidebar } from 'src/store/shell/hooks';

import { ShellPlayer } from './ShellPlayer';
import { ShellPlaylist } from './ShellPlaylist';

export function ShellSidebar() {
  const intl = useIntl();
  const theme = useMantineTheme();
  const sidebar = useShellSidebar(({ actions }) => actions);

  const lg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);

  useEffect(() => {
    sidebar.toggle(!lg);
  }, [lg]);

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{intl.formatMessage({ id: 'ui.playingNow' })}</Title>
      </Section.Header>

      <Section.Content>
        <Stack spacing="lg">
          <ShellPlayer />
          <ShellPlaylist />
        </Stack>
      </Section.Content>
    </Section>
  );
}
