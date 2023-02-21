import { noop, first } from 'lodash';

import type { Source } from 'src/store/podcasts/types';

import { usePlayerMedia } from './usePlayerMedia';
import { usePlayerStatus } from './usePlayerStatus';

function parseType(type?: string) {
  return (first(type?.split('/')) as 'audio' | 'video') || 'audio';
}

export function useShellPlayer() {
  const media = usePlayerMedia();
  const status = usePlayerStatus();

  const { ref } = media.state;

  const load = ({ url: src, type }: Source) => {
    media.actions.reset();
    status.actions.set({ loading: true }, true);

    const onPlay = () => status.actions.set({ playing: true });
    const onPause = () => status.actions.set({ playing: false });
    const onError = () => status.actions.set({ error: true }, true);
    const onLoadedData = () => status.actions.set({ ready: true }, true);

    const onEnded = () => {
      media.actions.reset();
      status.actions.set({ ended: true }, true);
    };

    media.actions.setup(parseType(type), {
      src,
      onPlay,
      onPause,
      onError,
      onEnded,
      onLoadedData,
      hidden: true,
      autoPlay: true,
      onContextMenu: noop,
    });
  };

  const play = () => ref.current?.play();
  const pause = () => ref.current?.pause();
  const duration = () => ref.current?.duration || 0;
  const position = () => ref.current?.currentTime || 0;

  const seek = (time: number) => {
    if (ref.current) ref.current.currentTime = time;
  };

  return {
    media: media.state,
    status: status.state,
    state: { position, duration },
    controls: { load, play, seek, pause },
  };
}
