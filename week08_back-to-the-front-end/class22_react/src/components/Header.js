import React, { Component } from 'react';
import PropTypes from 'prop-types';

import alchemy from '../assets/alchemy.png';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  render() {
    return (
      <header>
        <img src={alchemy} />
        <h1>{this.props.title || 'Default Title'}</h1>
      </header>

    );
  }
}
