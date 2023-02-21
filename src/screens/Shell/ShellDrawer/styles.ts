import { createStyles } from '@mantine/core';

import { DEFAULTS } from 'src/constants';

import type { GroupedTransitionProps } from '@mantine/core';

export const useStyles = createStyles((theme, { top }: { top: number }) => ({
  drawer: {
    position: 'absolute',
    top,
    zIndex: 9998,
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    willChange: 'auto',
    ...theme.other.backdrop(theme),

    [theme.fn.smallerThan('sm')]: {
      height: 'calc(100vh - 65px)',
    },
  },
  closer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
    color: theme.other.variable(theme, 'colorPlaceholder'),

    '&:hover': {
      color: theme.other.variable(theme, 'colorPrimary'),
    },

    [theme.fn.smallerThan('sm')]: {
      height: '40%',
    },
  },
  container: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '70%',
    willChange: 'auto',
    backgroundColor: theme.other.variable(theme, 'colorBg'),
    overflow: 'auto',

    [theme.fn.smallerThan('sm')]: {
      height: '60%',
    },
  },
}));

export const transitions: GroupedTransitionProps['transitions'] = {
  drawer: {
    duration: DEFAULTS.DURATION / 2,
    transition: 'fade',
    timingFunction: 'ease',
  },
  container: {
    duration: DEFAULTS.DURATION,
    transition: 'slide-up',
  },
};
