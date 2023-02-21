import { DRAWER } from 'src/constants';

import type { Episode } from 'src/store/podcasts/types';

export interface ShellDrawerState {
  props: object;
  name: DRAWER | undefined;
}

export interface ShellDrawerActions {
  close: () => void;
  open: (name: DRAWER | undefined, props?: object) => void;
}

export interface ShellPlaylistState {
  queue: Episode[];
}

export interface ShellPlaylistActions {
  add: (episode: Episode) => void;
  next: (episode?: Episode) => void;
  clear: () => void;
}

export interface ShellSidebarState {
  visible: boolean;
}

export interface ShellSidebarActions {
  toggle: (payload?: boolean) => void;
}
