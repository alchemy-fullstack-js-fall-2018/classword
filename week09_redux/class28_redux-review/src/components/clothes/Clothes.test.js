import React from 'react';
import { shallow } from 'enzyme';
import Clothes from './Clothes';

describe('Clothes component', () => {
  const clothes = [
    { type: 'shirt', color: 'red', id: 'abcd1234' }
  ];
  it('matches a snapshot', () => {
    expect(true);
    const wrapper = shallow(<Clothes
      clothes={clothes}
      totalClothes={10} />);
    expect(wrapper).toMatchSnapshot();
  });
});
