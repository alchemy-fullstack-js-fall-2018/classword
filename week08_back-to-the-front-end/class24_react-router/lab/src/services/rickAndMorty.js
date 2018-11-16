import queryString from 'querystring';

export const getCharacters = (page, query = {}) => {
  const queryStr = queryString.stringify({ page, ...query });
  return fetch(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character?${queryStr}`, {
    headers: { origin: null }
  })
    .then(res => res.json());
};
