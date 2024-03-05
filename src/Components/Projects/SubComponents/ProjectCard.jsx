import React from 'react';

const ProjectCard = ({ image, title, tags, description, githubLink, deployLink, codeDisabled, deployDisabled }) => {
  return (
    <div className="project-card">

      <div className="project-card-header"><img src={image} alt={title} /></div>

      <div className="project-card-content">
        <div className="project-title poppins-medium">{title}</div>
        <div className="project-tags poppins-regular">{tags}</div>
        <div className="project-description poppins-regular">{description}</div>
      </div>

      <div className='projects-buttons'>

        <div className="deploy-button">
          <div className="deploy-button-background">
          <a
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer" className="deploy-button-text poppins-regular"
            disabled={deployDisabled}>
            Deploy
          </a>
          </div>
        </div>

        <div className="github-button">
          <div className="github-button-background">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer" className="github-button-text poppins-regular"
            disabled={codeDisabled}>
            GitHub
          </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectCard;
