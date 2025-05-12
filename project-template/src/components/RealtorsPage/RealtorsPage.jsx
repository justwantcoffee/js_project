import React from 'react';
import Header from '../Main/Header';
import Footer from '../Main/Footer';
import allAccounts from '../../data/accounts.json';
import styles from '../../styles/RealtorsPage/realtorsPage.module.css';

const RealtorsPage = () => {
  const realtors = Array.isArray(allAccounts)
    ? allAccounts.filter(acc => acc.sel === true)
    : [];

  return (
    <div>
      <Header />
      <div className={styles.realtorsPage}>
        <h1 className={styles.title}>Арендодатели</h1>
        {realtors.length > 0 ? (
          <div className={styles.realtorsList}>
            {realtors.map(r => (
              <div key={r.id} className={styles.realtorCard}>
                <h2 className={styles.name}>{r.name || 'Без имени'}</h2>
                <p className={styles.info}><strong>Email:</strong> {r.email}</p>
                {r.phone && <p className={styles.info}><strong>Телефон:</strong> {r.phone}</p>}
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>Нет доступных арендодателей.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RealtorsPage;