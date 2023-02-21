import Head from 'next/head';
import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';
import { TbVinyl } from 'react-icons/tb';

import { BRAND } from 'src/constants';
import { Status, Section, Placeholder } from 'src/components/UI';

export function PlaylistsRoot() {
  const intl = useIntl();

  const title = intl.formatMessage({ id: 'ui.playlists' });

  const nothing = (
    <Placeholder
      icon={TbVinyl}
      title={intl.formatMessage({ id: 'message.comingSoon' })}
    />
  );

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

        <Section.Content>
          <Status views={{ nothing }}>{[]}</Status>
        </Section.Content>
      </Section>
    </>
  );
}
