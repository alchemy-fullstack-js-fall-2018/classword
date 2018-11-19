import Home from '../components/home/Home';
import NoteContainer from '../containers/notes/NoteContainer';
import HiNotes from '../containers/notes/HiNotes';
import NotesByLength from '../containers/notes/NotesByLength';
import NotesByTitle from '../containers/notes/NotesByTitle';

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
  NOTES_BY_TITLE: {
    path: '/notes/byTitle',
    Component: NotesByTitle,
    linkTo: () => '/notes/byTitle'
  },
  NOTES_BY_LENGTH: {
    path: '/notes/byLength',
    Component: NotesByLength,
    linkTo: () => '/notes/byLength'
  },
  HI_NOTES: {
    path: '/notes/hi',
    Component: HiNotes,
    linkTo: () => '/notes/hi'
  }
};
