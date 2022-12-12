import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  //   const { id, type, amount, currency } = items;
  return (
    <table className={css.transaction__history}>
      <thead>
        <tr>
          <th className={css.transaction__title}>Type</th>
          <th className={css.transaction__title}>Amount</th>
          <th className={css.transaction__title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
