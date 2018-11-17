import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function Episode({ id, title, episodeNumber }) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{episodeNumber}</h4>
      <Link to={ROUTES.EPISODE.linkPath(id)}>Link</Link>
    </div>
  );
}
