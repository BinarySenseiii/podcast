import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  episode: {
    padding: 6,
    paddingRight: theme.spacing.sm,
    overflow: 'hidden',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.other.variable(theme, 'colorCardAccent'),
    },

    '&:focus': {
      ...theme.fn.focusStyles(),
    },
  },
  image: {
    width: 90,
    flexShrink: 0,
    borderRadius: 10,
    overflow: 'hidden',
  },
  name: {
    fontWeight: 600,
  },
  artist: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
}));
