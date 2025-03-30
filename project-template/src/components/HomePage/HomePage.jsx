import React, { useState } from 'react';
import Header from '../Main/Header';
import Footer from '../Main/Footer';

import Banner from './Banner';
import Offers from './Offers';
import Services from './Services';
import About from './About';
import Contacts from './Contacts';

import styles from '../../styles/homepage.module.css';
import AuthDetails from '../Auth/AuthDetails';

const HomePage = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div>
      <div className={styles.mainpage}>
      <Header setSearchQuery={setSearchQuery} />
      <AuthDetails />
      <div className={styles.content}>
        <Banner />
        <Offers searchQuery={searchQuery} />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
