import React from 'react';
import styles from '../../styles/ProfileContent/profilesettings.module.css';
import assets from '../../assets';

const ProfileSettings = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Changing profile data</h1>
      <hr className={styles.hr} />

      <form className={styles.form}>
        {/* Avatar */}
        <div className={styles.avatarBlock}>
          <img src={assets.userImg} alt="avatar" className={styles.avatar} />
          <button type="button" className={styles.avatarButton}>Change avatar</button>
        </div>

        {/* Full Name */}
        <label>Full name</label>
        <input type="text" placeholder="First name" className={styles.inputField} />
        <input type="text" placeholder="Second name" className={styles.inputField} />

        {/* Contact Info */}
        <label>Contact information</label>
        <input type="tel" placeholder="Phone number" className={styles.inputField} />
        <input type="email" placeholder="example@mail.com" className={styles.inputField} />

        <hr className={styles.hr} />

        {/* Extra Info */}
        <h2 className={styles.subtitle}>Extra information</h2>

        {/* Gender */}
        <label>Choose your fighter</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input type="radio" name="sex" value="male" className={styles.radioInput} />
            Male
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="sex" value="female" className={styles.radioInput} />
            Female
          </label>
          {/* I made this as joke, can be deleted freely */}
          <label className={styles.radioLabel}>
            <input type="radio" name="sex" value="wallmartbag" className={styles.radioInput} />
            Wallmart bag
          </label>
        </div>

        {/* Birthday */}
        <label>Birth date</label>
        <input type="date" className={styles.inputField} />

        {/* Submit */}
        <button type="submit" className={styles.submitButton}>Update profile</button>
      </form>
    </div>

    
  );
};

export default ProfileSettings;
