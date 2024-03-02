import React from 'react';

import { projectsData } from '../../data/Projects';
import ProjectCard from './SubComponents/ProjectCard';


const Projects = () => {
  return (
    <section>

      <div>
        <h1>Projects</h1>
      </div>

      <div className="external-cards-box">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.projectName}
            desc={project.projectDesc}
            tags={project.tags}
            code={project.code}
            deploy={project.deploy}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
