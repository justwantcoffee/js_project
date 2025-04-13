import React from 'react';
import styles from '../../styles/Main/footer.module.css';


const Footer = () => {
  return (
        <div className={styles.footer}>
            <div className={styles.main}>
                <h3 className={styles.header}>Hello everyone, we buy & sell apartments</h3>

                {/* контактная информация */}
                <div className={styles.content}>
                    <a className={styles.link} href="#">+7 (925) 123 45-67</a>
                    <a className={styles.link} href="#">APT876@gmail.com</a>
                    <a className={styles.link} href="#">Telegram</a>
                    <a className={styles.link} href="#">WhatsApp</a>
                    <a className={styles.link} href="#">Instagram</a>
                    <a className={styles.link} href="#">VK</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;