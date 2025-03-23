import React from 'react';
import styles from '../../styles/header.module.css';
import assets from '../../assets';
import logInCheck from '../Auth/AuthDetails';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Header = () => { 
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate('/login');
  }

  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <form className={styles.form} action="/search" method="get">
          <input
            className={styles.field}
            type="text"
            name="query"
            placeholder="Search..."
          ></input>
        </form>
      </div>
      <div className={styles.buttonBar}>
        <a className={styles.button} href="#">
          Rent
        </a>
        <a className={styles.button} href="#">
          Purchase
        </a>
        <a className={styles.button} href="#">
          New buildings
        </a>
        <a className={styles.button} href="#">
          Realtors
        </a>
        <button onClick={goToProfile}>
          <img
            src={assets.home}
            width="20px"
            height="20px"
            alt="профиль"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
