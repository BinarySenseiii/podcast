import create from 'zustand';

import type { PlayerStatusState, PlayerStatusActions } from './types';

const initialState: PlayerStatusState = {
  error: false,
  ready: false,
  ended: false,
  loading: false,
  playing: false,
};

export const usePlayerStatus = create<{
  state: PlayerStatusState;
  actions: PlayerStatusActions;
}>((_set) => ({
  state: initialState,
  actions: {
    set: (payload, reset) => {
      _set(({ state }) => ({
        state: {
          ...(reset ? initialState : state),
          ...payload,
        },
      }));
    },
  },
}));
