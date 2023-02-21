import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  header: {
    borderColor: 'transparent',

    [theme.fn.smallerThan('sm')]: {
      backgroundColor: 'transparent',
      backdropFilter: 'none',
    },
  },
  stack: {
    [theme.fn.smallerThan('md')]: {
      alignItems: 'center',
    },

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
}));
