import React from 'react';
import Header from '../Main/Header';
import Banner from './Banner';
import Services from './Services';
import Offers from './Offers';
import About from './About';
import Contacts from './Contacts';

import styles from '../../styles/homepage.module.css';

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Header />
      <div className={styles.mainScreen}>
        <Banner />
        <Offers />
      </div>
      <Services />
      <About />
      <Contacts />
    </div>
  );
};

export default HomePage;
