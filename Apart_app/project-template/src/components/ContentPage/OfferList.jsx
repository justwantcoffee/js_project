import React from 'react';
import ObjectCard from './ObjectCard';

const OfferList = () => {
  return (
    <div>
      <h2>Список предложений</h2>
      {/* Здесь можно отрендерить несколько карточек */}
      <ObjectCard />
    </div>
  );
};

export default OfferList;
