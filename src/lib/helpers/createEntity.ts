import type { Podcast, Episode } from 'src/store/podcasts/types';

const defaultPodcast: Podcast = {
  id: 0,
  name: '',
  image: {},
  genre: { id: '', name: '' },
  artist: { id: 0, name: '' },
};

export function createPodcast(podcast: Partial<Podcast> | undefined): Podcast {
  return { ...defaultPodcast, ...podcast };
}

const defaultEpisode: Episode = {
  name: '',
  guid: '',
  date: '',
  image: {},
  summary: '',
  content: '',
  source: { url: '', type: '', time: '' },
};

export function createEpisode(episode: Partial<Episode> | undefined): Episode {
  return { ...defaultEpisode, ...episode };
}
