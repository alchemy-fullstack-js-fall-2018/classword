import { getFacts } from './ron';

describe('ron selectors', () => {
  const facts = [
    'There must be a mistake, you\'ve accidentally given me the food that my food eats.',
    'America: The only country that matters. If you want to experience other ‘cultures,’ use an atlas or a ham radio.',
    'I love riddles!',
    'People who buy things are suckers.',
    'I\'ve cried twice in my life. Once when I was seven and hit by a school bus. And then again when I heard that Li\'l Sebastian has passed.'
  ]
  const state = {
    ron: facts
  }

  it('selects a list of facts', () => {
    expect(getFacts(state)).toEqual(facts)
  })
});
