import React from 'react';
import styles from '../../../src/styles/filters.module.css'

const Filters = () => {
  return (
    <div>
      <form className={styles.typeOfBusiness}>
        <label className={styles.header}>Type of Business</label>
          <div className={styles.wrapper}>
            <div className={styles.radioButtons}>
              <input className={styles.input} type="radio" id="buy" name="type"/>
              <label for="buy" className={styles.falseInput}>Buy</label>
            </div>
      
            <div className={styles.radioButtons}>
              <input className={styles.input} type="radio" id="rent" name="type"/>
              <label for="rent" className={styles.falseInput}>Rent</label>
            </div>
          </div>
      </form>

    <form action="" className={styles.dropdownContainer}>
      <label className={styles.header} for="estate-type">Type of Real estate</label>
      <select className={styles.dropdown} name="estate-type" id="estate-type">
        <option className={styles.dropdownChoice} value="Single-family home">Single-family home</option>
        <option className={styles.dropdownChoice} value="Multi-family home">Multi-family home</option>
        <option className={styles.dropdownChoice} value="Apartments">Apartments</option>
        <option className={styles.dropdownChoice} value="Condominiums">Condominiums</option>
        <option className={styles.dropdownChoice} value="Townhouse">Townhouse</option>
        <option className={styles.dropdownChoice} value="Vacation home">Vacation home</option>
      </select>
    </form>




    </div>
  );
};

export default Filters;
