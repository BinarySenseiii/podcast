import { useMemo } from 'react';
import Link from 'next/link';
import { values } from 'lodash';
import { Text, Stack, Title, Image, Anchor, AspectRatio } from '@mantine/core';

import { ROUTE } from 'src/constants';
import { replaceBy } from 'src/lib/helpers';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function EpisodeDrawerPreview(episode: Episode) {
  const { classes } = useStyles();
  const { name, image, collection } = episode;

  const href = useMemo(
    () => replaceBy(ROUTE.PODCAST.ROOT, { ':id': collection?.id }),
    [collection?.id]
  );

  const src = useMemo(() => values(image).reverse().find(Boolean), [image]);

  return (
    <Stack align="flex-start" spacing="md" className={classes.preview}>
      <AspectRatio ratio={1 / 1} className={classes.image}>
        <Image src={src} />
      </AspectRatio>

      <Stack spacing={3}>
        <Text lineClamp={3} title={name}>
          <Title order={3}>{name}</Title>
        </Text>

        <Text className={classes.collection}>
          <Link href={href} passHref>
            <Anchor>{collection?.name}</Anchor>
          </Link>
        </Text>
      </Stack>
    </Stack>
  );
}
