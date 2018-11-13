import Header from './Header';

describe('Header Component', () => {
  it('should be a header', () => {
    const header = new Header({
      links: ['about']
    });

    expect(header.render()).toMatchSnapshot();
  });
});
