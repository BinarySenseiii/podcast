import { Text, Stack } from '@mantine/core';

import type { IconType } from 'react-icons';

import { useStyles } from './styles';

interface PlaceholderProps {
  title: string;
  icon?: IconType;
}

export function Placeholder({ title, icon: Icon }: PlaceholderProps) {
  const { classes } = useStyles();

  return (
    <Stack
      spacing={5}
      align="center"
      justify="center"
      className={classes.placeholder}
    >
      {Icon && <Icon size={28} strokeWidth={1.65} />}

      <Text size="sm">{title}</Text>
    </Stack>
  );
}
