import { withAuth } from './auth/withAuth';
import Home from './components/home/Home';
import ArtistsSearch from './containers/artists/ArtistsSearch';
import { Login, Callback, Signup } from './components/auth/Auth';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  SIGNUP: {
    path: '/signup',
    Component: Signup,
    linkTo: () => '/signup'
  },
  LOGIN: {
    path: '/login',
    Component: Login,
    linkTo: () => '/login'
  },
  CALLBACK: {
    path: '/callback',
    Component: Callback,
    linkTo: () => '/callback'
  },
  ARTISTS: {
    path: '/artists',
    Component: withAuth(ArtistsSearch),
    linkTo: () => '/artists'
  }
};
