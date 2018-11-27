import { UPDATE_WORD_COLOR, UPDATE_BACKGROUND_COLOR, UPDATE_SEARCH_TERM } from '../actions/words';
import words from './fixtures/words.json';

const initialState = {
  searchTerm: 'x',
  color: 'black',
  backgroundColor: 'white',
  dictionary: words
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_WORD_COLOR:
      return { ...state, color: payload };
    case UPDATE_BACKGROUND_COLOR:
      return { ...state, backgroundColor: payload };
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}
