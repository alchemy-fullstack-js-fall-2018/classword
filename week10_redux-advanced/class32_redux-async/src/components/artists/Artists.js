import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

const Artists = ({ artists, searchTerm, updateSearchTerm, artistSearch }) => {
  return (
    <>
      <SearchForm searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        onSearch={artistSearch} />
      <ul>
        {artists.map(({ id, name, description }) => <li key={id}>{name} - {description}</li>)}
      </ul>
    </>
  );
};

Artists.propTypes = {
  artists: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  artistSearch: PropTypes.func.isRequired
};

export default Artists;
