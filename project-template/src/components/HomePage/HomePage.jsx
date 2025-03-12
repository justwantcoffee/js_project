import React from 'react';
import Header from '../Main/Header';
import Footer from '../Main/Footer';

import Banner from './Banner';
import Offers from './Offers';
import Services from './Services';
import About from './About';
import Contacts from './Contacts';

import styles from '../../styles/homepage.module.css';

const HomePage = () => {
  return (
    <div>
      <div className={styles.mainpage}>
      <Header />
      <div className={styles.content}>
        <Banner />
        <Offers />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
