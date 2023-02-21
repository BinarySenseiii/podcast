import { useEffect } from 'react';
import { first } from 'lodash';
import { useQuery } from '@tanstack/react-query';

import { podcasts } from 'src/store/podcasts/requests';

export function usePodcastQuery(id: string) {
  useEffect(() => podcasts.details.cancel, [id]);

  return useQuery(
    ['podcast', String(id)],
    () => podcasts.details({ id: [id] }),
    {
      select: first,
      enabled: Boolean(id),
      staleTime: 1000 * 60 * 30,
    }
  );
}
