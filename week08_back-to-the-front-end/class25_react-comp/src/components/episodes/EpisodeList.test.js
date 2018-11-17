import React from 'react';
import { shallow } from 'enzyme';
import EpisodeList from './EpisodeList';

describe('EpisodeList', () => {
  it('renders an EpisodeList', () => {
    const wrapper = shallow(<EpisodeList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('is a pageable list', () => {
    const wrapper = shallow(<EpisodeList />);
    expect(wrapper.find('Pageable')).toHaveLength(1);
  });
});
