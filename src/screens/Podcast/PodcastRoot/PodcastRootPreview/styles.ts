import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  preview: {
    padding: theme.spacing.md,
  },
  image: {
    width: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  artist: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
}));
