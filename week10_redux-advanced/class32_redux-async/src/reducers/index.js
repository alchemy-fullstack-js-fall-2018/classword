import { combineReducers } from 'redux';
import artists from './artists';
import works from './works';

export default combineReducers({
  artists,
  works
});
