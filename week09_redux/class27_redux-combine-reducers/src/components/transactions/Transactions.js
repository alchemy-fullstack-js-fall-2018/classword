import React from 'react';
import PropTypes from 'prop-types';

const Transactions = ({ transactions, grossRevenue }) => {
  const transactionsComponents = transactions.map(transaction => {
    return <li key={transaction.soldTime}>{transaction.type}</li>;
  });

  return (
    <div>
      <h3>{grossRevenue}</h3>
      <ul>
        {transactionsComponents}
      </ul>
    </div>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  grossRevenue: PropTypes.number.isRequired
};

export default Transactions;
