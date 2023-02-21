import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Title, Paper, Stack } from '@mantine/core';

import { mergeImage } from 'src/lib/helpers';
import { usePodcastQuery } from 'src/store/podcasts/hooks';
import { Status, Section, Typography } from 'src/components/UI';

import type { Episode } from 'src/store/podcasts/types';

import { EpisodeDrawerPreview } from './EpisodeDrawerPreview';
import { EpisodeDrawerActions } from './EpisodeDrawerActions';
import { EpisodeDrawerCaption } from './EpisodeDrawerCaption';

import { useStyles } from './styles';

export function EpisodeDrawer({
  guid,
  collection,
}: Pick<Episode, 'guid' | 'collection'>) {
  const intl = useIntl();
  const { classes } = useStyles();

  const podcast = usePodcastQuery(collection?.id as string);

  const episode = useMemo(
    () => podcast.data?.episodes?.find((e) => e.guid === guid),
    [guid, podcast.data?.episodes]
  );

  return (
    <Section>
      <Section.Header>
        <Title order={2}>
          {episode?.name ?? intl.formatMessage({ id: 'ui.podcastEpisode' })}
        </Title>
      </Section.Header>

      <Status selectors={podcast}>
        {episode && (
          <Section>
            <Section.Content>
              <Stack spacing="lg">
                <Paper className={classes.preview}>
                  <EpisodeDrawerPreview
                    {...episode}
                    collection={collection}
                    image={mergeImage(podcast.data!.image, episode.image)}
                  />
                </Paper>

                <EpisodeDrawerActions
                  {...episode}
                  collection={collection}
                  image={mergeImage(podcast.data!.image, episode.image)}
                />

                <Paper className={classes.content}>
                  <EpisodeDrawerCaption {...episode} />
                </Paper>

                {episode.content && (
                  <Paper className={classes.content}>
                    <Typography>{episode.content}</Typography>
                  </Paper>
                )}
              </Stack>
            </Section.Content>
          </Section>
        )}
      </Status>
    </Section>
  );
}
