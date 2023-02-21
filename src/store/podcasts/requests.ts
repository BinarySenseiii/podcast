import { createRequest } from 'src/lib';

import type { Podcast } from 'src/store/podcasts/types';

export const podcasts = {
  details: createRequest<{ id: string[] }, Podcast[]>(({ id }) => ({
    url: '/podcasts',
    params: { id: id.join(',') },
  })),
};
