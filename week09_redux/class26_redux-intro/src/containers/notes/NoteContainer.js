import { connect } from 'react-redux';
import Note from '../../components/notes/Note';
import { getNote } from '../../selectors/notes';

const mapStateToProps = (state, props) => {
  return {
    note: getNote(state, props.match.params.id)
  };
};

export default connect(
  mapStateToProps
)(Note);
