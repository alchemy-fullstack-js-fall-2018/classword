import Home from '../components/home/Home';
import NoteContainer from '../containers/notes/NoteContainer';
import HiNotes from '../containers/notes/HiNotes';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  NOTE: {
    path: '/note/:id',
    Component: NoteContainer,
    linkTo: id => `/note/${id}`
  },
  HI_NOTES: {
    path: '/notes/hi',
    Component: HiNotes,
    linkTo: () => '/notes/hi'
  }
};
