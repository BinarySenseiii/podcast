import { useMemo } from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { Title, SimpleGrid } from '@mantine/core';
import { get, sortBy, uniqBy, groupBy, isEmpty } from 'lodash';

import type { ReactNode } from 'react';

import { Status, Section } from 'src/components/UI';
import { PodcastCard } from 'src/components/Podcast';
import { ExploreForm } from 'src/components/Explore';
import { useExploreQuery } from 'src/store/explore/hooks';
import { BRAND, FIELD, ROUTE, ENTITY, BREAKPOINTS } from 'src/constants';

import type { Podcast } from 'src/store/podcasts/types';
import type { ExploreFormValues } from 'src/store/explore/types';

import { useStyles } from './styles';

const breakpoints = BREAKPOINTS[ENTITY.PODCAST];

export function ExplorePodcasts() {
  const intl = useIntl();
  const router = useRouter();
  const { classes } = useStyles();

  const podcasts = useExploreQuery<Podcast[]>(ENTITY.PODCAST);

  const list = useMemo(
    () => groupBy(podcasts.data, ({ genre }) => genre?.id),
    [podcasts.data]
  );

  const genres = useMemo(
    () =>
      sortBy(
        uniqBy(
          podcasts.data?.map(({ genre }) => ({
            value: String(genre?.id),
            label: String(genre?.name),
          })),
          'value'
        ),
        'label'
      ),
    [podcasts.data]
  );

  const values = useMemo(
    () => ({ [FIELD.GENRE]: [get(router.query, FIELD.GENRE, [])].flat() }),
    [router.query]
  );

  const onSubmit = (query: ExploreFormValues) => {
    router.replace({ pathname: ROUTE.EXPLORE.PODCASTS, query });
  };

  const title = intl.formatMessage({ id: 'explore.popularPodcasts' });

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

        {podcasts.data && (
          <Section.Content className={classes.form}>
            <ExploreForm genres={genres} values={values} onSubmit={onSubmit} />
          </Section.Content>
        )}
      </Section>

      <Section>
        <Section.Content>
          <Status selectors={podcasts}>
            <SimpleGrid breakpoints={breakpoints}>
              {isEmpty(values[FIELD.GENRE])
                ? podcasts.data?.map((podcast) => (
                    <PodcastCard {...podcast} key={podcast.id} />
                  ))
                : values[FIELD.GENRE].reduce<ReactNode[]>(
                    (acc, genre) =>
                      acc.concat(
                        get(list, genre, []).map((podcast) => (
                          <PodcastCard {...podcast} key={podcast.id} />
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
