import Head from 'next/head';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { Title, Stack, useMantineTheme } from '@mantine/core';

import { BRAND } from 'src/constants';
import { Status, Section } from 'src/components/UI';
import { usePodcastQuery } from 'src/store/podcasts/hooks';

import { PodcastRootPreview } from './PodcastRootPreview';
import { PodcastRootCaption } from './PodcastRootCaption';
import { PodcastRootEpisodes } from './PodcastRootEpisodes';

export function PodcastRoot() {
  const intl = useIntl();
  const router = useRouter();
  const theme = useMantineTheme();

  const podcast = usePodcastQuery(router.query.id as string);
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const title = podcast.data?.name ?? intl.formatMessage({ id: 'ui.podcast' });

  return (
    <>
      <Head>
        <title>
          {title} / {BRAND.NAME}
        </title>
      </Head>

      <Section>
        <Section.Header>
          <Title order={2}>{title}</Title>
        </Section.Header>

        <Status selectors={podcast}>
          <Section sx={{ flex: 0 }}>
            <Section.Content>
              <Stack spacing={sm ? 'sm' : 'lg'}>
                <PodcastRootPreview {...podcast.data!} />
                <PodcastRootCaption {...podcast.data!} />
              </Stack>
            </Section.Content>
          </Section>

          <Section sx={{ flex: 0 }}>
            <Section.Header sx={{ top: 58 }}>
              <Title order={2}>
                {intl.formatMessage({ id: 'podcast.lastEpisodes' })}
              </Title>
            </Section.Header>

            <Section.Content>
              <PodcastRootEpisodes {...podcast.data!} />
            </Section.Content>
          </Section>
        </Status>
      </Section>
    </>
  );
}
