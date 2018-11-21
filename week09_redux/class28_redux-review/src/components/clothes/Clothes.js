import React from 'react';
import PropTypes from 'prop-types';
import styles from './Clothes.css';

const Clothes = ({ clothes, totalClothes }) => {
  const clothesItems = clothes.map(c => {
    return <li key={c.id}>{c.id} - {c.type} - {c.color}</li>;
  });
  return (
    <div className={styles.clothes}>
      <h3>{totalClothes}</h3>
      <ul>
        {clothesItems}
      </ul>
    </div>
  );
};

Clothes.propTypes = {
  clothes: PropTypes.array.isRequired,
  totalClothes: PropTypes.number.isRequired
};

export default Clothes;
