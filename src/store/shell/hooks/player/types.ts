import type {
  RefObject,
  AudioHTMLAttributes,
  VideoHTMLAttributes,
} from 'react';

export type MediaElement = HTMLAudioElement | HTMLVideoElement;

export type MediaAttributes =
  | AudioHTMLAttributes<any>
  | VideoHTMLAttributes<any>;

export interface PlayerMediaState {
  element: MediaElement | undefined;
  ref: RefObject<MediaElement | undefined>;
}

export interface PlayerMediaActions {
  setup: (type: 'audio' | 'video', attrs?: MediaAttributes) => void;
  reset: () => void;
}

export interface PlayerStatusState {
  error: boolean;
  ready: boolean;
  ended: boolean;
  loading: boolean;
  playing: boolean;
}

export interface PlayerStatusActions {
  set: (status: Partial<PlayerStatusState>, reset?: boolean) => void;
}
