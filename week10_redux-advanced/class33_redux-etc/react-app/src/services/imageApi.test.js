import { getRandomImage } from './imageApi';

describe('image api', () => {
  it('returns a random image url', () => {
    return getRandomImage()
      .then(image => {
        expect(image).toEqual(expect.stringMatching(/^https:\/\/picsum.photos\/300\/200\/\?image/));
      })
  });
})
