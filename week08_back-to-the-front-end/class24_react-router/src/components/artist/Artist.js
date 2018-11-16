import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function Artist({ name, description, id }) {
  return (
    <div>
      <h3>{name} - {description}</h3>
      <Link to={ROUTES.ARTIST.linkTo(id)}>Get Details</Link>
    </div>
  );
}
