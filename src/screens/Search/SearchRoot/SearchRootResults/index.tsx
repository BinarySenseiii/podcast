import { useEffect, useMemo } from 'react';
import { isEqual } from 'lodash';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { TbVinyl } from 'react-icons/tb';
import { Stack, SimpleGrid } from '@mantine/core';

import { PodcastCard } from 'src/components/Podcast';
import { EpisodeCard } from 'src/components/Episode';
import { ENTITY, BREAKPOINTS, FIELD } from 'src/constants';
import { Status, Placeholder, InfiniteList } from 'src/components/UI';
import { useSearchQuery, useSearchParams } from 'src/store/search/hooks';

import type { Podcast, Episode } from 'src/store/podcasts/types';

export function SearchRootResults() {
  const intl = useIntl();
  const router = useRouter();
  const params = useSearchParams();

  const results = useSearchQuery(
    isEqual(router.query, params.state) ? params.state : undefined
  );

  useEffect(() => {
    params.actions.set(router.query as any);
  }, [router.query]);

  const list = useMemo(() => {
    const entities = results.data?.pages.flat() || [];

    switch (params.state.entity) {
      case ENTITY.PODCAST: {
        return entities.map((podcast: Podcast) => (
          <PodcastCard key={podcast.id} {...podcast} />
        ));
      }
      case ENTITY.EPISODE: {
        return entities.map((episode: Episode) => (
          <EpisodeCard key={episode.id} {...episode} />
        ));
      }
      default: {
        return [];
      }
    }
  }, [results.data?.pages]);

  const breakpoints = useMemo(
    () => BREAKPOINTS[params.state.entity],
    [results.data?.pages]
  );

  const loadMore = (offset: number) => {
    const pageParam = { ...params.state, [FIELD.OFFSET]: offset };
    offset && results.fetchNextPage({ pageParam });
  };

  const nothing = !results.isSuccess && (
    <Placeholder
      icon={TbVinyl}
      title={intl.formatMessage({ id: 'search.searchSomething' })}
    />
  );

  return (
    <Stack spacing="xs" sx={{ flex: 1 }}>
      <Status views={{ nothing }} selectors={{ ...results, data: list }}>
        <SimpleGrid breakpoints={breakpoints}>
          <InfiniteList
            loadMore={loadMore}
            hasMore={results.hasNextPage}
            loading={results.isFetchingNextPage}
          >
            {list}
          </InfiniteList>
        </SimpleGrid>
      </Status>
    </Stack>
  );
}
