import React, { useState } from 'react';
import ProjectCard from './SubComponents/ProjectCard';
import FilterBtn from './SubComponents/FilterBtn';
import FilterDropdown from './SubComponents/FilterDropDown';

import { developmentData } from '../../Data/Projects/WebDevelopment';
import { analisysData } from '../../Data/Projects/DataAnalysis';
import { uxuiData } from '../../Data/Projects/UXUIDesign';

import Draft from "../../Styles/Assets/Illustrations/draft.svg";

import '../../Styles/Components/Projects/Projects.css';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('development');

  let projectsToRender = [];

  switch (selectedFilter) {
    case 'development':
      projectsToRender = developmentData;
      break;
    case 'analysis':
      projectsToRender = analisysData;
      break;
    case 'uxui':
      projectsToRender = uxuiData;
      break;
    default:
      projectsToRender = developmentData;
  }

  return (
    <div className='projects-container'>

      <div className='projects-header'>
        <p className='projects-title poppins-extrabold'>
          projects.
        </p>
        <img src={Draft} alt='Draft illustration' />
      </div>

      <div className="filter-buttons hide-sm">
        <FilterBtn buttonText="Web Development" onClick={() => setSelectedFilter('development')} />
        <FilterBtn buttonText="Data Analysis" onClick={() => setSelectedFilter('analysis')} />
        <FilterBtn buttonText="UX|UI Design" onClick={() => setSelectedFilter('uxui')} />
      </div>

      <FilterDropdown selectedFilter={selectedFilter} onSelectFilter={setSelectedFilter} />

      <div className='project-cards-container'>
        {projectsToRender.map(project => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.projectName}
            tags={project.tags}
            description={project.projectDesc}
            githubLink={project.availableCode ? project.code : undefined}
            deployLink={project.availableDeploy ? project.deploy : undefined}
            codeDisabled={!project.availableCode}
            deployDisabled={!project.availableDeploy}
          />
        ))}
      </div>

    </div>
  );
};

export default Projects;
