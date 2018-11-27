import {
  updateSearchColor,
  UPDATE_SEARCH_COLOR,
  updateBackgroundColor,
  UPDATE_BACKGROUND_COLOR
} from './color';

describe('color actions', () => {
  it('can create an update search color action', () => {
    const action = updateSearchColor('purple');

    expect(action).toEqual({
      type: UPDATE_SEARCH_COLOR,
      payload: 'purple'
    });
  });

  it('can create an update background color action', () => {
    const action = updateBackgroundColor('purple');

    expect(action).toEqual({
      type: UPDATE_BACKGROUND_COLOR,
      payload: 'purple'
    });
  });
});
