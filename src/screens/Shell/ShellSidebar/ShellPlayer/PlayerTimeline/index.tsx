import { useEffect } from 'react';
import { Text, Group, Stack, Slider } from '@mantine/core';
import { useSetState, useDocumentVisibility } from '@mantine/hooks';

import { specifyTime } from 'src/lib/helpers';
import { useShellPlayer, useShellSidebar } from 'src/store/shell/hooks';

import { useStyles } from './styles';

export function PlayerTimeline() {
  const { classes } = useStyles();
  const documentVisible = useDocumentVisibility();

  const { visible } = useShellSidebar(({ state }) => state);
  const { media, state, status, controls } = useShellPlayer();

  const [{ value, position, duration }, setState] = useSetState({
    sliding: false,
    value: state.position(),
    position: state.position(),
    duration: state.duration(),
  });

  useEffect(() => {
    setState({
      sliding: false,
      value: state.position(),
      position: state.position(),
      duration: state.duration(),
    });
  }, [status.ready]);

  useEffect(() => {
    const { ref } = media;

    const update = () => {
      setState(({ sliding }) => ({
        position: state.position(),
        ...(!sliding && { value: state.position() }),
      }));
    };

    if (documentVisible && visible) {
      ref.current?.addEventListener('timeupdate', update);
    }

    return () => ref.current?.removeEventListener('timeupdate', update);
  }, [documentVisible, media, visible]);

  const changePosition = (sliding: boolean) => (newValue: number) => {
    !sliding && controls.seek(newValue);

    setState({
      sliding,
      value: newValue,
      ...(!sliding && { position: newValue }),
    });
  };

  return (
    <Stack spacing={5} mt={3}>
      <Slider
        min={0}
        size="xs"
        value={value}
        max={duration}
        disabled={!status.ready}
        label={specifyTime(value)}
        onChange={changePosition(true)}
        onChangeEnd={changePosition(false)}
      />

      <Group className={classes.timer}>
        <Text size="xs">{specifyTime(position)}</Text>
        <Text size="xs">{specifyTime(duration)}</Text>
      </Group>
    </Stack>
  );
}
