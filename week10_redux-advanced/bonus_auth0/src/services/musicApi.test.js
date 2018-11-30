import mockArtistSearchJson from './fixtures/artistsSearch.json';
import mockArtistJson from './fixtures/artist.json';
import { getArtists, getArtistWorks } from './musicApi';

jest.mock('./request.js', () => ({
  get: url => {
    if(url.startsWith('http://musicbrainz.org/ws/2/artist?query=')) {
      return Promise.resolve(mockArtistSearchJson);
    } else if(url.startsWith('http://musicbrainz.org/ws/2/artist/')) {
      return Promise.resolve(mockArtistJson);
    } else {
      return Promise.reject({ error: '404' });
    }
  }
}));

describe('musicApi service', () => {
  describe('getArtists', () => {
    it('has a pages key with the total pages', () => {
      return getArtists('Nirvana', 0)
        .then(artists => {
          expect(artists.pages).toEqual(2);
        });
    });

    it('has a list of artists with name, description, id', () => {
      return getArtists('Nirvana', 0)
        .then(artists => {
          artists.artists.forEach(artist => {
            expect(artist).toEqual(expect.objectContaining({
              name: expect.any(String),
              description: expect.any(String) || undefined,
              id: expect.any(String)
            }));
          });
        });
    });
  });

  describe('getArtist', () => {
    it('has an artist with id, name, and works', () => {
      return getArtistWorks('5b11f4ce-a62d-471e-81fc-a69a8278c7da')
        .then(artist => {
          expect(artist).toEqual({
            id: '5b11f4ce-a62d-471e-81fc-a69a8278c7da',
            name: 'Nirvana',
            works: expect.any(Array)
          });
        });
    });
  });
});
