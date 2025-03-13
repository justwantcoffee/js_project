import React from 'react';
import styles from '../../../src/styles/objectcard.module.css'

const ObjectCard = ({ header, color, underground, time, img, price }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.header}>{header}</h3>
      <div className={styles.contentWrapper}>

        <div className={styles.description}>
          <div className={styles.descriptionWrapper}>
            <span className={styles.descriptionDotColor} style={{"--background": color}}></span> 
            <span className={styles.descriptionUnderground}>{underground}</span>
          </div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.descriptionPersonIcon}></span>
            <span className={styles.descriptionTime}>{time}</span>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <img className={styles.objectImg} src={img} alt="фото объекта" />
          <p className={styles.price}>{price}</p>
        </div>

      </div>
    </div>
  );
};

export default ObjectCard;
