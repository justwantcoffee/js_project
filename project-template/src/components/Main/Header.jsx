// Header.jsx
import React, { useState } from 'react';
import styles from '../../styles/header.module.css';
import assets from '../../assets';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Header = ({ setSearchQuery }) => { 
  const navigate = useNavigate();
  const auth = getAuth();
  const [localQuery, setLocalQuery] = useState('');

  function logInChecker() {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log("user is logged in");
        navigate('/sailer');
      } else {
        console.log("user is not logged in");
        navigate('/login');
      }
    }); 
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalQuery(value);
    if (setSearchQuery) {
      setSearchQuery(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.field}
            type="text"
            name="query"
            placeholder="Search..."
            value={localQuery}
            onChange={handleChange}
          />
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
        <button onClick={logInChecker}>
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
