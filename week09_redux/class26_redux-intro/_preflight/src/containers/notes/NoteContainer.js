import { connect } from 'react-redux';
import { getNote } from '../../selectors/notes';
import Note from '../../components/notes/Note';

const mapStateToProps = (state, props) => ({
  note: getNote(state, props.match.params.id)
});

export default connect(
  mapStateToProps
)(Note);
