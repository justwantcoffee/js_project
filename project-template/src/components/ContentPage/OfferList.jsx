import React from 'react';
import ObjectCard from './ObjectCard';

import styles from '../../../src/styles/offerlist.module.css'

const OfferList = () => {
  return (
    <div className={styles.cardsWrapper}>
      {/* рендер карточек */}

      <ObjectCard 
        header="Matveevsky park"
        color=""
        underground="Amin’evskaya"
        time="3 min"
        img=""
        price="From 87’116 $"
      />

      <ObjectCard 
        header="Tomilinsky Bul'var"
        color=""
        underground="Kotel’niki"
        time="20 min"
        img=""
        price="From 49’880 $"
      />

      <ObjectCard 
        header="Bol'shaya Akademisheskaya"
        color=""
        underground="MCK/Lihobory"
        time="11 min"
        img=""
        price="From 69’244 $"
      />

      <ObjectCard 
        header="Vostochnoe Butovo"
        color=""
        underground="Bul’var Dmitrya Donskogo"
        time="15 min"
        img=""
        price="From 45’486 $"
      />

    </div>
  );
};

export default OfferList;
