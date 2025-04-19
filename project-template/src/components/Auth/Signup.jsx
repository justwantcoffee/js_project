import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom'; 

import Logo from '../Main/Logo';
import styles from '../../styles/Auth/signup.module.css';

const Signup = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copypassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");
  const [accountType, setAccountType] = useState("");

  function register(e) {
    e.preventDefault();

    if(copypassword !== password) {
      setError("Passwords don't match, try again please");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        return updateProfile(user, { 
          displayName: `${accountType}|${firstname}|${lastname}`
        });
      })
      .then(() => {
        // Получаем тип аккаунта из displayName
        const [type] = auth.currentUser.displayName.split('|');
        
        // Маппинг типов аккаунтов на URL
        const routes = {
          sel: '/sailer',  // 'sel' → '/sailer'
          cus: '/cabinet/client', // как кабинеты для клиента готовы будут, замените
          adm: '/cabinet/admin' // тоже самое
        };

        if (!routes[type]) {
          throw new Error('Unknown account type');
        }

        navigate(routes[type]);
        
        // Очистка полей
        setError("");
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setCopyPassword("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message || "Error creating account");
      });
  };

  return (
    <div>
      <form onSubmit={register} className={styles.container}>
        
        {/* левая половина формы */}
        <div className={styles.containerLeft}>
        <Logo />
          <div className={`${styles.infoBlock} ${styles.header}`}>
            <h2>Time to take</h2>
            <h3>first steps towards your future!</h3>
          </div>
        
          <div className={`${styles.infoBlock} ${styles.personal}`}>
            <input 
              className={styles.input}
              placeholder='Enter your firstname'
              value={firstname} 
              onChange={(e)=>setFirstname(e.target.value)} 
              type="text" 

              minlength="2"
              maxlength="12"
              size="14"
              required  />

            <input 
              className={styles.input}
              placeholder='Enter your lastname'
              value={lastname} 
              onChange={(e)=>setLastname(e.target.value)} 
              type="text" 

              minlength="2"
              maxlength="12"
              size="14"
              required  />
            
            <input 
              className={styles.input}
              placeholder='Enter your email'
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              type="email" 
              required  />
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.inputLabel}>Create a strong password!</span>
            <input 
              className={styles.input}
              placeholder='Enter your password'
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              required  />

            <input 
              className={styles.input}
              placeholder='Repeat the password'
              value={copypassword} 
              onChange={(e)=>setCopyPassword(e.target.value)}
              type="password"
              required />
          </div>
        </div>

        {/* правая половина формы */}
        <div className={styles.containerRight}>
          <div className={styles.content}>
            <div className={`${styles.accountType} ${styles.header}`}>
              <h2>Choose</h2>
              <h3 className=''>an account type:</h3>
            </div>

            <form className={styles.radio}>
              <div className={styles.radioContainer}>
                <input 
                  id='cus'
                  type='radio' 
                  name='accountType'
                  value={'cus'} // от customer
                  onChange={(e)=>setAccountType(e.target.value)}
                  className={styles.radioInput} 
                  required />
                <label for="cus" className={styles.radioLabel}>customer</label>
              </div>

              <div className={styles.radioContainer}>
                <input 
                  id='sel'                
                  type='radio' 
                  name='accountType'
                  value={'sel'} // от seller
                  onChange={(e)=>setAccountType(e.target.value)}
                  className={styles.radioInput} />
                <label for="sel" className={styles.radioLabel}>seller</label>
              </div>
              
              <div className={styles.radioContainer}>
                <input 
                  id='adm'
                  type='radio' 
                  name='accountType'
                  value={'adm'} // от admin
                  onChange={(e)=>setAccountType(e.target.value)}
                  className={styles.radioInput} />
                <label for="adm" className={styles.radioLabel}>admin</label>
              </div>
            </form>

            <button className={styles.createButton}>Sign up</button> 
            {error ? <p style={{color:'red'}}>{error}</p> : ""}

            <a href="/login" className={styles.backLink}>Back to Login page</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
