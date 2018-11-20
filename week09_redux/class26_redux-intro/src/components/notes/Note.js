import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ note }) => {
  const { title, body } = note;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
