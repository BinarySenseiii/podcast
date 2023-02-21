import { createRef, createElement } from 'react';
import create from 'zustand';

import type {
  MediaElement,
  PlayerMediaState,
  PlayerMediaActions,
} from './types';

const initialState: PlayerMediaState = {
  element: undefined,
  ref: { current: undefined },
};

export const usePlayerMedia = create<{
  state: PlayerMediaState;
  actions: PlayerMediaActions;
}>((set) => ({
  state: initialState,
  actions: {
    reset: () => {
      set(() => ({ state: initialState }));
    },
    setup: (type, attrs) => {
      set(({ state }) => {
        const ref = createRef<MediaElement>();
        const element = createElement(type, { ...attrs, ref }) as any;

        return { state: { ...state, ref, element } };
      });
    },
  },
}));
