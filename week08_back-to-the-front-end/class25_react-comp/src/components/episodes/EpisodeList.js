import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Pageable from '../pageable/Pageable';
import Episode from './Episode';
import { getEpisodes } from '../../services/rickAndMortyApi';

export default class EpisodeList extends Component {
  state = {
    currentPage: 1,
    totalPages: 10,
    episodes: []
  };

  fetchEpisode = () => {
    getEpisodes(this.state.currentPage) // Fetch episodes
      .then(({ pages, episodes }) => {
        // update episodes state
        // update totalPages
        this.setState({ episodes, totalPages: pages });
      });
  };

  componentDidMount() {
    this.fetchEpisode();
  }

  handlePageUpdate = page => {
    this.setState({ currentPage: page }, () => {
      this.fetchEpisode();
    });
  };

  render() {
    const { currentPage, totalPages, episodes } = this.state;
    const episodeComponents = episodes.map(episode => {
      return (
        <Episode key={episode.id}
          id={episode.id}
          title={episode.title}
          episodeNumber={episode.episodeNumber} />
      );
    });
    return (
      <Fragment>
        <Pageable currentPage={currentPage}
          totalPages={totalPages}
          updatePage={this.handlePageUpdate} />
        {episodeComponents}
      </Fragment>
    );
  }
}
