import React, { useState, useEffect } from 'react';
import assets from '../../assets';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import styles from '../../styles/Main/header.module.css';

const Header = ({ setSearchQuery }) => { 
  const navigate = useNavigate();
  const auth = getAuth();
  const [loggeduser, setLoggedUser] = useState('');
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


  useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setLoggedUser(user);
          } 
          else {
            setLoggedUser(null);
          }
      });

      return () => {
          listen()
      }
  })
  
  function userSignOut() {
      signOut(auth)
          .then(() => navigate('/'))
          .catch((e) => console.log(e))
  }

  return (
    <div className={styles.header}>

      {/* поиск по каталогу */}
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

      {/* кнопки хэдера */}
      <div className={styles.buttonBar}>
        <a className={styles.button} href="/">
          Home
        </a>
        <a className={styles.button} href="#">
          Purchase
        </a>
        <a className={styles.button} href="#">
          New buildings
        </a>
        <a className={styles.button} href="/realtors">
          Realtors
        </a>

        <div className={styles.profileinfo}>
        {loggeduser !== null && (
          <>
            <button onClick={userSignOut}>
              <img 
                src={assets.signout}
                width="24px"
                height="24px"
                alt="выйти" 
              />
            </button>
          </>
        )}

          <button onClick={logInChecker}>
            <img
              src={assets.home}
              width="24px"
              height="24px"
              alt="профиль"
            />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
