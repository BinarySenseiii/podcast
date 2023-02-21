import { useEffect } from 'react';
import { Paper, Stack } from '@mantine/core';

import { useShellPlayer, useShellPlaylist } from 'src/store/shell/hooks';

import { PlayerPreview } from './PlayerPreview';
import { PlayerTimeline } from './PlayerTimeline';
import { PlayerControls } from './PlayerControls';

import { useStyles } from './styles';

export function ShellPlayer() {
  const { classes } = useStyles();

  const player = useShellPlayer();
  const playlist = useShellPlaylist();

  const [episode] = playlist.state.queue;

  useEffect(() => {
    episode?.source && player.controls.load(episode.source);
  }, [episode?.source]);

  useEffect(() => {
    player.status.ended && playlist.actions.next();
  }, [player.status.ended]);

  return (
    <Paper className={classes.player}>
      <Stack spacing="md">
        <PlayerPreview {...episode} />
        <PlayerTimeline />
        <PlayerControls />
      </Stack>
    </Paper>
  );
}
