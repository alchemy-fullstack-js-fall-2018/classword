import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Fragment>
      <h1>Notes!</h1>
      <Router>
        <Switch>
          <Route path={ROUTES.NOTE.path} component={ROUTES.NOTE.Component} />
          <Route path={ROUTES.HOME.path} component={ROUTES.HOME.Component} />
        </Switch>
      </Router>
    </Fragment>
  );
}
