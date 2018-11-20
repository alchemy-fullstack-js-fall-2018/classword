import AllPizzas from './containers/pizza/AllPizzas';
import AllTransactions from './containers/transactions/AllTransactions';
export default {
  ALL_PIZZA: {
    path: '/',
    Component: AllPizzas,
    linkTo: () => '/'
  },
  TRANSACTIONS: {
    path: '/transactions',
    Component: AllTransactions,
    linkTo: () => '/transactions'
  }
};
