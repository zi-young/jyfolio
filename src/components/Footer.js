import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © 2025 jiyoung Portfolio. All rights reserved.
        </p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/zi-young" className={styles.socialLink}>GitHub</a>
          <a href="https://velog.io/@haruru/series" className={styles.socialLink}>Velog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

