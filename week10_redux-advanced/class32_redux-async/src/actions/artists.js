import { getArtists } from '../services/musicApi';

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  payload: searchTerm
});

const longPromise = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
};

export const NOOP = 'NOOP';
export const noop = () => ({
  type: NOOP,
  payload: longPromise()
});

export const ARTISTS_LOAD_START = 'ARTISTS_LOAD_START';
export const ARTISTS_LOAD_END = 'ARTISTS_LOAD_END';
export const UPDATE_ARTISTS = 'UPDATE_ARTISTS';
export const fetchArtistsPromise = searchTerm => ({
  type: UPDATE_ARTISTS,
  loadStart: ARTISTS_LOAD_START,
  loadEnd: ARTISTS_LOAD_END,
  payload: getArtists(searchTerm)
});

export const fetchArtistsThunk = searchTerm => dispatch => {
  dispatch({ type: ARTISTS_LOAD_START });
  return getArtists(searchTerm)
    .then(artists => {
      dispatch({
        type: UPDATE_ARTISTS,
        payload: artists
      });
      dispatch({ type: ARTISTS_LOAD_END });
    });
};
