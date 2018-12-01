import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPoll } from '../../actions/polls';
import { withFetch } from '../../components/withFetch';
import { getPoll } from '../../selectors/polls';
import { getResults } from '../../selectors/results';
import { fetchResults } from '../../actions/results';
import { postVotes } from '../../services/polls';

class PollDetails extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    poll: PropTypes.object,
    results: PropTypes.array
  };

  submitVotes = ({ target }) => {
    const votes = [...target.querySelectorAll('input')]
      .map(input => ({
        id: input.getAttribute('data-id'),
        name: input.getAttribute('data-name'),
        vote: input.value
      }));
    postVotes(this.props.match.params.id, votes);
  };

  render() {
    const { poll, results } = this.props;
    if(!poll) return null;

    const resultsComponent = results
      .sort((a, b) => a.avgVote - b.avgVote)
      .map(result => <li key={result.candidateId}>{result.candidateName} - {result.avgVote}</li>);

    const candidateInputs = poll.candidates.map(candidate => {
      return (
        <>
          <label>{candidate.name}</label>
          <input type="number" data-name={candidate.name} data-id={candidate._id} />
        </>
      );
    });

    return (
      <>
        <h1>{poll.title}</h1>
        <h2>Candidates</h2>
        <ul>
          {poll.candidates.map(candidate => <li key={candidate._id}>{candidate.name}</li>)}
        </ul>
        <h2>Results</h2>
        <ul>
          {resultsComponent}
        </ul>
        <form onSubmit={this.submitVotes}>
          {candidateInputs}
          <button>Vote</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  poll: getPoll(state),
  results: getResults(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    const { id } = props.match.params;
    dispatch(fetchPoll(id));
    dispatch(fetchResults(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(PollDetails));
