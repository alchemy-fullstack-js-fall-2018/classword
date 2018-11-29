import { fetchArtistsPromise, UPDATE_ARTISTS } from './artists';

jest.mock('../services/musicApi.js');

describe('artists actions', () => {
  it('has a promise as its payload', () => {
    const action = fetchArtistsPromise('SomeBand');
    expect(typeof action.payload.then).toEqual('function');
    expect(action.type).toEqual(UPDATE_ARTISTS);
  });
});
