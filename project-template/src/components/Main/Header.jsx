import React from 'react';
import styles from '../../styles/header.module.css';
import assets from '../../assets';

const Header = () => {
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
        <a className={styles.button} href="">
          Rent
        </a>
        <a className={styles.button} href="">
          Purchase
        </a>
        <a className={styles.button} href="">
          New buildings
        </a>
        <a className={styles.button} href="">
          Realtors
        </a>
        <a className="header_button--img" href="/login">
          <img
            src={assets.home}
            width="20px"
            height="20px"
            alt="профиль"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
