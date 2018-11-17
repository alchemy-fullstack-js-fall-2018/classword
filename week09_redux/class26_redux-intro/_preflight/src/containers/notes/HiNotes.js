import { connect } from 'react-redux';
import { getSearchNotes } from '../../selectors/notes';
import NotesList from '../../components/notes/NotesList';

const mapStateToProps = state => ({
  notes: getSearchNotes(state, 'Hi')
});

export default connect(
  mapStateToProps
)(NotesList);
