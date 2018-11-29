const artists = {
  1234: { name: 'My Band', description: 'We are good', id: '1234' },
  5678: { name: 'Your Band', description: 'You are good', id: '5678' }
};

export const getArtists = () => {
  return Promise.resolve(Object.values(artists));
};

export const getArtistWorks = id => {
  return Promise.resolve(artists[id]);
};
