import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import { ROUTES } from '../../routes';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
          <Route component={ROUTES.QUOTES.Component} path={ROUTES.QUOTES.path} />
          <Route component={ROUTES.RANDOM_FACT.Component} path={ROUTES.RANDOM_FACT.path} />

        </Switch>
      </Fragment>
    </Router>
  )
}
