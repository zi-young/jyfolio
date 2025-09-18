import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직 (추후 구현)
    console.log('Form submitted:', formData);
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.subtitle}>
          프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.
        </p>
        
        <div className={styles.content}>
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>메시지</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows="5"
                  required
                />
              </div>
              
              <button type="submit" className={styles.submitButton}>
                메시지 보내기
              </button>
            </form>
          </div>
          
          <div className={styles.socialContainer}>
            <h2 className={styles.socialTitle}>소셜 링크</h2>
            <div className={styles.socialLinks}>
              <button className={styles.socialLink}>
                <div className={styles.socialPlaceholder}>
                  <span>GitHub</span>
                </div>
              </button>
              <button className={styles.socialLink}>
                <div className={styles.socialPlaceholder}>
                  <span>LinkedIn</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

