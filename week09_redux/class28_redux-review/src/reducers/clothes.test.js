import reducer from './clothes';
import { UPDATE_CLOTHES_SEARCH_TERM } from '../actions/clothes';

describe('clothes reducer', () => {
  const state = {
    searchTerm: 'blue',
    list: [{ type: 'shirt', color: 'red' }]
  };

  it('returns an initialState', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('handles an UPDATE_CLOTHES_SEARCH_TERM and update the search term in state', () => {
    const newState = reducer(state, {
      type: UPDATE_CLOTHES_SEARCH_TERM,
      payload: 'red'
    });
    expect(newState).toEqual({ ...state, searchTerm: 'red' });
  });
});
