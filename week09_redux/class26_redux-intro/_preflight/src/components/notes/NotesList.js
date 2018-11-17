import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Notes.css';

const Notes = ({ notes }) => {
  const notesComponents = notes.map(({ id, title }) =>
    <Link className={styles.noteItem} key={id} to={ROUTES.NOTE.linkTo(id)}>{title}</Link>);
  return (
    <div className={styles.notes}>
      <h3>Notes</h3>
      <div className={styles.notesList}>
        {notesComponents.length > 0 ?
          notesComponents :
          <p>no notes!</p>}
      </div>
    </div>
  );
};

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;
