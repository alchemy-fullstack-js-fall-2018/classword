import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

jest.mock('../../routes/routes.js');

describe('Note', () => {
  const note = { title: 'Hi There', body: 'You there' };
  const wrapper = shallow(<Note note={note} />);

  it('renders a Note component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays a note title', () => {
    expect(wrapper.html()).toContain(note.title);
  });

  it('displays a note body', () => {
    expect(wrapper.html()).toContain(note.body);
  });
});
