import React from 'react';
import Header from '../Main/Header';
import Banner from './Banner';
import Services from './Services';
import Offers from './Offers';
import About from './About';
import Contacts from './Contacts';

import '../../styles/homepage.css';

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Header />
      <Banner />
      <Services />
      <Offers />
      <About />
      <Contacts />
    </div>
  );
};

export default HomePage;
