export const getRandomImage = () => {
  return fetch('https://picsum.photos/300/200/?random', { redirect: 'manual' })
    .then(res => {
      return res.url;
    });
};
