import { createRequest } from 'src/lib';

import type { SearchParamsState } from 'src/store/search/types';

export const search = {
  results: createRequest<SearchParamsState, any[]>((params) => ({
    url: '/search',
    params,
  })),
};
