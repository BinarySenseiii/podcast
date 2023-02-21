import { Box } from '@mantine/core';

import type { ReactNode } from 'react';

import { useShellSidebar } from 'src/store/shell/hooks';

import { ShellDrawer } from './ShellDrawer';
import { ShellNavbar } from './ShellNavbar';
import { ShellSidebar } from './ShellSidebar';

import { useStyles } from './styles';

export function Shell({ children }: { children: ReactNode }) {
  const { cx, classes } = useStyles();

  const sidebar = useShellSidebar(({ state }) => state);

  return (
    <Box className={classes.shell}>
      <Box component="nav" className={cx(classes.bar, classes.navbar)}>
        <ShellNavbar />
      </Box>

      <Box component="main" className={classes.content}>
        {children}

        <ShellDrawer />
      </Box>

      <Box
        component="aside"
        className={cx(classes.bar, classes.sidebar, {
          [classes.visible]: sidebar.visible,
          [classes.invisible]: !sidebar.visible,
        })}
      >
        <ShellSidebar />
      </Box>
    </Box>
  );
}
