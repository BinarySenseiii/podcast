import { Group } from '@mantine/core';
import {
  TbRotate2,
  TbPlayerPlay,
  TbPlayerPause,
  TbRotateClockwise2,
} from 'react-icons/tb';

import { Control } from 'src/components/UI';
import { useShellPlayer } from 'src/store/shell/hooks';

import { useStyles } from './styles';

export function PlayerControls() {
  const player = useShellPlayer();
  const { classes } = useStyles();

  const shift = (time: number) => () => {
    player.controls.seek(player.state.position() + time);
  };

  const toggle = () => {
    !player.status.playing ? player.controls.play() : player.controls.pause();
  };

  return (
    <Group className={classes.controls}>
      <Control
        title="15"
        active={false}
        icon={TbRotate2}
        onClick={shift(-15)}
        sx={{ width: 'auto' }}
        disabled={!player.status.ready}
      />

      <Control
        onClick={toggle}
        sx={{ width: 'auto' }}
        active={player.status.playing}
        disabled={!player.status.ready}
        icon={!player.status.playing ? TbPlayerPlay : TbPlayerPause}
      />

      <Control
        title="30"
        active={false}
        onClick={shift(+30)}
        sx={{ width: 'auto' }}
        icon={TbRotateClockwise2}
        disabled={!player.status.ready}
      />
    </Group>
  );
}
