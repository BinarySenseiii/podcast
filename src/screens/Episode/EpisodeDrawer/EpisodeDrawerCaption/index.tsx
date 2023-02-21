import { format } from 'date-fns';
import { useIntl } from 'react-intl';
import { Divider, Group } from '@mantine/core';

import { FORMAT } from 'src/constants';
import { Caption } from 'src/components/UI';
import { humanizeTime } from 'src/lib/helpers';

import type { Episode } from 'src/store/podcasts/types';

export function EpisodeDrawerCaption({ date, source }: Episode) {
  const intl = useIntl();

  return (
    <Group>
      <Caption title={intl.formatMessage({ id: 'ui.date' })}>
        {format(new Date(date), FORMAT.DATE.EPISODE)}
      </Caption>

      <Divider orientation="vertical" />

      <Caption title={intl.formatMessage({ id: 'ui.duration' })}>
        {humanizeTime(source.time)}
      </Caption>
    </Group>
  );
}
