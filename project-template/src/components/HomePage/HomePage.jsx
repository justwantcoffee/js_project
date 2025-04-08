import React, { useState } from 'react';
import Header from '../Main/Header';
import Footer from '../Main/Footer';

import Banner from './Banner';
import Offers from './Offers';
import Filters from "../ContentPage/Filters";
import Services from './Services';
import About from './About';
import Contacts from './Contacts';

import styles from '../../styles/homepage.module.css';
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
      <div className={styles.mainpage}>
        <Header setSearchQuery={setSearchQuery} />
        <AuthDetails />
        <Banner />
        
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
