import React, { useState } from 'react';
import Header from '../Main/Header';
import Logo from '../HomePage/Logo';
import ProfileSettings from '../UserCabinet/ProfileSettings';
import styles from '../../styles/sailer.module.css';
import { UserCard } from './UserCard';
import { ClientList } from './ClientList';
import { Published } from './Published';

export const Sailer = () => {
  const [activeTab, setActiveTab] = useState('cabinet'); // 'cabinet' или 'settings'

  return (
    <div className={styles.sailer}>
      <Logo />
      <div className={styles.container}>
        <Header />

        {/* Горизонтальное меню */}
        <div className={styles.profileMenu}>
          <button
            className={activeTab === 'cabinet' ? styles.activeTab : ''}
            onClick={() => setActiveTab('cabinet')}
          >
            Кабинет
          </button>
          <button
            className={activeTab === 'settings' ? styles.activeTab : ''}
            onClick={() => setActiveTab('settings')}
          >
            Настройки
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
