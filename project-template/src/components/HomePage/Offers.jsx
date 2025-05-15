import React, { useState, useEffect } from 'react';
import OfferList from '../ContentPage/OfferList';
import styles from '../../styles/offers.module.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // убедись, что файл firebase.js экспортирует db
import Filters from '../ContentPage/Filters';

const Offers = ({ searchQuery = '', filters }) => {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);

  // Загружаем данные из Firestore
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'apartments'));
        const loadedOffers = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setOffers(loadedOffers);
      } catch (error) {
        console.error('Ошибка при загрузке данных из Firestore:', error);
      }
    };

    fetchOffers();
  }, []);

  // Применяем фильтры
  useEffect(() => {
    const result = offers.filter(offer => {
      const isSearchMatch = !searchQuery || offer.header?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.underground?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(offer.price)?.toLowerCase().includes(searchQuery.toLowerCase());

      const isBusinessTypeMatch = !filters.businessType || offer.businessType === filters.businessType;
      const isRealEstateTypeMatch = !filters.realEstateType || offer.realEstateType === filters.realEstateType;
      const isAreaFromMatch = !filters.areaFrom || offer.totalArea >= +filters.areaFrom;
      const isAreaToMatch = !filters.areaTo || offer.totalArea <= +filters.areaTo;
      const isKitchenSizeMatch = !filters.kitchenSize || offer.kitchenArea === +filters.kitchenSize;

      return isSearchMatch && isBusinessTypeMatch && isRealEstateTypeMatch &&
        isAreaFromMatch && isAreaToMatch && isKitchenSizeMatch;
    });

    setFilteredOffers(result);
  }, [searchQuery, filters, offers]);

  return (
    <div className={styles.offers}>
      <h2 className={styles.header}>NEW Buildings</h2>
      <hr className={styles.hr} />
      <div className={styles.content}>
        <OfferList offers={filteredOffers} />
      </div>
    </div>
  );
};

export default Offers;
