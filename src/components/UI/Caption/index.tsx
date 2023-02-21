import { Box, Text, Stack } from '@mantine/core';

import type { TextProps } from '@mantine/core';

import { useStyles } from './styles';

interface CaptionProps extends TextProps {
  title: string;
}

export function Caption({
  title,
  children,
  className,
  ...props
}: CaptionProps) {
  const { cx, classes } = useStyles();

  return (
    <Text {...props} size="sm" className={cx(classes.caption, className)}>
      <Stack align="center" spacing={3}>
        <Box component="span" className={classes.title}>
          {title}
        </Box>

        <Box component="span" className={classes.value}>
          {children}
        </Box>
      </Stack>
    </Text>
  );
}
