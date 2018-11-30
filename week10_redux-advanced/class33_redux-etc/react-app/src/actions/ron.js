import { getFacts as getFactsPromise, getRandomFact } from '../services/ronApi';

export const GET_RON_FACTS = 'GET_RON_FACTS';
export const fetchFacts = count => ({
  type: GET_RON_FACTS,
  payload: getFactsPromise(count)
});

export const GET_RANDOM_RON_FACT = 'GET_RANDOM_RON_FACT';
export const fetchRandomFact = () => ({
  type: GET_RANDOM_RON_FACT,
  payload: getRandomFact()
});
