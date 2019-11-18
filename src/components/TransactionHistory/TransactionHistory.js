import React from 'react';
import PropTypes from 'prop-types';
import stylesTr from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={stylesTr.transaction__table}>
    <thead className={stylesTr.transaction__thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody className={stylesTr.transaction__tbody}>
      {items.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  items: PropTypes.shape({
    id: '',
    type: '',
    currency: '',
  }),
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired,
  ),
};

export default TransactionHistory;
