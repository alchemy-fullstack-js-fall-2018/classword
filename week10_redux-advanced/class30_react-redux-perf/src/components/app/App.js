import React, { Component, Fragment } from 'react';
import Comp from '../comp/Comp';
import Pure from '../pure/Pure';
import Func from '../func/Func';
import WordsSearch from '../../containers/words/WordsSearch';

export default class App extends Component {
  state = {
    title: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title } = this.state;
    return (
      <Fragment>
        <input name="title" value={title} onChange={this.handleChange} />
        <Comp title="My Title" />
        <Pure title="My Title" />
        <Func title="My Title" />
        <WordsSearch />
      </Fragment>
    );
  }
}
