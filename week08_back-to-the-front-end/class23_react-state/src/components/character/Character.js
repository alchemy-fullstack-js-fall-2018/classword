import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ result }) => {
  const { name, species, image } = result;
  return (
    <li>
      <h3>{name}</h3>
      <h4>{species}</h4>
      <img src={image} />
    </li>
  );
};

Character.propTypes = {

};

export default Character;
