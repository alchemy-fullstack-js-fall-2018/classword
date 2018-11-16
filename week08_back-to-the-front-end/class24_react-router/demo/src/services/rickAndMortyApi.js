import queryString from 'querystring';

const getResource = (page, resource, query) => {
  const queryStr = queryString.stringify({ page, ...query });
  return fetch(`https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/${resource}?${queryStr}`, {
    headers: { origin: null }
  })
    .then(res => res.json())
    .then(json => ({
      total: json.info.pages,
      results: json.results
    }));
};

export const getCharacters = (page, query = {}) => {
  return getResource(page, 'character', query);
};

export const getLocations = (page, query = {}) => {
  return getResource(page, 'location', query);
};
