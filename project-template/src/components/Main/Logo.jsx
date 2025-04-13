import styles from '../../styles/Main/logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      {/* лого - ссылка в интерфейте */}
      <a href="/">ART</a>
    </div>
  );
};

export default Logo;