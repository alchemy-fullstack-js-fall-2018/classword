import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Facts extends PureComponent {
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetchFacts: PropTypes.func.isRequired,
    imageSrc: PropTypes.string
  }

  state = {
    count: 100
  }

  fetchFacts = () => {
    this.props.fetchFacts(this.state.count);
  }

  componentDidMount() {
    this.fetchFacts();
  }

  changeCount = ({ target }) => {
    this.setState({ count: target.value }, () => {
      this.fetchFacts();
    });
  }

  render() {
    const { count } = this.state;
    const { facts, imageSrc } = this.props;
    console.log(imageSrc)

    const factsList = facts.map((fact, i) => {
      return (
        <li key={i}>
          {imageSrc && <img src={imageSrc} alt="randomImage" />}
          {fact}
        </li>
      );
    });

    return (
      <Fragment>
        <input type="number" value={count} onChange={this.changeCount} />
        <ul>
          {factsList}
        </ul>
      </Fragment>
    );
  }
}
