import Header from "../Main/Header";
import Footer from "../Main/Footer";
import assets from '../../assets';

import styles from "../../styles/ObjectPage/objectpage.module.css"

const ObjectPage = ({ header, color, underground, time, img, price }) => {
  return (
    <div>
        <div className={styles.main}>
            {/* страница объекта */}
            <Header />
            
            <div className={styles.maincard}>
              {/* верхний блок об объекте */}
              <div className={styles.hero}>
                <h2 className={styles.header}>Matveensky park</h2>

                <div className={styles.description}>
                  <span className={styles.underground}>Amin’evskaya</span>
                  <span className={styles.time}><img src={assets.directionsWalk} alt="" />3 min</span>
                  <span className={styles.saleRent}>Sale</span>
                </div>

                <img src={img} className={styles.mainPhoto} alt="главное фото объекта" />
              </div>

              <div className={styles.extra}>

              {/* общая информация об объекте */}
              <div className={styles.about}>
                <h3 className={styles.header}>About apartment</h3>
                <dl className={styles.charList}>
                  <div className={styles.point}>
                    <dt className={styles.pointName}>Застройщик:</dt>
                    <dd className={styles.pointValue}>Level Group</dd>
                  </div>
                  
                  <div className={styles.point}>
                    <dt className={styles.pointName}>Тип дома:</dt>
                    <dd className={styles.pointValue}>Монолитный</dd>
                  </div>
                  
                  <div className={styles.point}>
                    <dt className={styles.pointName}>Парковка:</dt>
                    <dd className={styles.pointValue}>Подземная</dd>
                  </div>
                </dl>
              </div>

              {/* цена и контакты */}
              <div className={styles.price}>
                <h3 className={styles.header}>2`905 $</h3>
                <span>Total</span>
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