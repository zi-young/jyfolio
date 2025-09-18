import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © 2024 JY Portfolio. All rights reserved.
        </p>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>GitHub</a>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

