import React, { useState } from 'react';
import OfferList from '../ContentPage/OfferList';
import styles from '../../styles/offers.module.css';
import Filters from '../ContentPage/Filters';

// Пример данных карточек (с дополнительными полями для фильтрации)
const sampleOffers = [
  {
    id: 1,
    header: "Matveevsky park",
    underground: "Amin’evskaya",
    time: "3 min",
    img: "",
    price: 87116,
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
    img: "",
    price: 49880,
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
    img: "",
    price: 69244,
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
    img: "",
    price: 45486,
    priceText: "From 45’486 $",
    businessType: "sell",
    realEstateType: "townhouse",
    rooms: "4",
    totalArea: 100,
    kitchenArea: 10
  }
];

const Offers = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [offers] = useState(sampleOffers);
  const [filteredOffers, setFilteredOffers] = useState(sampleOffers);

  // Состояние для сохранённых (применённых) фильтров
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

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const handleApplyFilters = (newFilters) => {
    console.log("Applying filters:", newFilters);
    // Обновляем применённые фильтры
    setAppliedFilters(newFilters);

    // Пример фильтрации, включая поля totalArea и kitchenArea
    const newFilteredOffers = offers.filter((offer) => {
      let match = true;
      // Фильтр по бизнес-типу
      if (newFilters.businessType && offer.businessType !== newFilters.businessType) {
        match = false;
      }
      // Фильтр по типу недвижимости
      if (newFilters.realEstateType && offer.realEstateType !== newFilters.realEstateType) {
        match = false;
      }
      // Фильтр по минимальной площади
      if (newFilters.areaFrom && offer.totalArea < +newFilters.areaFrom) {
        match = false;
      }
      // Фильтр по максимальной площади
      if (newFilters.areaTo && offer.totalArea > +newFilters.areaTo) {
        match = false;
      }
      // Фильтр по площади кухни
      if (newFilters.kitchenSize && offer.kitchenArea !== +newFilters.kitchenSize) {
        match = false;
      }
      return match;
    });

    setFilteredOffers(newFilteredOffers);
    setFiltersVisible(false);
  };

  return (
    <div className={styles.offers}>
      <h2 className={styles.header}>NEW Buildings</h2>
      <div className={styles.dropdown}>
        <button onClick={toggleFilters} className={styles.button}>Filters</button>
        {filtersVisible && (
          <Filters
            visible={filtersVisible}
            filters={appliedFilters}  // передаём применённые фильтры
            onApply={handleApplyFilters}
          />
        )}
      </div>
      <hr className={styles.underline}/>
      <div className={styles.content}>
        <OfferList offers={filteredOffers} />
      </div>
    </div>
  );
};

export default Offers;
