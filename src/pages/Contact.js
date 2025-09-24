import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // EmailJS 설정이 완료되지 않은 경우 mailto 방식으로 대체
      if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || 
          process.env.REACT_APP_EMAILJS_SERVICE_ID === 'service_1234567') {
        
        // mailto 방식으로 메일 클라이언트 열기
        const subject = `포트폴리오 문의 - ${formData.name}`;
        const body = `이름: ${formData.name}\n이메일: ${formData.email}\n\n메시지:\n${formData.message}`;
        const mailtoLink = `mailto:jypark912@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
        alert('메일 클라이언트가 열렸습니다. 메일을 확인하고 전송해주세요!');
        setFormData({ name: '', email: '', message: '' });
        
      } else {
        // EmailJS를 사용하여 메일 전송
        const result = await emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
        
        console.log('SUCCESS!', result.status, result.text);
        alert('메시지가 성공적으로 전송되었습니다!');
        setFormData({ name: '', email: '', message: '' });
      }
      
    } catch (error) {
      console.error('FAILED...', error);
      alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
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
            <form ref={form} className={styles.form} onSubmit={handleSubmit}>
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
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? '전송 중...' : '메시지 보내기'}
              </button>
            </form>
          </div>
          
          <div className={styles.socialContainer}>
            <h2 className={styles.socialTitle}>소셜 링크</h2>
            <div className={styles.socialLinks}>
              <a 
                href="https://github.com/zi-young" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <div className={styles.socialPlaceholder}>
                  <span>🔗 GitHub</span>
                </div>
              </a>
              <a 
                href="https://velog.io/@haruru/series" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <div className={styles.socialPlaceholder}>
                  <span>📝 Velog</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

