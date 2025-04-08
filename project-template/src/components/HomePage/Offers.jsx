import React, { useState, useEffect } from 'react';
import OfferList from '../ContentPage/OfferList';
import styles from '../../styles/offers.module.css';
import Filters from '../ContentPage/Filters';

// Пример данных карточек
const sampleOffers = [
  {
    id: 1,
    header: "Matveevsky park",
    underground: "Amin’evskaya",
    time: "3 min",
    priceText: "From 87’116 $",
    businessType: "buy",
    realEstateType: "single-family",
    rooms: "3",
    totalArea: 90,
    kitchenArea: 9
  },
  {
    id: 2,
    header: "Tomilinsky Bul'var",
    underground: "Kotel’niki",
    time: "20 min",
    priceText: "From 49’880 $",
    businessType: "sell",
    realEstateType: "apartment",
    rooms: "2",
    totalArea: 45,
    kitchenArea: 6
  },
  {
    id: 3,
    header: "Bol'shaya Akademisheskaya",
    underground: "MCK/Lihobory",
    time: "11 min",
    priceText: "From 69’244 $",
    businessType: "buy",
    realEstateType: "single-family",
    rooms: "3",
    totalArea: 120,
    kitchenArea: 15
  },
  {
    id: 4,
    header: "Vostochnoe Butovo",
    underground: "Bul’var Dmitrya Donskogo",
    time: "15 min",
    priceText: "From 45’486 $",
    businessType: "sell",
    realEstateType: "townhouse",
    rooms: "4",
    totalArea: 100,
    kitchenArea: 10
  }
];

const Offers = ({ searchQuery = '', filters }) => {
  const [filteredOffers, setFilteredOffers] = useState(sampleOffers);

  useEffect(() => {
    let result = sampleOffers.filter(offer => {

      const isSearchMatch = !searchQuery || offer.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             offer.underground.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             offer.priceText.toLowerCase().includes(searchQuery.toLowerCase());

      const isBusinessTypeMatch = !filters.businessType || offer.businessType === filters.businessType;
      const isRealEstateTypeMatch = !filters.realEstateType || offer.realEstateType === filters.realEstateType;
      const isAreaFromMatch = !filters.areaFrom || offer.totalArea >= +filters.areaFrom;
      const isAreaToMatch = !filters.areaTo || offer.totalArea <= +filters.areaTo;
      const isKitchenSizeMatch = !filters.kitchenSize || offer.kitchenArea === +filters.kitchenSize;

      return isSearchMatch && isBusinessTypeMatch && isRealEstateTypeMatch && isAreaFromMatch &&
             isAreaToMatch && isKitchenSizeMatch;
    });

    setFilteredOffers(result);
  }, [searchQuery, filters]);

  return (
    <div className={styles.offers}>
      <h2 className={styles.header}>NEW Buildings</h2>

      <div className={styles.content}>
        <OfferList offers={filteredOffers} />
      </div>
    </div>
  );
};

export default Offers;
