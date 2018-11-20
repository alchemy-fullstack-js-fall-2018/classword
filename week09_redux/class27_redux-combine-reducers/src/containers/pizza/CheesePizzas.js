import { connect } from 'react-redux';
import Pizzas from '../../components/pizza/Pizzas';
import { getCheesePizzas } from '../../selectors/pizza';

const mapStateToProps = state => ({
  pizzas: getCheesePizzas(state)
});

export default connect(
  mapStateToProps
)(Pizzas);
