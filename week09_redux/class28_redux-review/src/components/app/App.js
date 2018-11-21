import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import ROUTES from '../../routes';

export default function App() {
  return (
    <Fragment>
      <h1>Dry Cleaner</h1>
      <Router>
        <Switch>
          <Route path={ROUTES.CLOTHES.path} component={ROUTES.CLOTHES.Component} />
        </Switch>
      </Router>
    </Fragment>
  );
}
