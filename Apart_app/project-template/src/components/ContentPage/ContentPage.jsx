import React from 'react';
import Filters from './Filters';
import OfferList from './OfferList';

const ContentPage = () => {
  return (
    <div>
      <h1>Страница контента</h1>
      <Filters />
      <OfferList />
    </div>
  );
};

export default ContentPage;
