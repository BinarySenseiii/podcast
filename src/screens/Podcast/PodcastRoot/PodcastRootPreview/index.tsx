import { useMemo } from 'react';
import { values } from 'lodash';
import { Text, Stack, Paper, Title, Image, AspectRatio } from '@mantine/core';

import { Logo } from 'src/components/UI';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastRootPreview({ name, image, artist }: Podcast) {
  const { classes } = useStyles();

  const src = useMemo(() => values(image).reverse().find(Boolean), [image]);

  return (
    <Paper className={classes.preview}>
      <Stack align="center">
        <AspectRatio ratio={1 / 1} className={classes.image}>
          <Image src={src} withPlaceholder placeholder={<Logo />} />
        </AspectRatio>

        <Stack spacing={3}>
          <Text lineClamp={2} align="center">
            <Title order={2}>{name}</Title>
          </Text>

          <Text lineClamp={2} align="center" className={classes.artist}>
            {artist.name}
          </Text>
        </Stack>
      </Stack>
    </Paper>
  );
}
