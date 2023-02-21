import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  caption: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    color: theme.other.variable(theme, 'colorTextInfo'),
    fontSize: theme.fontSizes.xs,
    textTransform: 'uppercase',
  },
  value: {
    fontWeight: 600,
  },
}));
