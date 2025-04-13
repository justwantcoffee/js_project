import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../../firebase";

import Logo from '../Main/Logo';
import styles from '../../styles/Auth/signup.module.css';

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copypassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");
  const[accountType, setAccountType] = useState("");

  function register(e) {
    e.preventDefault();

    /* проверка что пароль и копия пароля совпадает */
    if(copypassword !== password) {
      setError("Passwords don't match, try again please")
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then ((user) => {
        /* при успешном создании аккаунта очищаем поля */
        console.log('пользователь успешно создан');

        setError("");
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setCopyPassword("");

        /* обновляем имя пользователя, внося тип аккаунта */
        updateProfile(auth.currentUser, {displayName: `${accountType}|${firstname}|${lastname}`})
      })
      .catch((error)=>console.log(error));
  };

  {/* ставим тип аккаунта */}


  return (
    <div>

        {/* форма регистрации */}
        <form onSubmit={register} className={styles.container}>
        
        {/* левая половина формы */}
        <div className={styles.containerLeft}>
        <Logo />
          <div className={`${styles.infoBlock} ${styles.header}`}>
            <h2 className={styles.pageHeader}>Time to take</h2>
            <h3 className={`${styles.pageHeader} ${styles.extra}`}>first steps towards your future!</h3>
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

            <h2>Choose</h2>
            <h3>an account type:</h3>

            <form className={styles.radio}>
              <input 
                type='radio' 
                name='accountType'
                value={'cus'} // от customer
                onChange={(e)=>setAccountType(e.target.value)}
                className={styles.radioInput} 
                required />customer

              <input 
                type='radio' 
                name='accountType'
                value={'sel'} // от seller
                onChange={(e)=>setAccountType(e.target.value)}
                className={styles.radioInput} />seller

              <input 
                type='radio' 
                name='accountType'
                value={'adm'} // от admin
                onChange={(e)=>setAccountType(e.target.value)}
                className={styles.radioInput} />admin
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
