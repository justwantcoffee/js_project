import React from 'react';
import OfferList from '../ContentPage/OfferList';

import styles from '../../styles/offers.module.css'

const Offers = () => {
  return (<div>
      <h2 className={styles.header}>NEW Buildings</h2>
      <div className={styles.dropdown}>
          <button onClick="" className={styles.button}>Filters</button>
          <div className={styles.underline}></div>
          <div className={styles.content}>
          </div>
      </div>
      <OfferList />
    </div>
    );
};

export default Offers;
