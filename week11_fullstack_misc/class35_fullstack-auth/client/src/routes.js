import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Polls from './containers/polls/Polls';
import PollDetails from './containers/polls/PollDetails';
import CreatePoll from './components/poll/CreatePoll';
import { withSession } from './components/auth/withSession';
import { Signup, Login } from './containers/auth/Auth';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  POLLS: {
    path: '/polls',
    Component: withSession(Polls),
    linkTo: () => '/polls'
  },
  CREATE_POLL: {
    path: '/polls/create',
    Component: CreatePoll,
    linkTo: () => '/polls/create'
  },
  POLL: {
    path: '/polls/:id',
    Component: PollDetails,
    linkTo: id => `/polls/${id}`
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
  }
};

export const rootLinks = () => {
  return Object.keys(ROUTES)
    .filter(routeName => ROUTES[routeName].linkTo.length === 0)
    .map((routeName, i) => {
      return <Link key={i} to={ROUTES[routeName].linkTo()}>{routeName.toLowerCase().replace('_', ' ')}</Link>;
    });
};

export const routerRoutes = () => {
  return Object.values(ROUTES)
    .map((route, i) => {
      return <Route exact={route.linkTo.length === 0} key={i} path={route.path} component={route.Component} />;
    });
};
