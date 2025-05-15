import React from 'react';
import assets from '../../assets';
import ImageSwiper from '../Profile/ImageSwiper';
import { Link } from 'react-router-dom';

import styles from '../../styles/ContentPage/objectcard.module.css';

const ObjectCard = ({ apartment }) => {

  const images = [
    assets[`offerImg${apartment.id}`],
    assets[`offerImg${apartment.id}`],
    assets[`offerImg${apartment.id}`],
    assets[`offerImg${apartment.id}`],
  ];


  if (!apartment) return null; 

  return (
    <div className={styles.card}>
      <div className="cardMain">
      <div className={styles.cardTop}>

        {/* переход на стр. объекта по заголовку */}

        <Link 
          to={`/apartment/${apartment.id}`} 
          state={{ apartment }}>
          <h3 className={styles.header}><a href="/apartment">{apartment.header}</a></h3>
        </Link>   

        <button>
          <img src={assets.more} alt="" />
        </button>
      </div>
      <div className={styles.description}>
          <span className={styles.descriptionUnderground} style={{"--color": apartment.color}}>{apartment.underground}</span>
          <span className={styles.descriptionTime}>
            <img src={assets.directionsWalk} alt="" />{apartment.time}
          </span>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <ImageSwiper images={images} />
        <p className={styles.price}>{apartment.priceText}</p>
      </div>
      
    </div>
  );
};

export default ObjectCard;
