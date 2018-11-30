import React from 'react';
import { Link } from 'react-router-dom';
import Home from './components/home/Home';
import FactsContainer from './containers/facts/FactsContainer';
import RandomFactContainer from './containers/facts/RandomFactContainer'

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  QUOTES: {
    path: '/quotes',
    Component: FactsContainer,
    linkTo: () => '/quotes'
  },
  RANDOM_FACT: {
    path: '/random',
    Component: RandomFactContainer,
    linkTo: () => '/random'
  }
};

export const rootLinks = Object.keys(ROUTES)
  .filter(routeName => ROUTES[routeName].linkTo.length === 0)
  .map(routeName => {
    return <Link to={ROUTES[routeName].linkTo()}>{routeName}</Link>;
  })
