import EpisodeList from '../components/episodes/EpisodeList';

export const ROUTES = {
  EPISODES: {
    path: '/episodes',
    Component: EpisodeList,
    linkPath: () => '/episodes'
  },
  EPISODE: {
    path: '/episodes/:id',
    Component: () => { }, // TODO: Write component
    linkPath: id => `/episodes/${id}`
  }
};
