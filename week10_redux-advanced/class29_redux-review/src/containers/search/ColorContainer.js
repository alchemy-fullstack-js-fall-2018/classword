import { connect } from 'react-redux';
import Search from '../../components/search/Search';
import { getSearchColor } from '../../selectors/color';
import { updateSearchColor } from '../../actions/color';

const mapStateToProps = state => ({
  inputValue: getSearchColor(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: ({ target }) => dispatch(updateSearchColor(target.value))
  // onChangeInput({ target }) {
  //   dispatch(updateSearchColor(target.value));
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
