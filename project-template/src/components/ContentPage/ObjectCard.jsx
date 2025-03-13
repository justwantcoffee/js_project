import React from 'react';
import styles from '../../../src/styles/objectcard.module.css'

const ObjectCard = ({ header, underground, time, img, price }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.header}>{header}</h3>
      <div className={styles.description}>
        <span className={styles.descriptionMetro}>{underground}</span>
        <span className={styles.descriptionTime}>{time}</span>
      </div>
      <img className={styles.objectImg} src={img} alt="фото объекта" />
      <p className={styles.price}>{price}</p>
      </div>
  );
};

export default ObjectCard;
