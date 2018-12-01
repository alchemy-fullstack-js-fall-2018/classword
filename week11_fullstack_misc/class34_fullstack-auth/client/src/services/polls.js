const get = url => {
  return fetch(url)
    .then(res => res.json());
};

const post = (url, body) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(res => res.json());
};

export const getPolls = () => {
  return get('/api/polls');
};

export const getPoll = id => {
  return get(`/api/polls/${id}`);
};

export const getResults = id => {
  return get(`/api/polls/${id}/results`);
};

export const postPoll = poll => {
  return post('/api/polls', poll);
};

export const postVotes = (id, votes) => {
  const votesByCandidate = votes.reduce((acc, { id, vote }) => {
    acc[id] = vote;
    return acc;
  }, {});

  return post(`/api/polls/${id}/votes`, votesByCandidate);
};
