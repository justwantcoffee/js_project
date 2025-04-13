import React, { useState } from 'react';
import Header from '../Main/Header';
import Logo from '../HomePage/Logo';
import ProfileSettings from '../UserCabinet/ProfileSettings';
import { UserCard } from './UserCard';
import { ClientList } from './ClientList';
import { Published } from './Published';

import styles from '../../styles/Profile/sailer.module.css';

export const Sailer = () => {
  const [activeTab, setActiveTab] = useState('cabinet'); // 'cabinet' или 'settings'

  return (
    <div className={styles.sailer}>
      <Logo />
      <div className={styles.container}>
        <Header />
        
        <hr className={styles.hr} />
        {/* Горизонтальное меню */}
        <div className={styles.profileMenu}>
          <button
            className={activeTab === 'cabinet' ? styles.activeTab : ''}
            onClick={() => setActiveTab('cabinet')}
          >
            Profile
          </button>
          <button
            className={activeTab === 'settings' ? styles.activeTab : ''}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        {/* Контент */}
        <div className={styles.cards}>
          {activeTab === 'settings' && <ProfileSettings />}
          {activeTab === 'cabinet' && (
            <>
              <UserCard />
              <ClientList />
              <Published />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
