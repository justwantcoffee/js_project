import React from 'react';
import OfferList from '../ContentPage/OfferList';
import Filters from '../ContentPage/Filters.jsx';

import styles from '../../styles/offers.module.css';

const Offers = () => {
  return (<div className={styles.offers}>
      <h2 className={styles.header}>NEW Buildings</h2>
      <div className={styles.dropdown}>
          <button onClick="" className={styles.button}>Filters</button>
      </div>
      <Filters />
      <hr className={styles.underline}/>
      <OfferList />
    </div>
    );
};

export default Offers;
