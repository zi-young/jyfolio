import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[parseInt(id)];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // 프로젝트의 이미지 배열을 가져오기 (images가 있으면 사용, 없으면 image를 배열로)
  const projectImages = project?.images || (project?.image ? [project.image] : []);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>프로젝트를 찾을 수 없습니다</h1>
        <button onClick={() => navigate('/')} className={styles.backButton}>
          홈으로 돌아가기
        </button>
      </div>
    );
  }

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && projectImages.length > 1) {
      nextImage();
    }
    if (isRightSwipe && projectImages.length > 1) {
      prevImage();
    }
  };

  return (
    <div className={styles.projectDetail} onKeyDown={handleKeyDown} tabIndex={0}>
      <div className={styles.container}>
        <button onClick={() => navigate('/')} className={styles.backButton}>
          ← 프로젝트 목록으로 돌아가기
        </button>

        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.titleSection}>
              <h1 className={styles.title}>{project.title}</h1>
              <div className={styles.metaInfo}>
                <span 
                  className={styles.typeTag}
                  style={{ backgroundColor: getTypeColor(project.type) }}
                >
                  {getTypeIcon(project.type)} {project.type === 'web' ? '웹' : project.type === 'mobile' ? '모바일' : '디자인'}
                </span>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    🔗 프로젝트 보러가기
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.imageSection}>
              {projectImages.length > 0 ? (
                <div className={styles.imageSlider}>
                  <div 
                    className={styles.imageContainer}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <img 
                      src={projectImages[currentImageIndex]} 
                      alt={`${project.title} - 이미지 ${currentImageIndex + 1}`}
                      className={styles.projectImage}
                    />
                    
                    {projectImages.length > 1 && (
                      <>
                        <button 
                          className={styles.navButton} 
                          onClick={prevImage}
                          aria-label="이전 이미지"
                        >
                          ‹
                        </button>
                        <button 
                          className={`${styles.navButton} ${styles.nextButton}`} 
                          onClick={nextImage}
                          aria-label="다음 이미지"
                        >
                          ›
                        </button>
                        
                        <div className={styles.imageCounter}>
                          {currentImageIndex + 1} / {projectImages.length}
                        </div>
                        
                        <div className={styles.imageDots}>
                          {projectImages.map((_, index) => (
                            <button
                              key={index}
                              className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                              onClick={() => setCurrentImageIndex(index)}
                              aria-label={`이미지 ${index + 1}로 이동`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
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
            </div>

            <div className={styles.descriptionSection}>
              <h2>프로젝트 개요</h2>
              <p className={styles.description}>{project.summary}</p>
              
              <h3>사용 기술</h3>
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              {project.details && (
                <>
                  <h3>상세 설명</h3>
                  <div className={styles.details}>
                    {project.details.map((detail, index) => (
                      <div key={index} className={styles.detailItem}>
                        <h4>{detail.title}</h4>
                        <p>{detail.content}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {project.challenges && (
                <>
                  <h3>도전과제 및 해결방안</h3>
                  <div className={styles.challenges}>
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className={styles.challengeItem}>
                        <h4>🚧 {challenge.problem}</h4>
                        <p>💡 {challenge.solution}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {project.results && (
                <>
                  <h3>프로젝트 결과</h3>
                  <div className={styles.results}>
                    {project.results.map((result, index) => (
                      <div key={index} className={styles.resultItem}>
                        <span className={styles.resultIcon}>✅</span>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.projectInfo}>
              <h3>프로젝트 정보</h3>
              <div className={styles.infoItem}>
                <strong>타입:</strong> {project.type === 'web' ? '웹 개발' : project.type === 'mobile' ? '모바일 앱' : '디자인'}
              </div>
              <div className={styles.infoItem}>
                <strong>기술 스택:</strong> {project.technologies.length}개
              </div>
              {project.duration && (
                <div className={styles.infoItem}>
                  <strong>개발 기간:</strong> {project.duration}
                </div>
              )}
              {project.team && (
                <div className={styles.infoItem}>
                  <strong>팀 구성:</strong> {project.team}
                </div>
              )}
            </div>

            {project.link && (
              <div className={styles.actions}>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  프로젝트 보러가기
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
