import create from 'zustand';

import type {
  ShellDrawerState,
  ShellDrawerActions,
} from 'src/store/shell/types';

const initialState = {
  props: {},
  name: undefined,
};

export const useShellDrawer = create<{
  state: ShellDrawerState;
  actions: ShellDrawerActions;
}>((set) => ({
  state: initialState,
  actions: {
    close: () => {
      set(() => ({ state: initialState }));
    },
    open: (name, props = {}) => {
      set(({ state }) => ({ state: { ...state, name, props } }));
    },
  },
}));
