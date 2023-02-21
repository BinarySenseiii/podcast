import { PodcastDrawer } from 'src/screens/Podcast/PodcastDrawer';
import { EpisodeDrawer } from 'src/screens/Episode/EpisodeDrawer';

export enum DRAWER {
  EPISODE = 'EPISODE',
  PODCAST = 'PODCAST',
}

export const DRAWER_REGISTER = {
  [DRAWER.PODCAST]: PodcastDrawer,
  [DRAWER.EPISODE]: EpisodeDrawer,
};
