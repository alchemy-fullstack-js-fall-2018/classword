import { connect } from 'react-redux';
import { getNotes } from '../../selectors/notes';
import NotesList from '../../components/notes/NotesList';

const mapStateToProps = state => ({
  notes: getNotes(state)
});

export default connect(
  mapStateToProps
)(NotesList);
