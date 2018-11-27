import { createSelector } from 'reselect';

export const getWordsState = state => state.words;

export const getWordColor = state => {
  return getWordsState(state).color;
};

export const getBackgroundColor = state => {
  return getWordsState(state).backgroundColor;
};

export const getSearchTerm = state => {
  return getWordsState(state).searchTerm;
};

export const getWords = state => {
  return getWordsState(state).dictionary;
};

const getFilteredWordsSelector = (words, searchTerm) => {
  console.log('Selector called!');
  return selectorPerformance(badSelector.bind(null, words, searchTerm));
};

// export const getFilteredWords = state => {
//   return selectorPerformance(getFilteredWordsSelector.bind(null, getWords(state), getSearchTerm(state)));
// };

export const getFilteredWords = createSelector(
  getWords,
  getSearchTerm,
  getFilteredWordsSelector
);

function selectorPerformance(fn) {
  const start = performance.now();
  const results = fn();
  console.log('PERFORMANCE', performance.now() - start);
  return results;
}

function badSelector(words, searchTerm) {
  const filtered = [];
  for(let j = 0; j < words.length; j++) {
    if(!filtered.some(w => w === words[j]) && words[j].includes(searchTerm)) {
      filtered.push(words[j]);
    }
  }
  return filtered;
}

function normalSelector(words, searchTerm) {
  return words.filter(word => word.includes(searchTerm));
}
