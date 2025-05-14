import React, { useMemo } from 'react';
import ObjectCard from './ObjectCard';
import styles from '../../../src/styles/ContentPage/offerlist.module.css';

const OfferList = ({ offers = [], searchQuery = '' }) => {
  const filteredOffers = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) return offers;
    return offers.filter(offer =>
      offer.header.toLowerCase().includes(query)
    );
  }, [offers, searchQuery]);

  return (
    <div className={styles.cardsWrapper}>
      {filteredOffers.length > 0 ? (
        filteredOffers.map((offer) => (
          <ObjectCard
            key={offer.id}
            apartment={offer} 
            // передаём весь объект
          />
        ))
      ) : (
        <p>No offers match the selected filters.</p>
      )}
    </div>
  );
};

export default OfferList;
