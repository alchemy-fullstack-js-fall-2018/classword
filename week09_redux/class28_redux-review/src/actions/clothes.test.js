import {
  updateClothesSearchTerm,
  UPDATE_CLOTHES_SEARCH_TERM
} from './clothes';

describe('clothes actions', () => {
  it('creates an action to update the clothes search term', () => {
    expect(updateClothesSearchTerm('shirt')).toEqual({
      type: UPDATE_CLOTHES_SEARCH_TERM,
      payload: 'shirt'
    });
  });
});
