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

  // данные для основной информации
  const apartmenInfo = [
    { label: 'Room amount', value: apartmentData.rooms, measure: ' rooms' },
    { label: 'Total area', value: apartmentData.totalArea, measure: ' m²' },
    { label: 'Kitchen area', value: apartmentData.kitchenArea, measure: ' m²' },
  ];

  // данные расположения квартиры
  const apartmenLocation = [
    { label: 'Address: ', value: 'Aminjevskaya 60 c. 2' },
    { label: 'Name of the R/C: ', value: 'Bombicheskie kluchi' },
    { label: 'District: ', value: 'Aminievskaya' }
  ]

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
        <div className={styles.page}>
            {/* страница объекта */}
            <Header />
            <div className={styles.pageHeader}>
              {/* верхний блок об объекте */}
              <div className={styles.hero}>
                <h2 className={styles.header}>{apartmentData.header}</h2>

                <div className={styles.description}>
                  <span className={styles.underground}>
                    <span 
                      className={styles.colorDot}
                      style={{ '--dot-color': apartmentData.undergroundColor }}>
                    </span>{apartmentData.underground}</span>
                  <span className={styles.time}><img className={styles.timeIcon} src={assets.directionsWalk} alt="" />{`${apartmentData.time} min`}</span>
                  <span className={styles.businessType}>
                    {apartmentData.businessType === 'buy' ? 'Sale' : 'Rent'}
                  </span>
                </div>
                <div className={styles.galleryGrid}>
                  <img src={assets[`offerImg${apartmentData.id}`]} className={styles.galleryMain} alt="главное фото объекта" />   
                     
                </div>
              </div>

              <div className={styles.pageBody}>

              {/* список характеристик */}
              <div className={styles.properties}>
                <h3 className={styles.propertiesTitle}>About apartment</h3>

                <dl className={styles.propertiesItemGrid}>
                  {apartmentDetails.map((item, index) => (
                    <div key={index} className={styles.propertiesItem}>
                      <dt className={styles.propertiesLabel}>{item.name}:</dt>
                      <dd className={styles.propertiesValue}>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* цена и контакты */}
              <div className={styles.priceContainer}>
                <h3 className={styles.priceTitle}>${formatNumber(apartmentData.price / apartmentData.totalArea)} / m²</h3>
                <span className={styles.priceTotal}>${formatNumber(apartmentData.price)} Total</span>

                {/* блок контактов */}
                <div className={styles.contactsWrapper}>
                  <button 
                    className={`${styles.contactsButton} ${isOpen ? styles.active : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? 'Hide Contacts' : 'Contacts'}
                  </button>

                  {isOpen && (
                    <div className={styles.contactsDropdown}>
                      <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>Застройщик: </span>
                        <span className={styles.contactValue}>{contacts.name}</span>
                      </div>
                      <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>Телефон: </span>
                        {/* встренная ссылка на телефон */}
                        <a href={`tel:${contacts.phone}`} className={styles.contactValue}>
                          {contacts.phone}
                        </a>
                      </div>
                      <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>Email: </span>
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
          </div>

          {/*  подробная информация */}
          <div className={styles.apartmentInfo}>
            <h3 className={styles.apartmentInfoTitle}>Main information</h3>
            <hr className={styles.hr}/>
            <div className={styles.apartmentInfoGrid}>
              {apartmenInfo.map((item, index) => (
                <div key={index} className={styles.apartmentInfoItem}>
                  <label className={styles.apartmentInfoLabel}>{item.label}</label>
                  <span className={styles.apartmentInfoValue}>{item.value}{item.measure}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* расположение */}
          <div className={styles.apartmentLocation}>
            <h3 className={styles.apartmentLocationTitle}>Apartment location</h3>
              <hr className={styles.hr}/>
              <div className={styles.apartmentLocationGrid}>
                {apartmenLocation.map((item, index) => (
                  <div key={index} className={styles.apartmentLocationItem}>
                    <label className={styles.apartmentLocationLabel}>{item.label}</label>
                    <span className={styles.apartmentLocationValue}>{item.value}
                    </span>
                  </div>
                ))}
              </div>
              <img src="" alt="карта" className={styles.mapImage}/>
          </div>

        </div>
        <Footer />
    </div>
  );
};

export default ObjectPage;