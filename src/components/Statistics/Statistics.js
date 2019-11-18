import React from 'react';
import PropTypes from 'prop-types';
import st from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={st.statistic__section}>
    <h2 className={st.statistic__title}>{title}</h2>
    <ul className={st.statistic__list}>
      {stats.length > 0 &&
        stats.map(el => (
          <li
            style={{ background: el.color }}
            key={el.id}
            className={st.statistic__item}
          >
            <span className={st.statistic__label}>{el.label}</span>
            <span className={st.statistic__percentage}>{el.percentage}%</span>
          </li>
        ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired,
  ),
};

Statistics.defaultProps = {
  stats: {
    id: '',
    label: '',
    percentage: '',
  },
};

export default Statistics;
