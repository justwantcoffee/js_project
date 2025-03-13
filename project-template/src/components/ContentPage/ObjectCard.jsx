import React from 'react';
import styles from '../../../src/styles/objectcard.module.css'
import "../../../static/img/icons/search-icon.svg"

const ObjectCard = ({ header, color, underground, time, img, price }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.header}>{header}</h3>
      <div className={styles.description}>
        <span className={styles.descriptionDotColor} style={{"--background": color}}></span> 
        <span className={styles.descriptionUnderground}>{underground}</span>
        <img className={styles.descriptionPersonIcon}src="../../../static/img/icons/search-icon.svg" alt="человечек" />
        <span className={styles.descriptionTime}>{time}</span>
      </div>
      <img className={styles.objectImg} src={img} alt="фото объекта" />
      <p className={styles.price}>{price}</p>
      </div>
  );
};

export default ObjectCard;
