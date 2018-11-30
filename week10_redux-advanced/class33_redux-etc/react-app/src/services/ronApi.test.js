import { getFacts, getRandomFact } from './ronApi';

describe('ron api', () => {
  it('gets a list of facts', () => {
    return getFacts(10)
      .then(facts => {
        expect(facts).toHaveLength(10)
      });
  })

  it('gets a random fact', () => {
    return getRandomFact()
      .then(fact => {
        expect(fact).toEqual(expect.any(String));
      })
  });
});
