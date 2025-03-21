import React from 'react';
import styles from '../../../src/styles/objectcard.module.css';
import assets from '../../assets';
import ImageSwiper from '../Sailer/ImageSwiper';
const images = [
  assets.offerImg1,
  assets.offerImg1,
  assets.offerImg1,
  assets.offerImg1,
];
const ObjectCard = ({ header, color, underground, time, img, price }) => {
  return (
    <div className={styles.card}>
      <div className="cardMain">
      <div className={styles.cardTop}>
        <h3 className={styles.header}>{header}</h3>
        <button>
          <img src={assets.more} alt="" />
        </button>
      </div>
      <div className={styles.description}>
          <span className={styles.descriptionUnderground} style={{"--color": color}}>{underground}</span>
          <span className={styles.descriptionTime}>
            <img src={assets.directionsWalk} alt="" />{time}
          </span>
        </div>
      </div>
      
      <div className={styles.cardBottom}>
        <ImageSwiper images={images} />
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default ObjectCard;
