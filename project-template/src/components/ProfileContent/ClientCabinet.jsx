import React from 'react';
import { UserCard } from '../Profile/UserCard';
import Published from '../Profile/Published';

import styles from '../../styles/Profile/profile.module.css';

const ClientCabinet = () => {
  return (
    <div className={styles.cards}>
      {/* личный кабинет клиента */}
      {/* Избранное, объекты к сравнению, ранее просмотренное */}

      <UserCard />
      <Published />

      
    </div>
  );
};

export default ClientCabinet;
