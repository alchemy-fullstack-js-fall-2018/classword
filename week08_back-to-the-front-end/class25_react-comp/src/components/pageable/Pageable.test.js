import React from 'react';
import Pageable from './Pageable';
import { shallow } from 'enzyme';
import { wrap } from 'module';


describe('Pageable', () => {
  it('has the currentPage rendered', () => {
    const currentPage = 2;
    const wrapper = shallow(<Pageable currentPage={currentPage} />);
    expect(wrapper.html()).toContain(currentPage);
  });

  it('displays the total pages', () => {
    const totalPages = 10;
    const wrapper = shallow(<Pageable currentPage={1} totalPages={totalPages} />);
    expect(wrapper.html()).toContain(totalPages);
  });

  it('has a button to go to the previous page', () => {
    const wrapper = shallow(<Pageable currentPage={2} totalPages={10} />);
    expect(wrapper.find('button').at(0).text()).toEqual('Previous');
  });

  it('has a button to go to the next page', () => {
    const wrapper = shallow(<Pageable currentPage={2} totalPages={10} />);
    expect(wrapper.find('button').at(1).text()).toEqual('Next');
  });

  it('decrements the currentPage when previous is clicked', () => {
    const updatePageFn = jest.fn();
    const wrapper = shallow(<Pageable currentPage={10}
      totalPages={10}
      updatePage={updatePageFn} />);

    wrapper.find('button').at(0).simulate('click');

    expect(updatePageFn.mock.calls[0][0]).toEqual(9);

  });

  it('increments the currentPage when next is clicked', () => {
    const updatePageFn = jest.fn();
    const wrapper = shallow(<Pageable currentPage={10}
      totalPages={20}
      updatePage={updatePageFn} />);

    wrapper.find('button').at(1).simulate('click');

    expect(updatePageFn.mock.calls[0][0]).toEqual(11);
  });

  it('the previous button is not displayed on the first page', () => {
    const wrapper = shallow(<Pageable currentPage={1}
      totalPages={20}
      updatePage={() => { }} />);

    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').at(0).text()).toEqual('Next');
  });

  it('the next button is not displayed on the last page', () => {
    const wrapper = shallow(<Pageable currentPage={20}
      totalPages={20}
      updatePage={() => { }} />);

    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').at(0).text()).toEqual('Previous');
  });
});
