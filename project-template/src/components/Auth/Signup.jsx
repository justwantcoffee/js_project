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

  return (
    <div>

        {/* форма регистрации */}
        <form onSubmit={register} className={styles.container}>
        
        {/* левая половина формы */}
        
        <div className={styles.containerLeft}>

          <div className={styles.header}>
            <h1 className={styles.pageHeader}>Time to take</h1>
            <h2 className={`${styles.pageHeader} ${styles.extra}`}>first steps towards your future!</h2>
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
            <button className={styles.createButton}>Create</button> 
            {error ? <p style={{color:'red'}}>{error}</p> : ""}
          </div>

        </div>
        
      </form>
    </div>
  );
};

export default Signup;
