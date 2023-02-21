import { useIntl } from 'react-intl';
import { Group, Divider } from '@mantine/core';

import { Caption } from 'src/components/UI';

import type { Podcast } from 'src/store/podcasts/types';

export function PodcastDrawerCaption({ owner }: Podcast) {
  const intl = useIntl();

  return (
    <Group>
      <Caption title={intl.formatMessage({ id: 'ui.owner' })}>
        {owner?.name}
      </Caption>

      <Divider orientation="vertical" />

      <Caption title={intl.formatMessage({ id: 'ui.email' })}>
        {owner?.email}
      </Caption>
    </Group>
  );
}
