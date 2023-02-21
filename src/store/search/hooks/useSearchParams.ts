import create from 'zustand';
import { isEqual } from 'lodash';

import { ENTITY } from 'src/constants';
import { queryClient } from 'src/context';
import { searchParamsShape } from 'src/store/search/shapes';

import type {
  SearchParamsState,
  SearchParamsActions,
} from 'src/store/search/types';

const initialState: SearchParamsState = {
  term: '',
  entity: ENTITY.PODCAST,
};

export const useSearchParams = create<{
  state: SearchParamsState;
  actions: SearchParamsActions;
}>((_set) => ({
  state: initialState,
  actions: {
    set: (newState) => {
      _set(({ state }) => {
        const parsedState = searchParamsShape.safeParse(newState);

        const updateState = (values?: SearchParamsState) => ({
          state: { ...state, ...values },
        });

        if (parsedState.success) {
          if (!isEqual(state, parsedState.data)) {
            queryClient.resetQueries(['search']);
            queryClient.removeQueries(['search']);
            return updateState(parsedState.data);
          }
        } else {
          queryClient.resetQueries(['search']);
          queryClient.removeQueries(['search']);
          return updateState(initialState);
        }

        return updateState();
      });
    },
  },
}));
