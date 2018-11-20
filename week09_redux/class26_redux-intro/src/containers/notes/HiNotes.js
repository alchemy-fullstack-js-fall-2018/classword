import { connect } from 'react-redux';
import { getNotesBySearchTerm } from '../../selectors/notes';
import NoteList from '../../components/notes/NoteList';

const mapStateToProps = state => {
  return {
    notes: getNotesBySearchTerm(state, 'Hi'),
    header: 'Hi Notes'
  };
};

export default connect(mapStateToProps)(NoteList);
