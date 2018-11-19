import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import NotesList from './NotesList';

jest.mock('../../routes/routes.js', () => ({
  ROUTES: {
    NOTE: {
      linkTo: () => '/'
    }
  }
}));

describe('NotesList', () => {
  const notes = [{ id: '1234', title: 'hi there' }];

  it('renders a NoteList component', () => {
    const wrapper = shallow(<NotesList notes={notes} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('displays no notes if the notes list is empty', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <NotesList notes={[]} />
      </MemoryRouter>);

    expect(wrapper.html()).toContain('no notes!');
  });

  it('displays notes if the notes is not empty', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <NotesList notes={notes} />
      </MemoryRouter>);
    expect(wrapper.html()).toContain('hi there');
  });
});
