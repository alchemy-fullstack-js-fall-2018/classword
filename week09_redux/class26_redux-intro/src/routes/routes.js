import Home from '../components/home/Home';
import NoteContainer from '../containers/notes/NoteContainer';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  NOTE: {
    path: '/notes/:id',
    Component: NoteContainer,
    linkTo: id => `/notes/${id}`
  }
};
