import { connect } from 'react-redux';
import { getFacts } from '../../selectors/ron';
import { fetchFacts } from '../../actions/ron';
import Facts from '../../components/facts/Facts'

export default connect(
  state => ({ facts: getFacts(state) }),
  dispatch => ({
    fetchFacts: (count) => dispatch(fetchFacts(count))
  })
)(Facts)
