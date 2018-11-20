import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Pizzas extends PureComponent {
  static propTypes = {
    pizzas: PropTypes.array.isRequired,
    sellPizza: PropTypes.func
  };

  state = {
    price: 15.25
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { pizzas, sellPizza } = this.props;

    const pizzaComponents = pizzas.map(pizza => {
      return (
        <li key={pizza.created}>
          {pizza.pizzaType}
          {sellPizza && <button onClick={() => sellPizza(this.state.price)}>Sell</button>}
        </li >
      );
    });
    return (
      <Fragment>
        <input type="number" name="price" value={this.state.price} onChange={this.handleChange} />
        <ul>
          {pizzaComponents}
        </ul>
      </Fragment>
    );
  }
}
