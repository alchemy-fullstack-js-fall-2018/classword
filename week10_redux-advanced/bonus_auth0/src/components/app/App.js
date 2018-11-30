import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
import { ROUTES } from '../../routes';
import { login } from '../../services/auth';
import Header from '../../containers/Header';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route component={ROUTES.ARTISTS.Component} path={ROUTES.ARTISTS.path} />
          <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
          <Route component={ROUTES.SIGNUP.Component} path={ROUTES.SIGNUP.path} />
          <Route component={ROUTES.CALLBACK.Component} path={ROUTES.CALLBACK.linkTo()} />
          <Route render={() => login()} path={ROUTES.LOGIN.path} />
        </Switch>
      </Fragment>
    </Router>
  );
}
