import React, { useState } from 'react';
import Header from '../Main/Header';
import Footer from '../Main/Footer';

import Hero from './Hero';
import Offers from './Offers';
import Filters from "../ContentPage/Filters";

import styles from '../../styles/HomePage/homepage.module.css';
import AuthDetails from '../Auth/AuthDetails';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleApplyFilters = (newFilters) => {
    setAppliedFilters(newFilters);
  };

  return (
    <div>
      <div className={styles.main}>
        <Header setSearchQuery={setSearchQuery} />
        <AuthDetails />
        <Hero />
        
        <div className={styles.content}>
          
          <Filters 
            onApply={handleApplyFilters} 
            filters={appliedFilters} 
            visible={true} 
          />
          
          <Offers searchQuery={searchQuery} filters={appliedFilters} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
