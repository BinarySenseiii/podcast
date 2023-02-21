import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  placeholder: {
    color: theme.other.variable(theme, 'colorPlaceholder'),
  },
  chip: {
    '&[data-variant="filled"]': {
      backgroundColor: theme.other.variable(theme, 'colorBg'),

      '&:hover': {
        backgroundColor: theme.other.variable(theme, 'colorBg'),
      },
    },
  },
}));
