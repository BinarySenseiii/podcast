import { useMemo } from 'react';
import { values } from 'lodash';
import { Text, Image, Group, Stack } from '@mantine/core';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PlaylistItem({
  name,
  image,
  order,
  collection,
}: Episode & { order: number }) {
  const { classes } = useStyles();

  const src = useMemo(() => values(image).reverse().find(Boolean), [image]);

  return (
    <Group align="center">
      <Text size="xs" className={classes.sub}>
        {order}
      </Text>

      <Image src={src} width={40} className={classes.image} />

      <Stack spacing={4}>
        <Text lineClamp={1}>{name}</Text>

        <Text size="xs" lineClamp={1} className={classes.sub}>
          {collection?.name}
        </Text>
      </Stack>
    </Group>
  );
}
