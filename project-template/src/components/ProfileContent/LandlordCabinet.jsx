import React from 'react';

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
    </div>
  );
};

export default LandlordCabinet;
