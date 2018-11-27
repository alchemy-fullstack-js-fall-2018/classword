import { connect } from 'react-redux';
import Search from '../../components/search/Search';
import { getSearchTerm } from '../../selectors/search';
import { updateSearchTerm } from '../../actions/search';

const mapStateToProps = state => ({
  inputValue: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: ({ target }) => dispatch(updateSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
