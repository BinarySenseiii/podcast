import create from 'zustand';

import type {
  ShellPlaylistState,
  ShellPlaylistActions,
} from 'src/store/shell/types';

const initialState: ShellPlaylistState = {
  queue: [],
};

export const useShellPlaylist = create<{
  state: ShellPlaylistState;
  actions: ShellPlaylistActions;
}>((set) => ({
  state: initialState,
  actions: {
    add: (episode) => {
      set(({ state }) => ({
        state: {
          ...state,
          queue: state.queue.concat(episode),
        },
      }));
    },
    next: (episode) => {
      set(({ state }) => ({
        state: {
          ...state,
          queue: !episode
            ? state.queue.slice(1)
            : [
                episode,
                ...state.queue.filter(({ guid }) => guid !== episode.guid),
              ],
        },
      }));
    },
    clear: () => {
      set(() => ({ state: initialState }));
    },
  },
}));
