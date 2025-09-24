import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [imageError, setImageError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <button 
          onClick={() => scrollToSection('home')} 
          className={styles.logo}
        >
          {/* {!imageError ? (
            <img 
              src="/img/jiyoung.jpg" 
              alt="JY Portfolio" 
              className={styles.profileImage}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={styles.profilePlaceholder}>
              <span className={styles.placeholderText}>JY</span>
            </div>
          )} */}
          <span className={styles.logoText}>JY</span>
        </button>
        <ul className={styles.navList}>
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

