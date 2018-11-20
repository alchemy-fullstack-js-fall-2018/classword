import { connect } from 'react-redux';
import { getNotes } from '../../selectors/notes';
import NoteList from '../../components/notes/NoteList';

const mapStateToProps = state => {
  return {
    notes: getNotes(state),
    header: 'All Notes'
  };
};

export default connect(mapStateToProps)(NoteList);
