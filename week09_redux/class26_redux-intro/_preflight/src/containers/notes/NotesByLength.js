import { connect } from 'react-redux';
import { getNotesByLength } from '../../selectors/notes';
import NotesList from '../../components/notes/NotesList';

const mapStateToProps = state => ({
  notes: getNotesByLength(state)
});

export default connect(
  mapStateToProps
)(NotesList);
