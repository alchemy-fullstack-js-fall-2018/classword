import reducer from './artists';
import { UPDATE_ARTISTS } from '../actions/artists';

describe('artists reducer', () => {
  const state = {
    searchTerm: '',
    loading: false,
    pages: 0,
    list: [
      { name: 'My Band', description: 'We are good!', id: '1234' },
      { name: 'Your Band', description: 'You are also good!', id: '5678' },
      { name: 'Their Band', description: 'They are no good!', id: '1235' }
    ]
  };

  it('handles UPDATE_ARTISTS action', () => {
    reducer(state, {
      type: UPDATE_ARTISTS, payload: [
        { name: 'A different band', description: 'No Good', id: '878343' }
      ]
    });
  });
});
