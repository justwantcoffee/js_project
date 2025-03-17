import assets from '../../assets';
import styles from '../../styles/card.module.css';
export const UserCard = () => {
  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>
          Petr <br /> Vasil’kov
        </h2>
        <div className={styles.line}></div>
        <img className={styles.userImg} src={assets.userImg} alt="" />
        <a href="#!" className={styles.userLink}>
          +7 (985) 134 12 34
        </a>
        <a href="#!" className={styles.userLink}>
          pv758@gmail.com
        </a>
      </div>
    </>
  );
};
