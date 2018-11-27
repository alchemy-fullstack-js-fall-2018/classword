import {
  UPDATE_SEARCH_TERM,
} from '../actions/search';

const initialState = {
  searchTerm: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}
