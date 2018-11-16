import React from 'react';
import { getLocations } from '../../services/rickAndMortyApi';
import Pageable from '../pagable/Pageable';

export const Location = ({ result }) => {
  const { name, type, dimension } = result;
  return (
    <li>
      <h3>{name}</h3>
      <h4>{type}</h4>
      <h4>{dimension}</h4>
    </li>
  );
};

export const PageableLocations = () => {
  return <Pageable
    resultsFn={getLocations}
    resultsQuery={{}}
    ResultComponent={Location} />;
};
