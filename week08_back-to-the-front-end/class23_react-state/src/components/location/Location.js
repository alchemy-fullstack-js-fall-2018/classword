import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ result }) => {
  const { name, type, dimension } = result;
  return (
    <li>
      <h3>{name}</h3>
      <h4>{type}</h4>
      <h4>{dimension}</h4>
    </li>
  );
};

Location.propTypes = {

};

export default Location;
