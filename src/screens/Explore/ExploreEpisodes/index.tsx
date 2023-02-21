import { useMemo } from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { Title, SimpleGrid } from '@mantine/core';
import { get, sortBy, uniqBy, groupBy, isEmpty } from 'lodash';

import type { ReactNode } from 'react';

import { Status, Section } from 'src/components/UI';
import { EpisodeCard } from 'src/components/Episode';
import { ExploreForm } from 'src/components/Explore';
import { useExploreQuery } from 'src/store/explore/hooks';
import { BRAND, FIELD, ROUTE, ENTITY, BREAKPOINTS } from 'src/constants';

import type { Episode } from 'src/store/podcasts/types';
import type { ExploreFormValues } from 'src/store/explore/types';

import { useStyles } from './styles';

const breakpoints = BREAKPOINTS[ENTITY.EPISODE];

export function ExploreEpisodes() {
  const intl = useIntl();
  const router = useRouter();
  const { classes } = useStyles();

  const episodes = useExploreQuery<Episode[]>(ENTITY.EPISODE);

  const list = useMemo(
    () => groupBy(episodes.data, ({ genre }) => genre?.id),
    [episodes.data]
  );

  const genres = useMemo(
    () =>
      sortBy(
        uniqBy(
          episodes.data?.map(({ genre }) => ({
            value: String(genre?.id),
            label: String(genre?.name),
          })),
          'value'
        ),
        'label'
      ),
    [episodes.data]
  );

  const values = useMemo(
    () => ({ [FIELD.GENRE]: [get(router.query, FIELD.GENRE, [])].flat() }),
    [router.query]
  );

  const onSubmit = (query: ExploreFormValues) => {
    router.replace({ pathname: ROUTE.EXPLORE.EPISODES, query });
  };

  const title = intl.formatMessage({ id: 'explore.popularEpisodes' });

  return (
    <>
      <Head>
        <title>
          {title} / {BRAND.NAME}
        </title>
      </Head>

      <Section className={classes.sticky}>
        <Section.Header>
          <Title order={2}>{title}</Title>
        </Section.Header>

        {episodes.data && (
          <Section.Content className={classes.form}>
            <ExploreForm genres={genres} values={values} onSubmit={onSubmit} />
          </Section.Content>
        )}
      </Section>

      <Section>
        <Section.Content>
          <Status selectors={episodes}>
            <SimpleGrid breakpoints={breakpoints}>
              {isEmpty(values[FIELD.GENRE])
                ? episodes.data?.map((episode) => (
                    <EpisodeCard {...episode} key={episode.id} />
                  ))
                : values[FIELD.GENRE].reduce<ReactNode[]>(
                    (acc, genre) =>
                      acc.concat(
                        get(list, genre, []).map((episode) => (
                          <EpisodeCard {...episode} key={episode.id} />
                        ))
                      ),
                    []
                  )}
            </SimpleGrid>
          </Status>
        </Section.Content>
      </Section>
    </>
  );
}
