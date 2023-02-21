import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  sticky: {
    position: 'sticky',
    top: 0,
    zIndex: 9997,
    flex: 0,
  },
  form: {
    ...theme.other.backdrop(theme),
  },
}));
