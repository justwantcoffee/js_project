import React from 'react';
import ObjectCard from './ObjectCard';

import styles from '../../../src/styles/offerlist.module.css'

const OfferList = () => {
  return (
    <div className={styles.cardsWrapper}>
      {/* рендер карточек */}
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
    </div>
  );
};

export default OfferList;
