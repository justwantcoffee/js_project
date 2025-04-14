import React, { useState, useEffect } from 'react';
import Header from '../Main/Header';
import Footer from '../Main/Footer';
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

import ProfileSettings from '../ProfileContent/ProfileSettings';
import ClientCabinet from '../ProfileContent/ClientCabinet';
import LandlordCabinet from '../ProfileContent/LandlordCabinet';
import AdminCabinet from '../ProfileContent/AdminCabinet';

import styles from '../../styles/Profile/profile.module.css';

export const Sailer = () => {
  const [activeTab, setActiveTab] = useState('cabinet'); // 'cabinet' или 'settings'
  const [accountType, setAccountType] = useState('sel'); // 'cus', 'sel' или 'adm'
  
  let nameList;

  useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
              nameList = user.displayName.split("|");
              setAccountType(nameList[0]);
            } 
        });

        return () => {
            listen()
        }
    })

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
          {(activeTab === 'cabinet' && accountType === 'cus') && <ClientCabinet />}
          {(activeTab === 'cabinet' && accountType === 'sel') && <LandlordCabinet />}
          {(activeTab === 'cabinet' && accountType === 'adm') && <AdminCabinet />}

      </div>
      <Footer/>
    </div>
  );
};
