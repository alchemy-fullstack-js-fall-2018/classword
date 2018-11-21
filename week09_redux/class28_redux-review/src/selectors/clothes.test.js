import {
  getClothes,
  getTotalClothes,
  getClothesSearchTerm,
  getFilteredClothes
} from './clothes';

describe('clothes selector', () => {
  const state = {
    clothes: {
      searchTerm: 'blue',
      list: {
        abcd1234: { type: 'shirt', color: 'blue' },
        decf6789: { type: 'jeans', color: 'red' }
      }
    }
  };

  it('gets all clothes from state', () => {
    const allClothes = getClothes(state);
    [
      { type: 'jeans', color: 'red', id: 'decf6789' },
      { type: 'shirt', color: 'blue', id: 'abcd1234' },
    ].forEach(c => {
      expect(allClothes).toContainEqual(c);
    });
  });

  it('gets the total amount of clothes', () => {
    expect(getTotalClothes(state)).toEqual(2);
  });

  it('gets the searchTerm from state', () => {
    expect(getClothesSearchTerm(state)).toEqual('blue');
  });

  describe('getFilteredClothes', () => {
    it('gets clothes filterd by color', () => {
      expect(getFilteredClothes(state)).toEqual([
        { type: 'shirt', color: 'blue', id: 'abcd1234' }
      ]);
    });

    it('gets clothes filtered by type', () => {
      const typeState = {
        clothes: { ...state.clothes, searchTerm: 'jeans' }
      };
      expect(getFilteredClothes(typeState)).toEqual([
        { type: 'jeans', color: 'red', id: 'decf6789' }
      ]);
    });

    it('gets clothes filtered by id', () => {
      const idState = {
        clothes: { ...state.clothes, searchTerm: '67' }
      };
      expect(getFilteredClothes(idState)).toEqual([
        { type: 'jeans', color: 'red', id: 'decf6789' }
      ]);
    });
  });

});
