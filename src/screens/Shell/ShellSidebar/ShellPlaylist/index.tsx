import { Paper, Stack } from '@mantine/core';

import { useShellPlaylist } from 'src/store/shell/hooks';
import { PlaylistItem } from 'src/components/Playlist';

export function ShellPlaylist() {
  const playlist = useShellPlaylist(({ state }) => state);

  if (!playlist.queue.length) {
    return null;
  }

  return (
    <Paper p="md">
      <Stack spacing="md">
        {playlist.queue.map((episode, index) => (
          <PlaylistItem key={episode.guid} order={index + 1} {...episode} />
        ))}
      </Stack>
    </Paper>
  );
}
