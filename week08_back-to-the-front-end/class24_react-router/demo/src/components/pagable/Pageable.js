import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Results from '../results/Results';
import styles from './Pageable.css';

export default class Pageable extends Component {
  static propTypes = {
    resultsFn: PropTypes.func.isRequired,
    resultsQuery: PropTypes.object.isRequired,
    ResultComponent: PropTypes.func.isRequired
  };

  state = {
    currentPage: 1,
    totalPages: null
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  updateTotalPages = totalPages => {
    this.setState({ totalPages });
  };

  render() {
    const { resultsFn, ResultComponent, resultsQuery } = this.props;
    const { currentPage, totalPages } = this.state;

    return (
      <Fragment>
        <Paging currentPage={currentPage}
          totalPages={totalPages}
          updatePage={this.updatePage} />
        <Results
          currentPage={currentPage}
          updateTotalPages={this.updateTotalPages}
          resultsFn={resultsFn}
          resultsQuery={resultsQuery}
          ResultComponent={ResultComponent} />
      </Fragment>
    );
  }
}

// This is passed in props and being destructured
const Paging = ({ currentPage, totalPages, updatePage }) => {
  // Could do this
  //const { currentPage, updatePage } = props

  return (
    <div className={styles.paging}>
      {currentPage > 1 && <button onClick={() => updatePage(currentPage - 1)}>&lt;</button>}
      <span>{currentPage} out of {totalPages}</span>
      {currentPage < totalPages && <button onClick={() => updatePage(currentPage + 1)}>&gt;</button>}
    </div>
  );
};
