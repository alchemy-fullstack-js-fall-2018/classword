import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/routes';

const NoteList = ({ notes, header }) => {
  const noteComponents = notes.map(note => {
    return <Link key={note.id} to={ROUTES.NOTE.linkTo(note.id)}>{note.title}</Link>;
  });

  return (
    <div>
      <h3>{header}</h3>
      <ul>
        {noteComponents}
      </ul>
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired
};

export default NoteList;
