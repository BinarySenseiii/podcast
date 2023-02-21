import create from 'zustand';

import type {
  ShellSidebarState,
  ShellSidebarActions,
} from 'src/store/shell/types';

const initialState: ShellSidebarState = {
  visible: true,
};

export const useShellSidebar = create<{
  state: ShellSidebarState;
  actions: ShellSidebarActions;
}>((set) => ({
  state: initialState,
  actions: {
    toggle: (payload) => {
      set(({ state }) => ({
        state: {
          ...state,
          visible: payload ?? !state.visible,
        },
      }));
    },
  },
}));
