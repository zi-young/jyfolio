import React from 'react';
import styles from './About.module.css';

const About = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Next.js',
    'TypeScript', 'Node.js', 'Java', 'JSP', 'Egov', 'Vuetify',
    'ThingsBoard', 'Supabase', 'Netlify', 'WordPress', 'Figma'
  ];

  return (
    <div id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.description}>
              안녕하세요! 저는 사용자 중심의 웹 개발을 추구하는 개발자입니다. 
              다양한 프로젝트를 통해 웹 퍼블리싱부터 프론트엔드 개발까지 
              폭넓은 경험을 쌓아왔습니다. 항상 최신 기술 트렌드를 학습하고 
              적용하여 더 나은 사용자 경험을 제공하는 것을 목표로 합니다.
            </p>
            
            <div className={styles.career}>
              <h2 className={styles.sectionTitle}>경력</h2>
              <p className={styles.careerPeriod}>2023.11 ~ 2025.09</p>
              <p className={styles.careerDescription}>
                다양한 기업의 웹사이트 및 애플리케이션 개발 및 유지보수 프로젝트 참여
              </p>
            </div>

            <div className={styles.skills}>
              <h2 className={styles.sectionTitle}>사용 기술</h2>
              <div className={styles.skillTags}>
                {skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <div className={styles.profilePlaceholder}>
              <span>프로필 이미지 placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

