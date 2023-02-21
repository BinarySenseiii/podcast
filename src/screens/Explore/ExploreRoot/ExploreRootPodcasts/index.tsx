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
import { createPodcast } from 'src/lib/helpers';
import { PodcastCard } from 'src/components/Podcast';
import { useExploreQuery } from 'src/store/explore/hooks';
import { ROUTE, ENTITY, BREAKPOINTS } from 'src/constants';

import type { Podcast } from 'src/store/podcasts/types';

const breakpoints = BREAKPOINTS[ENTITY.PODCAST];

export function ExploreRootPodcasts() {
  const intl = useIntl();
  const router = useRouter();
  const theme = useMantineTheme();

  const podcasts = useExploreQuery<Podcast[]>(ENTITY.PODCAST);
  const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

  const list = useMemo(() => {
    const length = xs ? 6 : 9;

    if (podcasts.isFetching) {
      return Array.from({ length }, (_, id) => createPodcast({ id }));
    }

    return slice(podcasts.data, 0, length);
  }, [xs, podcasts]);

  const rightContent = (
    <Button size="xs" onClick={() => router.push(ROUTE.EXPLORE.PODCASTS)}>
      {intl.formatMessage({ id: 'explore.popularPodcasts' })}
    </Button>
  );

  return (
    <Section sx={{ flex: 0 }}>
      <Section.Header rightContent={rightContent}>
        <Title order={2}>
          {intl.formatMessage({ id: 'explore.topPodcasts' })}
        </Title>
      </Section.Header>

      <Section.Content>
        <SimpleGrid breakpoints={breakpoints}>
          {list.map((podcast) =>
            !podcasts.isFetching ? (
              <PodcastCard {...podcast} key={podcast.id} />
            ) : (
              <Skeleton radius={14} key={podcast.id}>
                <PodcastCard {...podcast} />
              </Skeleton>
            )
          )}
        </SimpleGrid>
      </Section.Content>
    </Section>
  );
}
