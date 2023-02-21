import { Box, Text, Title } from '@mantine/core';

import type { ReactNode } from 'react';
import type { TitleProps } from '@mantine/core';

import { useStyles } from './styles';

interface LogoProps extends TitleProps {
  short?: boolean;
  indicator?: ReactNode;
}

export function Logo({ short, indicator, ...props }: LogoProps) {
  const { cx, classes } = useStyles();

  return (
    <Title {...props} className={cx(props.className, classes.logo)}>
      <Text component="span" className={classes.play}>
        {short ? 'P' : 'Play'}
      </Text>

      <Text component="span" className={classes.cast}>
        {short ? 'c.' : 'cast.'}
      </Text>

      {!short && indicator && (
        <Box className={classes.indicator}>{indicator}</Box>
      )}
    </Title>
  );
}
