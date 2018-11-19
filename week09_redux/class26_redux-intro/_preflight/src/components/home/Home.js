import React from 'react';
import AddNoteForm from '../../containers/notes/AddNoteForm';
import AllNotes from '../../containers/notes/AllNotes';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.noteForm}>
        <AddNoteForm />
      </div>

      <div className={styles.notes}>
        <AllNotes />
      </div>
    </div>
  );
}
