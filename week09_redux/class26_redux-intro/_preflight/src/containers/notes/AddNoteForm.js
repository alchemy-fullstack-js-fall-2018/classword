import { connect } from 'react-redux';
import { addNote } from '../../actions/notes';
import NoteForm from '../../components/notes/NoteForm';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onSubmit(note) {
    dispatch(addNote(note));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
