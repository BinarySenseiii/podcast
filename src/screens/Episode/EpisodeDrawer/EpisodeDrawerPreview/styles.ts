import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  preview: {
    flexDirection: 'row',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  image: {
    width: 150,
    flexShrink: 0,
    borderRadius: 12,
    overflow: 'hidden',
  },
  collection: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
}));
