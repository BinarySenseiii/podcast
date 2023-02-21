import RSSParser from 'rss-parser';

import { overrideBy } from 'src/lib/helpers';
import { SCHEMA, ROUTE } from 'src/constants/api';
import { request, createRouteHandler } from 'src/lib/api';

const parser = new RSSParser();

export default createRouteHandler({
  get: async ({ query: params }) => {
    const response = await request(ROUTE.LOOKUP, { params });

    const data = await Promise.all(
      response.data.results.map(async (podcast: any) => {
        const feed = await parser.parseURL(podcast.feedUrl);

        const episodes = feed.items.map((episode: any) =>
          overrideBy<any>(episode, SCHEMA.EPISODE_FEED)
        );

        return {
          ...overrideBy<any>(podcast, SCHEMA.PODCAST),
          ...overrideBy<any>(feed, SCHEMA.PODCAST_FEED),
          episodes,
        };
      })
    );

    return { data };
  },
});
