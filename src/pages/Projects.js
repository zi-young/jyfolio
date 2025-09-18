import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

const Projects = () => {
  const [selectedType, setSelectedType] = useState('all');

  const projectTypes = [
    { value: 'all', label: '전체' },
    { value: 'web', label: '웹' },
    { value: 'mobile', label: '모바일' },
    { value: 'design', label: '디자인' }
  ];

  const filteredProjects = selectedType === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          다양한 프로젝트를 통해 쌓은 경험과 기술을 소개합니다.
        </p>
        
        <div className={styles.filterContainer}>
          <div className={styles.filterButtons}>
            {projectTypes.map(type => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`${styles.filterButton} ${
                  selectedType === type.value ? styles.active : ''
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
          <div className={styles.projectCount}>
            {filteredProjects.length}개의 프로젝트
          </div>
        </div>
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <p>해당 타입의 프로젝트가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

