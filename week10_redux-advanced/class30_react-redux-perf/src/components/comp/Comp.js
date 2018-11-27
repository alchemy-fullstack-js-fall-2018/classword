import React, { Component } from 'react';

export default class Comp extends Component {
  componentDidUpdate() {
    console.log(this.constructor.name, 'Component Updated');
  }

  render() {
    console.log(this.constructor.name, 'Component rendered');
    const { title } = this.props;
    return (
      <h1>Comp - {title}</h1>
    );
  }
}
