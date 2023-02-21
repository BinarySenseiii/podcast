import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  podcast: {
    padding: 6,
    paddingBottom: 12,
    overflow: 'hidden',
    cursor: 'pointer',

    '&:focus': {
      ...theme.fn.focusStyles(),
    },

    '&:hover': {
      backgroundColor: theme.other.variable(theme, 'colorCardAccent'),
    },
  },
  image: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  info: {
    padding: `0 ${theme.spacing.xs}px`,
  },
  name: {
    minHeight: 16,
    fontWeight: 600,
  },
  artist: {
    minHeight: 16,
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
}));
