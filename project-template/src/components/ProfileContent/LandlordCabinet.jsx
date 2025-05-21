import React from 'react';
import { Link } from 'react-router-dom';

import { UserCard } from '../Profile/UserCard';
import { ClientList } from '../Profile/ClientList';
import { Published } from '../Profile/Published';

import styles from '../../styles/Profile/profile.module.css';

const LandlordCabinet = () => {
  return (
    <div className={styles.cards}>
      {/* Кабинет арендодателя/продавца */}

      

      <UserCard />
      <ClientList />
      <Published />
      <div style={{ marginBottom: "20px" }}>
        <Link to="/add-apartment" className={styles.addButton}>
          ➕ Создать объявление
        </Link>
      </div>
    </div>
  );
};

export default LandlordCabinet;
