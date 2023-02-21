import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  preview: {
    padding: theme.spacing.sm,

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.md,
    },
  },
  content: {
    padding: theme.spacing.md,
  },
}));
