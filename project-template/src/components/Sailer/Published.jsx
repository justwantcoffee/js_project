import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode } from 'swiper/modules'; // Mousewheel va FreeMode modullarini import qilamiz
import 'swiper/css'; // Swiper'ning asosiy stil fayllari
import 'swiper/css/free-mode'; // FreeMode uchun qo'shimcha uslublar
import assets from '../../assets';
import styles from '../../styles/card.module.css';
import ObjectCard from '../ContentPage/ObjectCard';

export const Published = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Client list</h2>
      <div className={styles.line}></div>
      <Swiper
        modules={[Mousewheel, FreeMode]} // Mousewheel va FreeMode modullarini faollashtiramiz
        freeMode={true} // Cursor bilan erkin surishni yoqadi
        mousewheel={true} // Mouse wheel bilan ham boshqarish mumkin (ixtiyoriy)
        slidesPerView={1.8} // Har safar bitta slide ko'rinadi
        spaceBetween={10} // Slide'lar orasidagi masofa (px)
        className={styles.swiperContainer} // Agar kerak bo'lsa, maxsus klass qo'shish
      >
        <SwiperSlide>
          <ObjectCard
            header="Matveevsky park"
            underground="Amin’evskaya"
            time="3 min"
            img={assets.offerImg1}
            price="From 87’116 $"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ObjectCard
            header="Matveevsky park"
            underground="Amin’evskaya"
            time="3 min"
            img={assets.offerImg1}
            price="From 87’116 $"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ObjectCard
            header="Matveevsky park"
            underground="Amin’evskaya"
            time="3 min"
            img={assets.offerImg1}
            price="From 87’116 $"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ObjectCard
            header="Matveevsky park"
            underground="Amin’evskaya"
            time="3 min"
            img={assets.offerImg1}
            price="From 87’116 $"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Published;
