import { getArtists } from '../services/musicApi';

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  payload: searchTerm
});

export const NOOP = 'NOOP';
export const noop = () => ({
  type: NOOP
});


export const UPDATE_ARTISTS = 'UPDATE_ARTISTS';
export const fetchArtists = searchTerm => dispatch => {
  getArtists(searchTerm, 0)
    .then(results => {
      dispatch({
        type: UPDATE_ARTISTS,
        payload: results.artists
      });
    });
};

export const fetchArtists = searchTerm => ({
  type: UPDATE_ARTISTS,
  payload: getArtists
})
