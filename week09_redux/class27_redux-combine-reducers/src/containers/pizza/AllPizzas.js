import { connect } from 'react-redux';
import Pizzas from '../../components/pizza/Pizzas';
import { getPizzas } from '../../selectors/pizza';
import { sellCheesePizza } from '../../actions/pizza';

const mapStateToProps = state => ({
  pizzas: getPizzas(state)
});

const mapDispatchToProps = dispatch => ({
  sellPizza: (price) => dispatch(sellCheesePizza(new Date(), price))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pizzas);
