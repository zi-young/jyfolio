import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.name}>안녕하세요, JY입니다</h1>
          <h2 className={styles.title}>퍼블리셔 / 프론트엔드 개발자</h2>
          <p className={styles.intro}>
            사용자 경험을 중시하는 웹 개발자입니다. 
            깔끔하고 직관적인 인터페이스를 만드는 것을 좋아하며, 
            최신 기술을 활용하여 효율적인 솔루션을 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

