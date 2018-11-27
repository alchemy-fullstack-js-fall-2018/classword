import { UPDATE_BACKGROUND_COLOR, UPDATE_SEARCH_COLOR } from '../actions/color';

const initialState = {
  color: 'black',
  backgroundColor: 'white'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_COLOR:
      return { ...state, color: action.payload };
    case UPDATE_BACKGROUND_COLOR:
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
}
