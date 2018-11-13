import React from 'react';
import Header from './Header';
import render from 'react-test-renderer';

describe('Header', () => {
  test('header snapshot', () => {
    expect(render
      .create(<Header title="my title" />)
      .toJSON()).toMatchSnapshot();
  });

  test('header snapshot with default title', () => {
    expect(render
      .create(<Header />)
      .toJSON()).toMatchSnapshot();
  });
});
