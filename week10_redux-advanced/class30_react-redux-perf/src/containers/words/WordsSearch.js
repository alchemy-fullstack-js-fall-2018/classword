import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getWordColor, getBackgroundColor, getSearchTerm, getFilteredWords } from '../../selectors/words';
import { updateColor, updateBackgroundColor, updateSearchTerm } from '../../actions/words';

const mapStateToProps = state => ({
  color: getWordColor(state),
  backgroundColor: getBackgroundColor(state),
  searchTerm: getSearchTerm(state),
  words: getFilteredWords(state)
});

const mapDispatchtoProps = dispatch => ({
  updateColor({ target }) {
    dispatch(updateColor(target.value));
  },

  updateBackgroundColor({ target }) {
    dispatch(updateBackgroundColor(target.value));
  },

  updateSearchTerm({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Words);
