import React from 'react';
import styles from '../../styles/banner.module.css';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.header}>Prepared flats</h2>
        <h3 className={styles.headerGreen}>Choose<br/>and move in</h3>
      </div>
    </div>
  );
};

export default Banner;
