export const getEpisodes = page => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode?page=${page}`, {
    headers: { origin: null }
  })
    .then(res => res.json())
    .then(json => {
      const episodes = json.results.map(result => {
        return {
          id: result.id,
          title: result.name,
          episodeNumber: result.episode
        };
      });

      return {
        pages: json.info.pages,
        episodes
      };
    });
};
