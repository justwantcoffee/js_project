import React from 'react';

import Logo from '../HomePage/Logo';

import styles from '../../styles/login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      {/* Форма логина */}

      <div className={styles.login}>

        <h1 className={styles.logo}>ART</h1>
        <div className={styles.content}>
          <h2 className={styles.header}>Welcome back!</h2>
          <h3 className={styles.desc}>Log in and continue your search</h3>

          <input 
            className={styles.input}
            type="email" 
            placeholder='email@email.ru'/>

          <input 
            className={styles.input}
            type="password" 
            name="password" 
            id="password" 
            placeholder='Enter your password'/>

          <a className={styles.loginForgotPassword} href="#">Forgot the password?</a>
        </div>
        
        <button 
          className={styles.button}
          >Log in
        </button>

        <hr className={styles.loginUnderline}/>
      </div>

      {/* Для перехода к регистрации */}

      <div className={styles.signin}>
        <h2 className={styles.logo}>ART</h2>
        
        <div className={styles.content}>
        <h2 className={styles.header}>Don’t have</h2>
        <h3 className={styles.desc}>an account yet?</h3>

        <button
          className={styles.button}
          >Sign in
        </button>

        <a className={styles.signinBackLink} href="#">Back to website</a>
        </div>
      </div>

    </div>
  );
};

export default Login;
