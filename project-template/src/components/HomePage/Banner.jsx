import React from 'react';
import styles from '../../styles/banner.css';

const Banner = () => {
  return (
    <div className='card'>
      <h2 className='card__header'>Prepared flats</h2>
      <h3 className='card__header--extra-text--green'>Choose<br/>and move in</h3>
      <img className='card__img' src="https://i.ibb.co/k62gX9bS/main-img.jpg" alt="небоскреб" />
    </div>
  );
};

export default Banner;
