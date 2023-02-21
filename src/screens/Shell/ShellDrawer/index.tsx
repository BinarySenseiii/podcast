import { useRef, useEffect } from 'react';
import { get } from 'lodash';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useScrollLock } from '@mantine/hooks';
import { FiChevronDown } from 'react-icons/fi';
import { Box, UnstyledButton, GroupedTransition } from '@mantine/core';

import { DRAWER_REGISTER } from 'src/constants';
import { useShellDrawer } from 'src/store/shell/hooks';

import { useStyles, transitions } from './styles';

export function ShellDrawer() {
  const top = useRef(0);
  const intl = useIntl();
  const router = useRouter();

  const { classes } = useStyles({ top: top.current });
  const { 1: lockScroll } = useScrollLock();

  const { state, actions } = useShellDrawer();

  const Component = get(DRAWER_REGISTER, String(state.name));
  const hasComponent = Boolean(Component);

  useEffect(() => {
    lockScroll(hasComponent);
    top.current = window.scrollY;
  }, [hasComponent]);

  useEffect(() => {
    router.events.on('beforeHistoryChange', actions.close);
    return () => router.events.off('beforeHistoryChange', actions.close);
  }, [router]);

  return (
    <GroupedTransition mounted={hasComponent} transitions={transitions}>
      {(styles) => (
        <Box
          component="article"
          style={styles.drawer}
          className={classes.drawer}
        >
          <UnstyledButton
            onClick={actions.close}
            className={classes.closer}
            aria-label={intl.formatMessage({ id: 'ui.close' })}
          >
            <FiChevronDown size={28} />
          </UnstyledButton>

          <Box style={styles.container} className={classes.container}>
            {hasComponent && <Component {...state.props} />}
          </Box>
        </Box>
      )}
    </GroupedTransition>
  );
}
