import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  sub: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
  image: {
    flexShrink: 0,
    borderRadius: theme.radius.sm,
    overflow: 'hidden',
  },
}));
