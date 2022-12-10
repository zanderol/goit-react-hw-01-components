import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>{label} </span>
            <span className={css.percentage}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
