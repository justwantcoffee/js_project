import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Offers from './Offers';
import About from './About';
import Contacts from './Contacts';

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Banner />
      <Services />
      <Offers />
      <About />
      <Contacts />
    </div>
  );
};

export default HomePage;
