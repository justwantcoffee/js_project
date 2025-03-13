import React from 'react';
import OfferList from '../ContentPage/OfferList';
import styles from '../../styles/offers.module.css';

const Offers = () => {
  return (<div className={styles.offers}>
      <h2 className={styles.header}>NEW Buildings</h2>
      <div className={styles.dropdown}>
          <button onClick="" className={styles.button}>Filters</button>
      </div>
      <div className={styles.underline}></div>
      <div className={styles.content}>
        <OfferList />
      </div>
    </div>
    );
};

export default Offers;
