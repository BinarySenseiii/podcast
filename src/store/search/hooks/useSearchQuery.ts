import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { search } from 'src/store/search/requests';

import type { SearchParamsState } from 'src/store/search/types';

export function useSearchQuery(params?: SearchParamsState) {
  useEffect(() => search.results.cancel, [params]);

  return useInfiniteQuery(
    ['search'],
    ({ pageParam = params }) => search.results({ ...pageParam, limit: 24 }),
    {
      enabled: Boolean(params),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      getNextPageParam: (last) => !isEmpty(last),
    }
  );
}
