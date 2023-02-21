import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  placeholder: {
    minHeight: 41,
    padding: theme.spacing.sm,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    borderRadius: theme.radius.md,
    color: theme.other.variable(theme, 'colorPlaceholder'),
    fontWeight: 600,
  },
}));
