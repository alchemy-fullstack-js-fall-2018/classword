import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Note = ({ note }) => {
  if(!note) return <Redirect to={ROUTES.HOME.linkTo()} />;

  const { title, body } = note;
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
