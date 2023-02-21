import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  typography: {
    fontSize: theme.fontSizes.sm,

    h2: {
      '&:first-of-type': {
        marginTop: 0,
      },
    },

    p: {
      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  },
}));
