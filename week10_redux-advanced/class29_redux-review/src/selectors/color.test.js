import { getBackgroundColor, getSearchColor } from './color';
describe('color selector', () => {
  const state = {
    color: {
      color: 'black',
      backgroundColor: 'red'
    }
  };

  it('gets a search color from state', () => {
    expect(getSearchColor(state)).toEqual('black');
  });

  it('gets a background color from state', () => {
    expect(getBackgroundColor(state)).toEqual('red');
  });
});
