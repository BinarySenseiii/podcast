import { useMemo } from 'react';
import { format } from 'date-fns';
import { compact, values } from 'lodash';
import { Text, Image, Stack, Group, Paper, AspectRatio } from '@mantine/core';

import { Logo } from 'src/components/UI';
import { humanizeTime } from 'src/lib/helpers';
import { DRAWER, FORMAT } from 'src/constants';
import { useShellDrawer } from 'src/store/shell/hooks';

import type { Episode } from 'src/store/podcasts/types';

import { useStyles } from './styles';

export function EpisodeCard({
  guid,
  name,
  date,
  image,
  source,
  collection,
}: Episode) {
  const { classes } = useStyles();
  const drawer = useShellDrawer(({ actions }) => actions);

  const src = useMemo(() => values(image).reverse().find(Boolean), [image]);

  const openDetails = () => drawer.open(DRAWER.EPISODE, { guid, collection });

  return (
    <Paper component="button" className={classes.episode} onClick={openDetails}>
      <Group>
        <AspectRatio ratio={1 / 1} className={classes.image}>
          <Image
            src={src}
            withPlaceholder
            placeholder={<Logo short order={2} />}
          />
        </AspectRatio>

        <Stack spacing={4}>
          <Text size="sm" title={name} lineClamp={1} className={classes.name}>
            {name}
          </Text>

          <Text
            size="xs"
            lineClamp={1}
            title={collection?.name}
            className={classes.artist}
          >
            {collection?.name}
          </Text>

          <Text size="xs" lineClamp={1} className={classes.artist}>
            {compact([
              date && format(new Date(date), FORMAT.DATE.EPISODE),
              source?.time && humanizeTime(source?.time),
            ]).join(' / ')}
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}
