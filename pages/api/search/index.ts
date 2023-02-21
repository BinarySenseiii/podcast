import { get, has } from 'lodash';

import { ENTITY } from 'src/constants';
import { overrideBy } from 'src/lib/helpers';
import { ROUTE, SCHEMA } from 'src/constants/api';
import { request, createRouteHandler } from 'src/lib/api';

const schemas = {
  [ENTITY.PODCAST]: SCHEMA.PODCAST,
  [ENTITY.EPISODE]: SCHEMA.EPISODE,
};

export default createRouteHandler({
  get: async ({ query }) => {
    if (!has(schemas, query.entity as string)) {
      throw new Error();
    }

    const params = { ...query, media: 'podcast' };
    const response = await request(ROUTE.SEARCH, { params });

    const data = response.data.results.map((item: any) =>
      overrideBy<any>(item, get(schemas, query.entity as string))
    );

    return { data };
  },
});
