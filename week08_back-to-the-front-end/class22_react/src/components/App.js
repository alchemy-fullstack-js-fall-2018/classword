import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

export default class App extends Component {
  static propTypes = {
    myVariable: PropTypes.string.isRequired
  };

  state = {
    headerTitle: 'Hi this is from state',
    anotherHeaderTitle: 'Another title'
  };

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const links = ['about', 'blog'].map(link => {
      return <a key={link} href={`#${link}`}>{link}</a>;
    });

    return (
      <Fragment>
        <input name="headerTitle" value={this.state.headerTitle} onChange={this.onInputChange} />
        <Header title={this.state.headerTitle} />

        <input name="anotherHeaderTitle" value={this.state.anotherHeaderTitle} onChange={this.onInputChange} />
        <Header title={this.state.anotherHeaderTitle} />
        {links}
      </Fragment>
    );
  }
}
