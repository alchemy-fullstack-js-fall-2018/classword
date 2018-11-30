import { getRandomImage } from '../services/imageApi';

export const SET_RANDOM_IMAGE = 'SET_RANDOM_IMAGE';
export const setRandomImage = () => ({
  type: SET_RANDOM_IMAGE,
  payload: getRandomImage()
});
