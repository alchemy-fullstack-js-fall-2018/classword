import React, { Fragment } from 'react';

const Search = ({ inputValue, onChangeInput }) => {
  return (
    <Fragment>
      <input value={inputValue} onChange={onChangeInput} />
    </Fragment>
  );
};

export default Search;
