import React from 'react';
import ObjectCard from './ObjectCard';
import styles from '../../../src/styles/offerlist.module.css';

const OfferList = ({ offers }) => {
  
  const offersToDisplay = offers !== undefined ? offers : defaultOffers;

  return (
    <div className={styles.cardsWrapper}>
      {offersToDisplay.length > 0 ? (
        offersToDisplay.map((offer) => (
          <ObjectCard
            key={offer.id}
            header={offer.header}
            underground={offer.underground}
            time={offer.time}
            img={offer.img}
            price={offer.priceText}
          />
        ))
      ) : (
        <p>No offers match the selected filters.</p>
      )}
    </div>
  );
};

export default OfferList;
