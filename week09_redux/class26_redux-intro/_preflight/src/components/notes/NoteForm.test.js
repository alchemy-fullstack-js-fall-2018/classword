import React from 'react';
import { shallow } from 'enzyme';
import NoteForm from './NoteForm';

jest.mock('../../routes/routes.js');

describe('NoteForm', () => {
  let handleSubmit = jest.fn();
  let wrapper;
  beforeEach(() => {

    wrapper = shallow(<NoteForm onSubmit={handleSubmit} />);
  });

  it('renders a NoteForm component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays a note title', () => {
    wrapper.find('input').simulate('change', { target: { name: 'title', value: 'hi there' } });
    wrapper.find('input').simulate('change', { target: { name: 'body', value: 'This is a note' } });

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(handleSubmit.mock.calls[0][0]).toEqual({
      title: 'hi there',
      body: 'This is a note'
    });
  });
});
