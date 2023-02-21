import { useMemo } from 'react';
import { slice } from 'lodash';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import {
  Title,
  Button,
  Skeleton,
  SimpleGrid,
  useMantineTheme,
} from '@mantine/core';

import { Section } from 'src/components/UI';
import { createEpisode } from 'src/lib/helpers';
import { EpisodeCard } from 'src/components/Episode';
import { useExploreQuery } from 'src/store/explore/hooks';
import { ROUTE, ENTITY, BREAKPOINTS } from 'src/constants';

import type { Episode } from 'src/store/podcasts/types';

const breakpoints = BREAKPOINTS[ENTITY.EPISODE];

export function ExploreRootEpisodes() {
  const intl = useIntl();
  const router = useRouter();
  const theme = useMantineTheme();

  const episodes = useExploreQuery<Episode[]>(ENTITY.EPISODE);
  const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

  const list = useMemo(() => {
    const length = xs ? 5 : 6;

    if (episodes.isFetching) {
      return Array.from({ length }, (_, id) => createEpisode({ id }));
    }

    return slice(episodes.data, 0, length);
  }, [xs, episodes]);

  const rightContent = (
    <Button size="xs" onClick={() => router.push(ROUTE.EXPLORE.EPISODES)}>
      {intl.formatMessage({ id: 'explore.popularEpisodes' })}
    </Button>
  );

  return (
    <Section sx={{ flex: 0 }}>
      <Section.Header rightContent={rightContent}>
        <Title order={2}>
          {intl.formatMessage({ id: 'explore.topEpisodes' })}
        </Title>
      </Section.Header>

      <Section.Content>
        <SimpleGrid breakpoints={breakpoints}>
          {list.map((episode) =>
            !episodes.isFetching ? (
              <EpisodeCard {...episode} key={episode.id} />
            ) : (
              <Skeleton radius={14} key={episode.id}>
                <EpisodeCard {...episode} />
              </Skeleton>
            )
          )}
        </SimpleGrid>
      </Section.Content>
    </Section>
  );
}
