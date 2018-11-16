import React from 'react';
import Search from '../components/search/Search';
import ArtistDetail from '../components/artist/ArtistDetail';

export const ROUTES = {
  SEARCH: {
    path: '/search',
    Component: Search,
    linkTo: () => '/search'
  },
  HI: {
    path: '/hi',
    Component: () => <h1>hi</h1>,
    linkTo: () => '/hi'
  },
  ARTIST: {
    path: '/artists/:id',
    Component: ArtistDetail,
    linkTo: id => `/artists/${id}`
  }
};
