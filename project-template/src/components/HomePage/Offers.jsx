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

const Offers = ({ searchQuery = '' }) => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filteredOffers, setFilteredOffers] = useState(sampleOffers);
  const [appliedFilters, setAppliedFilters] = useState({
    businessType: "buy",
    realEstateType: "single-family",
    rooms: null,
    priceType: "object",
    priceFrom: "",
    priceTo: "",
    areaFrom: "",
    areaTo: "",
    kitchenSize: null,
  });

  const toggleFilters = () => setFiltersVisible(prev => !prev);

  const handleApplyFilters = (newFilters) => {
    setAppliedFilters(newFilters);
    setFiltersVisible(false);
  };

  useEffect(() => {
    let result = sampleOffers.filter(offer => {
      const isSearchMatch = !searchQuery || offer.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             offer.underground.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             offer.priceText.toLowerCase().includes(searchQuery.toLowerCase());

      const isBusinessTypeMatch = !appliedFilters.businessType || offer.businessType === appliedFilters.businessType;
      const isRealEstateTypeMatch = !appliedFilters.realEstateType || offer.realEstateType === appliedFilters.realEstateType;
      const isAreaFromMatch = !appliedFilters.areaFrom || offer.totalArea >= +appliedFilters.areaFrom;
      const isAreaToMatch = !appliedFilters.areaTo || offer.totalArea <= +appliedFilters.areaTo;
      const isKitchenSizeMatch = !appliedFilters.kitchenSize || offer.kitchenArea === +appliedFilters.kitchenSize;

      return isSearchMatch && isBusinessTypeMatch && isRealEstateTypeMatch && isAreaFromMatch &&
             isAreaToMatch && isKitchenSizeMatch;
    });

    setFilteredOffers(result);
  }, [searchQuery, appliedFilters]);

  return (
    <div className={styles.offers}>
      <h2 className={styles.header}>NEW Buildings</h2>

      {/* 
      <div className={styles.dropdown}>
        <button onClick={toggleFilters} className={styles.button}>Filters</button>
        {filtersVisible && (
          <Filters
            visible={filtersVisible}
            filters={appliedFilters}
            onApply={handleApplyFilters}
          />
        )}
      </div>
      */}

      <hr className={styles.underline}/>

      <div className={styles.content}>
        <OfferList offers={filteredOffers} />
      </div>
    </div>
  );
};

export default Offers;
