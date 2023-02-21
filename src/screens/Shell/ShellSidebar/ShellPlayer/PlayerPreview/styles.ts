import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  preview: {
    cursor: 'pointer',
  },
  media: {
    width: 180,
    margin: '0 auto',
    borderRadius: 10,
    overflow: 'hidden',
  },
  collection: {
    color: theme.other.variable(theme, 'colorTextInfo'),
  },
}));
