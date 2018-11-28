import { UPDATE_SEARCH_TERM, UPDATE_ARTISTS } from '../actions/artists';

const initialState = {
  searchTerm: '',
  list: [
    { name: 'My Band', description: 'We are good!', id: '1234' },
    { name: 'Your Band', description: 'You are also good!', id: '5678' },
    { name: 'Their Band', description: 'They are no good!', id: '1235' }
  ]
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case UPDATE_ARTISTS:
      return { ...state, list: payload };
    default:
      return state;
  }
}
