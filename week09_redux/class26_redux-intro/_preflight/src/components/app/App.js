import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import { ROUTES } from '../../routes/routes';
import 'normalize.css';
import './App.css';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
          <Route exact component={ROUTES.NOTES_BY_TITLE.Component} path={ROUTES.NOTES_BY_TITLE.path} />
          <Route exact component={ROUTES.NOTES_BY_LENGTH.Component} path={ROUTES.NOTES_BY_LENGTH.path} />
          <Route exact component={ROUTES.HI_NOTES.Component} path={ROUTES.HI_NOTES.path} />
          <Route component={ROUTES.NOTE.Component} path={ROUTES.NOTE.path} />
          <Redirect to={ROUTES.HOME.path} />
        </Switch>
      </Fragment>
    </Router>
  );
}
