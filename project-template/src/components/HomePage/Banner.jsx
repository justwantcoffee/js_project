import React from 'react';
import styles from '../../styles/banner.module.css';

const Banner = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Prepared flats</h2>
      <h3 className={styles.headerGreen}>Choose<br/>and move in</h3>
      <img className={styles.img} src="https://i.ibb.co/k62gX9bS/main-img.jpg" alt="небоскреб" />
    </div>
  );
};

export default Banner;
