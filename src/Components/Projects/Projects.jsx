import React, { useState } from 'react';

import ProjectCard from './SubComponents/ProjectCard';
import FilterBtn from './SubComponents/FilterBtn';
import FilterDropdown from './SubComponents/FilterDropDown';

import { useLanguage } from '../../ContextAPI/LanguageContext';
import Draft from "../../Styles/Assets/Illustrations/draft.svg";

import '../../Styles/Components/Projects/Projects.css';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('development');
  const { projectsData, projectsTitle } = useLanguage();

  let projectsToRender = [];

  switch (selectedFilter) {
    case 'development':
      projectsToRender = projectsData.development;
      break;
    case 'analysis':
      projectsToRender = projectsData.analysis;
      break;
    case 'uxui':
      projectsToRender = projectsData.uxui;
      break;
    default:
      projectsToRender = projectsData.development;
  }

  return (
    <div className='projects-container'>

      <div className='projects-header'>
        <p className='projects-title poppins-extrabold'>
          {projectsTitle.projects}
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
