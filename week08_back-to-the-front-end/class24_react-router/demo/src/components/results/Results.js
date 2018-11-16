import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withResults = (resultsFn, resultsQuery, Component) => {
  return class WithResults extends PureComponent {
    static propTypes = {
      currentPage: PropTypes.number.isRequired,
      updateTotalPages: PropTypes.func.isRequired
    };

    state = {
      results: []
    };

    updateResults = () => {
      const { currentPage, updateTotalPages } = this.props;

      resultsFn(currentPage, resultsQuery)
        .then(({ total, results }) => {
          this.setState({ results });
          updateTotalPages(total);
        });
    };

    componentDidMount() {
      this.updateResults();
    }

    componentDidUpdate(prevProps) {
      if(prevProps.currentPage !== this.props.currentPage || prevProps.resultsQuery !== this.props.resultsQuery) {
        this.updateResults();
      }
    }

    render() {
      const { results } = this.state;
      const props = { ...this.props, results };

      return <Component {...props} />;
    }
  };
};

export default class Results extends PureComponent {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    updateTotalPages: PropTypes.func.isRequired,
    resultsFn: PropTypes.func.isRequired,
    resultsQuery: PropTypes.object.isRequired,
    ResultComponent: PropTypes.func.isRequired
  };

  state = {
    results: []
  };

  updateResults = () => {
    const { currentPage, updateTotalPages, resultsFn, resultsQuery } = this.props;

    resultsFn(currentPage, resultsQuery)
      .then(({ total, results }) => {
        this.setState({ results });
        updateTotalPages(total);
      });
  };

  componentDidMount() {
    this.updateResults();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.currentPage !== this.props.currentPage || prevProps.resultsQuery !== this.props.resultsQuery) {
      this.updateResults();
    }
  }

  render() {
    const { ResultComponent } = this.props;
    const { results } = this.state;

    const listItems = results.map(result => {
      return <ResultComponent key={result.id} result={result} />;
    });

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}
