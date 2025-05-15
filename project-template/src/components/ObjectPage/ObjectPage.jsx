import { useEffect, useState } from 'react';
import Header from "../Main/Header";
import Footer from "../Main/Footer";
import assets from '../../assets';

import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useLocation, useParams } from 'react-router-dom';

import styles from "../../styles/ObjectPage/objectpage.module.css"

const ObjectPage = () => {

  const { state } = useLocation();
  const { id } = useParams();
  const [apartmentData, setApartmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);    // состояние блока контактов

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

  // данные контактов застройщика
  const contacts = {
    name: 'Level Group',
    phone: '+7 (123) 456-78-90',
    email: 'contact@levelgroup.ru'
  };

  // для форматирования цены на странице
  const formatNumber = (num, { symbol = '', delimiter = '’', decimals = 0 } = {}) => {
    const number = Number(num);
    
    const formatted = number.toLocaleString('ru-RU', {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals
      // delimiter - символ разделения
    }).replace(/\s/g, delimiter); 

    return `${formatted}${symbol ? ` ${symbol}` : ''}`;
  };

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
                  <span className={styles.underground}>{apartmentData.underground}</span>
                  <span className={styles.time}><img src={assets.directionsWalk} alt="" />{`${apartmentData.time} min`}</span>
                  <span className={styles.saleRent}>
                    {apartmentData.businessType === 'buy' ? 'Sale' : 'Rent'}
                  </span>
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
                <h3 className={styles.header}>${formatNumber(apartmentData.price / apartmentData.totalArea)} / m²</h3>
                <span className={styles.total}>${formatNumber(apartmentData.price)} Total</span>

                <button 
                  className={`${styles.contactsButton} ${isOpen ? styles.active : ''}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? 'Hide Contacts' : 'Contacts'}
                </button>

                {isOpen && (
                  <div className={styles.contactsDropdown}>
                    <div className={styles.contactItem}>
                      <span className={styles.contactLabel}>Застройщик:</span>
                      <span className={styles.contactValue}>{contacts.name}</span>
                    </div>
                    <div className={styles.contactItem}>
                      <span className={styles.contactLabel}>Телефон:</span>
                      {/* встренная ссылка на телефон */}
                      <a href={`tel:${contacts.phone}`} className={styles.contactValue}>
                        {contacts.phone}
                      </a>
                    </div>
                    <div className={styles.contactItem}>
                      <span className={styles.contactLabel}>Email:</span>
                      {/* аналогично для email */}
                      <a href={`mailto:${contacts.email}`} className={styles.contactValue}>
                        {contacts.email}
                      </a>
                    </div>
                  </div>
                )}
    
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