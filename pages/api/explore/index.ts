import { get, has, uniq, last } from 'lodash';

import { ENTITY } from 'src/constants';
import { SCHEMA, ROUTE } from 'src/constants/api';
import { replaceBy, overrideBy } from 'src/lib/helpers';
import { request, createRouteHandler } from 'src/lib/api';

import type { Episode, Podcast } from 'src/store/podcasts/types';

const entities = {
  [ENTITY.PODCAST]: 'podcasts',
  [ENTITY.EPISODE]: 'podcast-episodes',
};

function parseIds(url: string) {
  return last(url.split('/'))?.match(/\d+/g)?.slice(0, 2).map(Number);
}

export default createRouteHandler({
  get: async ({ query }) => {
    if (!has(entities, query.entity as string)) {
      throw new Error();
    }

    const feed = await request(
      replaceBy(ROUTE.EXPLORE, {
        ':limit': query.limit,
        ':country': query.country,
        ':entity': get(entities, query.entity as string),
      }),
      { baseURL: process.env.FEED_URI }
    );

    const [podcastIds, episodeIds] = feed.data.feed.results.reduce(
      (acc: number[][], entity: any) => {
        parseIds(entity.url)?.forEach((id, idx) => acc[idx].push(id));
        return acc;
      },
      [[], []]
    );

    const lookup = await request(ROUTE.LOOKUP, {
      params: {
        entity: query.entity,
        id: uniq(podcastIds).join(','),
      },
    });

    const data = get(
      {
        [ENTITY.PODCAST]: (results: any[]) =>
          results.reduce(
            (acc: Podcast[], podcast: any) => [
              ...acc,
              overrideBy<any>(podcast, SCHEMA.PODCAST),
            ],
            []
          ),
        [ENTITY.EPISODE]: (results: any[]) =>
          results.reduce(
            (acc: Episode[], episode: any) =>
              episodeIds.includes(episode.trackId)
                ? [...acc, overrideBy<any>(episode, SCHEMA.EPISODE)]
                : acc,
            []
          ),
      },
      query.entity as string
    )(lookup.data.results);

    return { data };
  },
});
