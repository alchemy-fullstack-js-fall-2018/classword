import colorReducer from './color';
import { UPDATE_SEARCH_COLOR, UPDATE_BACKGROUND_COLOR } from '../actions/color';

describe('color reducer', () => {
  const initialState = {
    color: 'black',
    backgroundColor: 'red'
  };

  it('handles the UPDATE_SEARCH_COLOR action', () => {
    const newState = colorReducer(initialState, {
      type: UPDATE_SEARCH_COLOR,
      payload: 'purple'
    });

    expect(newState.color).toEqual('purple');
  });

  it('handles the UPDATE_BACKGROUND_COLOR action', () => {
    const newState = colorReducer(initialState, {
      type: UPDATE_BACKGROUND_COLOR,
      payload: 'green'
    });

    expect(newState.backgroundColor).toEqual('green');
  });

  it('ignore actions it does not know about', () => {
    const newState = colorReducer(initialState, {
      type: 'MADE_UP_TYPE',
      payload: 'purple'
    });

    expect(newState).toEqual(initialState);
  });
});
