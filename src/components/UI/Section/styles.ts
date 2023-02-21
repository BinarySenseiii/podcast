import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  section: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 9997,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 58,
    paddingBottom: 12,
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    ...theme.other.backdrop(theme),
  },
  content: {
    padding: theme.spacing.lg,

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.sm,
    },
  },
}));
