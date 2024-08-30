import React from 'react';

import CareerHighlights from './SubComponents/CareerHighlights';

import { useLanguage } from '../../ContextAPI/LanguageContext';
import { jobsData as jobsDataEN } from '../../Data/English/Career';
import { jobsData as jobsDataPT } from '../../Data/Portuguese/Career';
import Sparkle from "../../Styles/Assets/Illustrations/sparkle.svg";

import "../../Styles/Components/Career/Career.css";

const Career = () => {
  const { language, careerTitle } = useLanguage();

  const jobsData = language === 'EN' ? jobsDataEN : jobsDataPT;

  return (
    <div className="career-container hide-lg">

      <div className='career-header'>
        <p className='career-title poppins-extrabold'>
          {careerTitle.career}
        </p>
        <img src={Sparkle} alt='Sparkle illustration' />
      </div>

      <section className="jobs-section">
        {jobsData.map(job => (
          <CareerHighlights
            key={job.id}
            period={job.period}
            company={job.company}
            roleDesc={job.roleDesc}
            role={job.role}
            availableSetofImgs={job.availableSetofImgs}
            images={job.images}
            availableHeroImg={job.availableHeroImg}
            heroImg={job.heroImg}
          />
        ))}
      </section>



    </div>
  );
};

export default Career;
