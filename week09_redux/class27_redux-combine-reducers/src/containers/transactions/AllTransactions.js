import { connect } from 'react-redux';
import Transactions from '../../components/transactions/Transactions';
import { getTransactions, getGrossRevenue } from '../../selectors/transactions';

const mapStateToProps = state => ({
  transactions: getTransactions(state),
  grossRevenue: getGrossRevenue(state)
});

export default connect(
  mapStateToProps
)(Transactions);
