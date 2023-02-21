import { FIELD } from 'src/constants';
import { createRequest } from 'src/lib';

import type { ExploreEntityParams } from 'src/store/explore/types';

export const explore = {
  entity: createRequest<ExploreEntityParams, any[]>(({ entity, country }) => ({
    url: '/explore',
    params: {
      [FIELD.LIMIT]: 100,
      [FIELD.ENTITY]: entity,
      [FIELD.COUNTRY]: country,
    },
  })),
};
