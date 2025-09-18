import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${index}`);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'web': return '🌐';
      case 'mobile': return '📱';
      case 'design': return '🎨';
      default: return '💻';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'web': return '#4A90E2';
      case 'mobile': return '#7ED321';
      case 'design': return '#F5A623';
      default: return '#9013FE';
    }
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.imageContainer}>
        {project.image && !imageError ? (
          <img 
            src={project.image} 
            alt={project.title}
            className={styles.projectImage}
            onError={() => setImageError(true)}
          />
        ) : (
          <div 
            className={styles.placeholder}
            style={{ backgroundColor: getTypeColor(project.type) + '20' }}
          >
            <div className={styles.placeholderContent}>
              <span className={styles.typeIcon}>{getTypeIcon(project.type)}</span>
              <span className={styles.placeholderText}>
                {project.type === 'design' ? '디자인 이미지' : '프로젝트 이미지'}
              </span>
            </div>
          </div>
        )}
        
        {project.link && (
          <div className={styles.linkOverlay}>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              🔗 보러가기
            </a>
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <span 
            className={styles.typeTag}
            style={{ backgroundColor: getTypeColor(project.type) }}
          >
            {project.type === 'web' ? '웹' : project.type === 'mobile' ? '모바일' : '디자인'}
          </span>
        </div>
        
        <p className={styles.summary}>{project.summary}</p>
        
        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        
        {!project.link && project.type === 'design' && (
          <div className={styles.noLinkNote}>
            <span>💡 디자인 프로젝트 - 상세 이미지 준비 중</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

