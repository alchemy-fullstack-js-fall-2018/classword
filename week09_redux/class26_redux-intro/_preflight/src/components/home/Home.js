import React, { Fragment } from 'react';
import AddNoteForm from '../../containers/notes/AddNoteForm';
import AllNotes from '../../containers/notes/AllNotes';

export default function Home() {
  return (
    <Fragment>
      <AddNoteForm />
      <AllNotes />
    </Fragment>
  );
}
