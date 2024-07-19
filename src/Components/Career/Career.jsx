import React from 'react';
import CareerHighlights from './SubComponents/CareerHighlights';

import { jobsData } from '../../Data/Career';

import Sparkle from "../../Styles/Assets/Illustrations/sparkle.svg";

import "../../Styles/Components/Career/Career.css";

const Career = () => {
  return (
    <div className="career-container hide-lg">

      <div className='career-header'>
        <p className='career-title poppins-extrabold'>
          career.
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
