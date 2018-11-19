import { connect } from 'react-redux';
import { getNotesByTitle } from '../../selectors/notes';
import NotesList from '../../components/notes/NotesList';

const mapStateToProps = state => ({
  notes: getNotesByTitle(state)
});

export default connect(
  mapStateToProps
)(NotesList);
