import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../../firebase";

import styles from '../../styles/signup.module.css';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copypassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

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
        setUsername("");
        setLastname("");
        setEmail("");
        setPassword("");
        setCopyPassword("");

        updateProfile(auth.currentUser, {displayName: username});
        updateProfile(auth.currentUser, {lastname: lastname});

        console.log(lastname);
      })
      .catch((error)=>console.log(error));
  };

  {/* проверка на админ аккаунт */}

  const[accountType, setAccountType] = useState("");
  const[adminCode, setAdminCode] = useState("");

  function accountTypeCheck(e) {
    e.preventDefault();
    console.log('функция запустилась');
    
    if(accountType == 'admin') {
      setAdminCode('введите код админа');
    } else {
      setAdminCode(null);
    }
  }

  return (
    <div>

        {/* форма регистрации */}
        <form onSubmit={register} className={styles.container}>
        
        {/* левая половина формы */}
        
        <div className={styles.containerLeft}>

          <h1 className={styles.logo}>ART</h1>

          <div className={`${styles.infoBlock} ${styles.header}`}>
            <h2 className={styles.pageHeader}>Time to take</h2>
            <h3 className={`${styles.pageHeader} ${styles.extra}`}>first steps towards your future!</h3>
          </div>
        
          <div className={`${styles.infoBlock} ${styles.personal}`}>
            <input 
              className={styles.input}
              placeholder='Enter your firstname'
              value={username} 
              onChange={(e)=>setUsername(e.target.value)} 
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

            <div onClick={accountTypeCheck} className={styles.radio}>
              <input 
                type='radio' 
                name='accountType'
                value={'customer'}
                onChange={(e)=>setAccountType(e.target.value)}
                className={styles.radioInput} />customer

              <input 
                type='radio' 
                name='accountType'
                value={'seller'}
                onChange={(e)=>setAccountType(e.target.value)}
                className={styles.radioInput} />seller

              <input 
                type='radio' 
                name='accountType'
                value={'admin'}
                onChange={(e)=>setAccountType(e.target.value)}
                className={styles.radioInput} />admin

              { adminCode ? <input type='text' name='adminCode' value=''  placeholder={adminCode} className={styles.adminCodeInput}/> : ""}
            </div>

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
