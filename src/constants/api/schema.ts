export const PODCAST = {
  id: 'trackId',
  name: 'trackName',
  artist: {
    id: 'artistId',
    name: 'artistName',
  },
  genre: {
    id: 'genreIds[0]',
    name: 'primaryGenreName',
  },
  image: {
    30: 'artworkUrl30',
    60: 'artworkUrl60',
    100: 'artworkUrl100',
    160: 'artworkUrl160',
    600: 'artworkUrl600',
  },
};

export const PODCAST_FEED = {
  language: 'language',
  owner: 'itunes.owner',
  summary: 'itunes.summary',
  description: 'description',
};

export const EPISODE = {
  id: 'trackId',
  name: 'trackName',
  guid: 'episodeGuid',
  date: 'releaseDate',
  summary: 'description',
  source: {
    url: 'previewUrl',
    time: 'trackTimeMillis',
  },
  collection: {
    id: 'collectionId',
    name: 'collectionName',
  },
  genre: {
    id: 'genres[0].id',
    name: 'genres[0].name',
  },
  image: {
    30: 'artworkUrl30',
    60: 'artworkUrl60',
    100: 'artworkUrl100',
    160: 'artworkUrl160',
    600: 'artworkUrl600',
  },
};

export const EPISODE_FEED = {
  name: 'title',
  guid: 'guid',
  date: 'isoDate',
  content: 'content',
  summary: 'itunes.summary',
  source: {
    url: 'enclosure.url',
    type: 'enclosure.type',
    time: 'itunes.duration',
  },
  image: {
    600: 'itunes.image',
  },
};
