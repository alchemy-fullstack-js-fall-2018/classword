export const UPDATE_SEARCH_COLOR = 'UPDATE_SEARCH_COLOR';
export const updateSearchColor = color => ({
  type: UPDATE_SEARCH_COLOR,
  payload: color
});

export const UPDATE_BACKGROUND_COLOR = 'UPDATE_BACKGROUND_COLOR';
export const updateBackgroundColor = backgroundColor => ({
  type: UPDATE_BACKGROUND_COLOR,
  payload: backgroundColor
});
