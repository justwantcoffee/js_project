import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from "../../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copypassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

  function register(e) {
    e.preventDefault();

    /* проверка что пароль и копия пароля совпадает */
    if(copypassword !== password) {
      setError("Passwords don't match, try again please :(")
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then ((user) => {
        /* при успешном создании аккаунта очищаем поля */
        console.log('пользователь успешно создан');
        setError("");
        setEmail("");
        setPassword("");
        setCopyPassword("");
      })
      .catch((error)=>console.log(error));
  };

  return (
    <div>
      <h1>Создать аккаунт</h1>
      {/* Форма регистрации */}

      <div>
        <form onSubmit={register}>
          <input 
            placeholder='Enter your email'
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            type="email" 
            required  />

          <input 
            placeholder='Enter your password'
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            required  />

            <input 
              placeholder='Repeat the password'
              value={copypassword} 
              onChange={(e)=>setCopyPassword(e.target.value)}
              type="password"
              required />

            <button>Create</button>
            {error ? <p style={{color:'red'}}>{error}</p> : ""}
        </form>
      </div>
    </div>
  );
};

export default Signup;
