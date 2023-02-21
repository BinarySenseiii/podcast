import { useIntl } from 'react-intl';
import { Title, Paper, Stack } from '@mantine/core';

import { Section, Typography } from 'src/components/UI';

import type { Podcast } from 'src/store/podcasts/types';

import { PodcastDrawerCaption } from './PodcastDrawerCaption';

import { useStyles } from './styles';

export function PodcastDrawer(podcast: Podcast) {
  const intl = useIntl();
  const { classes } = useStyles();

  const { name, summary, description } = podcast;
  const content = description || summary;

  return (
    <Section>
      <Section.Header>
        <Title order={2}>
          {name ?? intl.formatMessage({ id: 'ui.podcast' })}
        </Title>
      </Section.Header>

      <Section.Content sx={{ flex: 0 }}>
        <Stack spacing="lg">
          <Paper className={classes.content}>
            <PodcastDrawerCaption {...podcast} />
          </Paper>

          {content && (
            <Paper className={classes.content}>
              <Typography>{content}</Typography>
            </Paper>
          )}
        </Stack>
      </Section.Content>
    </Section>
  );
}
