import { useMemo } from 'react';
import Link from 'next/link';
import { values } from 'lodash';
import { Text, Paper, Stack, Image, AspectRatio } from '@mantine/core';

import { ROUTE } from 'src/constants';
import { Logo } from 'src/components/UI';
import { replaceBy } from 'src/lib/helpers';

import type { Podcast } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function PodcastCard({ id, name, image, artist }: Podcast) {
  const { classes } = useStyles();

  const href = useMemo(
    () => replaceBy(ROUTE.PODCAST.ROOT, { ':id': id }),
    [id]
  );

  const src = useMemo(() => values(image).reverse().find(Boolean), [image]);

  return (
    <Link href={href} passHref>
      <Paper component="a" className={classes.podcast}>
        <Stack>
          <AspectRatio ratio={1 / 1} className={classes.image}>
            <Image src={src} withPlaceholder placeholder={<Logo short />} />
          </AspectRatio>

          <Stack spacing={3} className={classes.info}>
            <Text size="sm" title={name} lineClamp={1} className={classes.name}>
              {name}
            </Text>

            <Text
              size="xs"
              lineClamp={1}
              title={artist?.name}
              className={classes.artist}
            >
              {artist?.name}
            </Text>
          </Stack>
        </Stack>
      </Paper>
    </Link>
  );
}
