import { SET_RANDOM_IMAGE } from '../actions/image';

const initialState = 'https://via.placeholder.com/150';

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_RANDOM_IMAGE:
      return payload;
    default:
      return state;
  }
}
