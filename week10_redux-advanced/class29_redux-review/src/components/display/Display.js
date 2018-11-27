import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ text, color, backgroundColor }) => {
  return (
    <h1 style={{ color, backgroundColor }}>{text}</h1>
  );
};

Display.propTypes = {
  text: PropTypes.string.isRequired
};

export default Display;
