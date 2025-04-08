import React from 'react';
import Header from '../Main/Header';
import Logo from '../HomePage/Logo';
import ProfileSettings from '../UserCabinet/ProfileSettings';
import ProfileMenu from '../UserCabinet/ProfileMenu';

import styles from '../../styles/sailer.module.css';
import { UserCard } from './UserCard';
import { ClientList } from './ClientList';
import { Published } from './Published';


export const Sailer = () => {
  return (
    <div className={styles.sailer}>
      <Logo />
      <div className={styles.container}>
        <Header />
        <div className={styles.cards}>
          <ProfileSettings />
          <UserCard />
          <ClientList />
          <Published />
        </div>
      </div>
    </div>
  );
};
