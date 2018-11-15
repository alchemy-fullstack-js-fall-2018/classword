const getResource = (page, resource) => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/${resource}?page=${page}`, {
    headers: { origin: null }
  })
    .then(res => res.json())
    .then(json => ({
      total: json.info.pages,
      results: json.results
    }));
};

export const getCharacters = page => {
  return getResource(page, 'character');
};

export const getLocations = page => {
  return getResource(page, 'location');
};;
