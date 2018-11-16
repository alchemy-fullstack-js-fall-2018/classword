import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import Artist from '../artist/ArtistDetail';

export default function App() {
  return (
    <Router>
      <div>
        <h1>THEREERERE</h1>
        <Switch>
          <Route component={ROUTES.SEARCH.Component} path={ROUTES.SEARCH.path} />
          <Route component={ROUTES.ARTIST.Component} path={ROUTES.ARTIST.path} />
          <Route render={ROUTES.HI.Component} path={ROUTES.HI.path} />
          {/* <Redirect from="/oldPage" to="/newPage" /> */}
          <Redirect to={ROUTES.SEARCH.path} />
        </Switch>
      </div>
    </Router>
  );
}
