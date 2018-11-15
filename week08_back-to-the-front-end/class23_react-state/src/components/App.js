import React, { Component, Fragment } from 'react';
import Paging from './paging/Paging';
import Results from './results/Results';
import Character from './character/Character';
import Location from './location/Location';
import { getCharacters, getLocations } from '../services/rickAndMortyApi';
import styles from './App.css';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 1
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  updateTotalPages = totalPages => {
    this.setState({ totalPages });
  };

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <Fragment>
        <Paging currentPage={currentPage} totalPages={totalPages} updatePage={this.updatePage} />
        <div className={styles.characters}>
          <Results currentPage={currentPage}
            updateTotalPages={this.updateTotalPages}
            getResults={getCharacters}
            ResultComponent={Character}
          />
        </div>
        <div className={styles.locations}>
          <Results
            currentPage={currentPage}
            updateTotalPages={this.updateTotalPages}
            getResults={getLocations}
            ResultComponent={Location}
          />
        </div>
      </Fragment>
    );
  }
}
