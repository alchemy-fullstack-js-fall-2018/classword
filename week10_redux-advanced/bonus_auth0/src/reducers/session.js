import { UPDATE_AUTH_TOKEN, UPDATE_SESSION_USER } from '../actions/session';

const initialState = {
  authToken: null,
  user: null,
  management: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_AUTH_TOKEN:
      return { ...state, authToken: action.payload };
    case UPDATE_SESSION_USER:
      return { ...state, user: action.user, management: action.management };
    default:
      return state;
  }
}
