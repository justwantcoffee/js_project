import Header from "../Main/Header";
import Footer from "../Main/Footer";
import assets from '../../assets';

import { useEffect, useState } from 'react';

import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useLocation, useParams } from 'react-router-dom';

import { sampleOffers } from "../HomePage/SampleOffers"

import styles from "../../styles/ObjectPage/objectpage.module.css"

const ObjectPage = () => {

  const { state } = useLocation();
  const { id } = useParams();
  const [apartmentData, setApartmentData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(id);
  
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'apartments', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setApartmentData({ id: docSnap.id, ...docSnap.data() });
      }
      setLoading(false);
    };
    
    fetchData();
  }, [id]);
  
  // состояние загрузки, т. к.  getDoc асинхронная
  if (loading) return <div>Загрузка...</div>;
  if (!apartmentData) return <div>Квартира не найдена</div>;
  
  // массив характеристик 
  const apartmentDetails = [
    { name: 'Застройщик', value: apartmentData.developer },
    { name: 'Тип дома', value: apartmentData.houseType },
    { name: 'Парковка', value: apartmentData.parking },
    { name: 'Отделка', value: apartmentData.finishing },
    { name: 'Тип комплекса', value: apartmentData.complexType },
  ];

  return (
    <div>
        <div className={styles.main}>
            {/* страница объекта */}
            <Header />
            <div className={styles.maincard}>
              {/* верхний блок об объекте */}
              <div className={styles.hero}>
                <h2 className={styles.header}>{apartmentData.header}</h2>

                <div className={styles.description}>
                  <span className={styles.underground}>Amin’evskaya</span>
                  <span className={styles.time}><img src={assets.directionsWalk} alt="" />3 min</span>
                  <span className={styles.saleRent}>Sale</span>
                </div>
                <img src={assets[`offerImg${apartmentData.id}`]} className={styles.mainPhoto} alt="главное фото объекта" />
              </div>

              <div className={styles.extra}>

              {/* список характеристик */}
              <div className={styles.about}>
                <h3 className={styles.header}>About apartment</h3>

                <dl className={styles.charList}>
                  {apartmentDetails.map((item, index) => (
                    <div key={index} className={styles.point}>
                      <dt className={styles.pointName}>{item.name}:</dt>
                      <dd className={styles.pointValue}>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* цена и контакты */}
              <div className={styles.price}>
                <h3 className={styles.header}>2’905 $ / m² </h3>
                <span className={styles.total}>89`116$ Total</span>
                <button className={styles.contacts}>Contacts</button>
              </div>
            </div>
          </div>

          {/*  подробная информация */}
          <div className={styles.infoblock}>

          </div>

          {/* расположение */}
          <div className={styles.infoblock}>
              
          </div>

        </div>
        <Footer />
    </div>
  );
};

export default ObjectPage;