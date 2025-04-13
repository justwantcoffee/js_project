'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '../../styles/swiper.module.css'; // Yangi module.css faylini import qilamiz
import assets from '../../assets';

export default function ImageSwiper({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };

  const goToPrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };


  // Tugmalar uchun disabled holatini aniqlash
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === images.length - 1;

  return (
    <div className={styles.swiperContainer}>
      <div className={styles.swiperWrapper}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.swiperSlide} ${
              index === currentIndex ? styles.swiperSlideActive : ''
            }`}
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      <button
        className={`${styles.swiperButtonPrev} ${
          isPrevDisabled ? styles.disabled : ''
        }`}
        onClick={goToPrev}
        aria-label="Previous slide"
        disabled={isPrevDisabled} // HTML disabled atributi qo'shish
      >
        <img src={assets.nextArrow} alt="Previous" />
      </button>

      <button
        className={`${styles.swiperButtonNext} ${
          isNextDisabled ? styles.disabled : ''
        }`}
        onClick={goToNext}
        aria-label="Next slide"
        disabled={isNextDisabled} // HTML disabled atributi qo'shish
      >
        <img src={assets.nextArrow} alt="Next" />
      </button>

      <div className={styles.swiperPagination}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.swiperPaginationBullet} ${
              index === currentIndex ? styles.swiperPaginationBulletActive : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
