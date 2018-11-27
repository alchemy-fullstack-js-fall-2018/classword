import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

export default store;






// connect from react-redux
// store.subscribe(() => {
//   console.log('STATE UPDATED');
// });

// console.log(store.getState());

// store.dispatch(updateSearchTerm('new search term'));
// console.log(store.getState());

// console.log('with selector', getSearchTerm(store.getState()));
