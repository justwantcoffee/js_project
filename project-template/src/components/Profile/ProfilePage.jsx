import React, { useState } from 'react';
import Header from '../Main/Header';
import Footer from '../Main/Footer';

import ProfileSettings from '../ProfileContent/ProfileSettings';
import LandlordCabinet from '../ProfileContent/LandlordCabinet';

import styles from '../../styles/Profile/profile.module.css';

export const Sailer = () => {
  const [activeTab, setActiveTab] = useState('cabinet'); // 'cabinet' или 'settings'

  return (
    <div>
      <div className={styles.main}>

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

        {/* Контент профиля */}

          {activeTab === 'settings' && <ProfileSettings />}
          {activeTab === 'cabinet' && <LandlordCabinet />}

      </div>
      <Footer/>
    </div>
  );
};
