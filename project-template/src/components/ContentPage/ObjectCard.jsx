import React from 'react';
import styles from '../../../src/styles/objectcard.module.css'

const ObjectCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.header}>Matveevsky park</h3>
      <div className={styles.description}>
        <span className={styles.descriptionMetro}>Amin’evskaya</span>
        <span className={styles.descriptionTime}>3 min</span>
      </div>
      <img className={styles.objectImg} src='../../../static/img/objectImg/objectImg1.png' alt="фото объекта" />
      <p className={styles.price}>From 87&rsquo;116&nbsp;$</p>
      </div>
  );
};

export default ObjectCard;
