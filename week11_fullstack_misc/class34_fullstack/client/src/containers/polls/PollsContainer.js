import { connect } from 'react-redux';
import { getPolls } from '../../selectors/polls';
import { fetchPolls } from '../../actions/polls';
import withList from '../../components/withList';
import Poll from '../../components/polls/Poll';
import withFetch from '../../components/withFetch';

const mapStateToProps = state => ({
  list: getPolls(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchPolls())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(
  withList(Poll)
));
