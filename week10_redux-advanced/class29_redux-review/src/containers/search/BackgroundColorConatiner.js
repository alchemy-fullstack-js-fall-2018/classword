import { connect } from 'react-redux';
import Search from '../../components/search/Search';
import { getBackgroundColor } from '../../selectors/color';
import { updateBackgroundColor } from '../../actions/color';

const mapStateToProps = state => ({
  inputValue: getBackgroundColor(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: ({ target }) => dispatch(updateBackgroundColor(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
