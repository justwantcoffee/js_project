import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode } from 'swiper/modules'; // Mousewheel va FreeMode modullarini import qilamiz
import 'swiper/css'; // Swiper'ning asosiy stil fayllari
import 'swiper/css/free-mode'; // FreeMode uchun qo'shimcha uslublar
import assets from '../../assets';
import ObjectCard from '../ContentPage/ObjectCard';
import OfferList from '../ContentPage/OfferList';

import styles from '../../styles/Profile/card.module.css';

export const Published = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Published offers</h2>
      <hr className={styles.line}/>
      <Swiper
        modules={[Mousewheel, FreeMode]} // Mousewheel va FreeMode modullarini faollashtiramiz
        freeMode={true} // Cursor bilan erkin surishni yoqadi
        mousewheel={true} // Mouse wheel bilan ham boshqarish mumkin (ixtiyoriy)
        slidesPerView={1.5} // Har safar bitta slide ko'rinadi
        spaceBetween={10} // Slide'lar orasidagi masofa (px)
        className={styles.swiperContainer} // Agar kerak bo'lsa, maxsus klass qo'shish
      >
      </Swiper>
    </div>
  );
};

export default Published;
