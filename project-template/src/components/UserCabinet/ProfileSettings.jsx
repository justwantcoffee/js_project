import React from 'react';
import styles from '../../styles/profilesettings.module.css';


const ProfileSettings = () => {
  return (
    <div>
      <h1>Настройки профиля</h1>
      {/* поля для изменения информации */}

      <form onSubmit={'функция обновления инфы'}>
        <div className={styles.infoMain}>
          <h2>Changing profile data</h2>
          <hr />

          <label for="avatar">Choose a profile picture:</label>
          <input 
            type="file" 
            id="avatar" 
            name="avatar" 
            accept="image/png, image/jpeg" />
          
          <label>Full username</label>
          <input 
            type="text" 
            placeholder={'переменная имени'}/>

          <input 
            type="text" 
            placeholder={'переменная фамилии'}/>

          <label>Contact information</label>
          <input 
            type="tel"
            placeholder={'переменная номера телефона'} />
          
          <input 
            type="text"
            placeholder={'переменная почты'} />
        </div>

        <div className={styles.infoExtra}>
          <h2>Extra information</h2>
          <hr />

          <label for="sex">Choose your fighter</label>
          <div className={styles.radioContainer}>
            <input 
              type='radio' 
              name='sex'
              value={'male'}
              className={styles.radioInput}/>male
          </div>

          <div className={styles.radioContainer}>
            <input 
              type='radio' 
              name='sex'
              value={'female'}
              className={styles.radioInput}/>female
          </div>

          <label for="birthday">Birth date</label>
          <input 
            type="date" 
            id='birthday'
            name='birthday'/>

          <button>Update profile</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;