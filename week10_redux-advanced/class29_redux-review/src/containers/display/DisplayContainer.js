import { connect } from 'react-redux';
import { getSearchTerm } from '../../selectors/search';
import { getSearchColor, getBackgroundColor } from '../../selectors/color';
import Display from '../../components/display/Display';


const mapStateToProps = state => ({
  text: getSearchTerm(state),
  color: getSearchColor(state),
  backgroundColor: getBackgroundColor(state)
});

export default connect(
  mapStateToProps
)(Display);
