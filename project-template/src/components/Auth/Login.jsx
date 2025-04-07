import React, { useState } from 'react';
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import AuthDetails from '../Auth/AuthDetails';
import styles from '../../styles/login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate('/sailer');
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function logIn(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then ((user) => {
        /* при успешном входе в аккаунт очищаем поля */
        console.log("вход произведен успешно");
        setError("");
        setEmail("");
        setPassword("");
        goToProfile();
        console.log(user);
      })
      .catch((error)=>{
        console.log(error)
        setError("Sorry, couldn't find your account")
      });
  };

  return (
    <div className={styles.container}>
      {/* Форма логина */}

      <div className={styles.login}>

        <h1 className={styles.logo}>ART</h1>
        <div className={styles.content}>
          <h2 className={styles.header}>Welcome back!</h2>
          <h3 className={styles.desc}>Log in and continue your search</h3>

          <form>
            <input 
              className={styles.input}
              placeholder='email@email.ru'
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              type="email"
              required  />

            <input 
              className={styles.input}
              placeholder='Enter your password'
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}
              type="password" 
              required  />

            <a className={styles.loginForgotPassword} href="#">Forgot the password?</a>

            <button 
              className={styles.button}
              onClick={logIn}
              >Log in
            </button>
          </form>

        </div>
        <hr className={styles.loginUnderline}/>
      </div>

      {/* Для перехода к регистрации */}

      <div className={styles.background}>
        <div className={styles.signin}>
        <h2 className={styles.logo}>ART</h2>
        
        <div className={styles.content}>
        <h2 className={styles.header}>Don’t have</h2>
        <h3 className={styles.desc}>an account yet?</h3>

        <a href="/register"
          className={styles.button}> Sign up
        </a>

        <a className={styles.signinBackLink} href="/">Back to website</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
