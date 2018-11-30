export const UPDATE_AUTH_TOKEN = 'UPDATE_AUTH_TOKEN';
export const updateAuthToken = authToken => ({
  type: UPDATE_AUTH_TOKEN,
  payload: authToken
});

export const UPDATE_SESSION_USER = 'UPDATE_SESSION_USER';
export const updateSessionProfile = (user, management) => ({
  type: UPDATE_SESSION_USER,
  user,
  management
});
