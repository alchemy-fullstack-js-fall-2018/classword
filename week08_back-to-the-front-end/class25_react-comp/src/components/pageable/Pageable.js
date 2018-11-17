import React, { Fragment } from 'react';

export default function Pageable({ currentPage, totalPages, updatePage }) {
  let previousButton = null;
  if(currentPage > 1) { // not on the first page
    previousButton = <button onClick={() => updatePage(currentPage - 1)}>Previous</button>;
  }

  let nextButton = null;
  if(currentPage < totalPages) { // not on last page
    nextButton = <button onClick={() => updatePage(currentPage + 1)}>Next</button>;
  }

  return (
    <Fragment>
      {previousButton}
      <span>{currentPage} out of {totalPages}</span>
      {nextButton}
    </Fragment>
  );
}
