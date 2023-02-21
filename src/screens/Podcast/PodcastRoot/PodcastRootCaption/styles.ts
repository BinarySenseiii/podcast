import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  caption: {
    padding: theme.spacing.md,
  },
  more: {
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.other.variable(theme, 'colorCardAccent'),
    },

    '&:focus': {
      ...theme.fn.focusStyles(),
    },
  },
  title: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
  value: {
    fontWeight: 600,
  },
}));
