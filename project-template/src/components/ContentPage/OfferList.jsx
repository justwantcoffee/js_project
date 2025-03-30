import React, { useState, useEffect } from 'react';
import ObjectCard from './ObjectCard';
import styles from '../../../src/styles/offerlist.module.css';

const OfferList = ({ offers, searchQuery = '' }) => {
  const [filteredOffers, setFilteredOffers] = useState(offers || []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredOffers(offers || []);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = offers.filter(offer => 
        offer.header.toLowerCase().includes(query)
      );
      setFilteredOffers(filtered);
    }
  }, [searchQuery, offers]);

  return (
    <div className={styles.cardsWrapper}>
      {filteredOffers.length > 0 ? (
        filteredOffers.map((offer) => (
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
