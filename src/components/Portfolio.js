import React from 'react';
import './Portfolio.css'; // Create a CSS file for your Portfolio component styles
import project1Image from './assets/project1.jpg';
import project2Image from './assets/project2.jpg';
import project3Image from './assets/project3.jpg';
import project4Image from './assets/project4.jpg';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'GO-SPARE',
      description: 'its a service webiste for all automobiles and garage services',
      imageUrl: project1Image,
      projectUrl: 'https://go-spare.netlify.app',
    },
    {
      id: 2,
      title: 'CALORIEMETER',
      description: 'this is a python -api based project but this project is under deployment',
      imageUrl: project2Image,
      projectUrl: 'project2-url',
    },
    {
      id: 3,
      title: 'WINDOWS-11 SIM',
      description: 'its a windom 11 simulator I made on one of my weekends when my finals were over.',
      imageUrl: project3Image,
      projectUrl: 'https://windowww111.netlify.app',
    },
    {
      id: 4,
      title: 'LOGIN PAGE',
      description: 'its a login project its work is over but this project is under deployment',
      imageUrl: project4Image,
      projectUrl: 'project4-url',
    },
    // Add more projects here
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-items">
        {projects.map((project) => (
          <div className="portfolio-item" key={project.id}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
