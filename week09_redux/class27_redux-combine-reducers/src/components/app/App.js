import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ROUTES from '../../routes';

export default function App() {
  return (
    <Fragment>
      <h1>Pizza shop</h1>
      <Router>
        <Switch>
          <Route component={ROUTES.TRANSACTIONS.Component} path={ROUTES.TRANSACTIONS.path} />
          <Route component={ROUTES.ALL_PIZZA.Component} path={ROUTES.ALL_PIZZA.path} />
        </Switch>
      </Router>
    </Fragment>
  );
}
