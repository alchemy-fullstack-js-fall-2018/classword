import React, { PureComponent } from 'react';

export default class Pure extends PureComponent {
  componentDidUpdate() {
    console.log(this.constructor.name, 'Component Updated');
  }

  render() {
    console.log(this.constructor.name, 'Component rendered');
    const { title } = this.props;
    return (
      <h1>Pure - {title}</h1>
    );
  }
}
