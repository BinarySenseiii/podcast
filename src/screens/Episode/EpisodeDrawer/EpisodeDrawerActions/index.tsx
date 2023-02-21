import { useIntl } from 'react-intl';
import { Group, Button } from '@mantine/core';

import { useShellPlaylist } from 'src/store/shell/hooks';

import type { Episode } from 'src/store/podcasts/types';

export function EpisodeDrawerActions(episode: Episode) {
  const intl = useIntl();
  const playlist = useShellPlaylist();

  const playEpisode = () => playlist.actions.next(episode);

  const [queueEpisode] = playlist.state.queue;
  const disabled = queueEpisode?.guid === episode.guid;

  return (
    <Group>
      <Button disabled={disabled} onClick={playEpisode} sx={{ width: '100%' }}>
        {disabled
          ? intl.formatMessage({ id: 'ui.playingNow' })
          : intl.formatMessage({ id: 'ui.playEpisode' })}
      </Button>
    </Group>
  );
}
