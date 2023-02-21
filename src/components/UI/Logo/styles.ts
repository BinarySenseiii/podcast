import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  logo: {
    position: 'relative',
    userSelect: 'none',
  },
  play: {
    color: theme.other.variable(theme, 'colorPrimary'),
    fontSize: 'inherit',
  },
  cast: {
    color: theme.other.variable(theme, 'colorText'),
    fontSize: 'inherit',
  },
  indicator: {
    position: 'absolute',
    top: 5,
    right: 12,
    fontSize: 10,
    fontWeight: 600,
    color: theme.other.variable(theme, 'colorPlaceholder'),
  },
}));
