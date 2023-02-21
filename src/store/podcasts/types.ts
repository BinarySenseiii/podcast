export interface Podcast {
  id: string | number;
  name: string;
  genre: Genre;
  image: Image;
  owner?: Owner;
  artist: Artist;
  summary?: string;
  language?: string;
  episodes?: Episode[];
  description?: string;
  collection?: Collection;
}

export interface Image {
  30?: string;
  60?: string;
  100?: string;
  160?: string;
  600?: string;
}

export interface Owner {
  name: string;
  email: string;
}

export interface Genre {
  id: number | string;
  name: string;
}

export interface Artist {
  id: string | number;
  name: string;
}

export interface Collection {
  id: string | number;
  name: string;
}

export interface Episode {
  id?: string | number;
  name: string;
  guid: string;
  date: string;
  image: Image;
  genre?: Genre;
  source: Source;
  summary: string;
  content: string;
  collection?: Collection;
}

export interface Source {
  url: string;
  type: string;
  time: number | string;
}
