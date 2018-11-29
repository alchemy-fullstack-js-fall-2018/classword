import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchTerm, updateSearchTerm, onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="searchTerm" value={searchTerm} onChange={updateSearchTerm} />
      <button>Search</button>
    </form >
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  initialSearchTerm: PropTypes.string
};

export default SearchForm;
