export const API_URL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

const get = url => {
  return fetch(url)
    .then(res => res.json());
};

export const getFacts = count => {
  return get(`${API_URL}/${count}`)
}

export const getRandomFact = () => {
  return get(API_URL)
    .then(facts => facts[0]);
}
