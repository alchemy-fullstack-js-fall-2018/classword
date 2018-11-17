import React from 'react';
import { shallow } from 'enzyme';
import Episode from './Episode';
import { MemoryRouter } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

describe('Episode', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Episode id="1234" title="My Episode" />);
  });

  it('renders an Episode', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays the title', () => {
    const wrapperWithRouter = shallow(
      <MemoryRouter>
        <Episode id="1234" title="My Episode" />
      </MemoryRouter>
    );
    expect(wrapperWithRouter.html()).toContain('My Episode');
  });

  it('links to an EpisodeDetail', () => {
    expect(wrapper.find('Link').props().to).toEqual(ROUTES.EPISODE.linkPath('1234'));
  });
});
