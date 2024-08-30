import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLanguage } from '../../ContextAPI/LanguageContext';
import { renderDescription } from './Utils/DescriptionRenderUtils';
import { descriptionsData as descriptionsDataEN } from '../../Data/English/Descriptions';
import { descriptionsData as descriptionsDataPT } from '../../Data/Portuguese/Descriptions';
import Charts from '../../Styles/Assets/Illustrations/charts.svg';
import Coding from '../../Styles/Assets/Illustrations/coding.svg';
import Wireframe from '../../Styles/Assets/Illustrations/wireframe.svg';

import "../../Styles/Components/About/About.css";

const About = () => {
  const { language, aboutTitle } = useLanguage();

  const descriptionsData = language === 'EN' ? descriptionsDataEN : descriptionsDataPT;

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="about-div">

      <p
        id="about-title"
        className="poppins-extrabold">
        {aboutTitle.about}
      </p>

      <div className="about-content-div hide-sm" data-aos="fade-up">

        <section className="chart-section">
          {renderDescription(descriptionsData, 'about', 8)}
          <img
            id="chart-image"
            src={Charts}
            alt="Chart Illustrations"
          />
        </section>

        <section className="coding-section" data-aos="fade-up" data-aos-delay="200">
          <img
            id="coding-image"
            src={Coding}
            alt="Code illustrations"
          />
          {renderDescription(descriptionsData, 'about', 6)}
        </section>

        <section className="wireframe-section" data-aos="fade-up" data-aos-delay="400">
          {renderDescription(descriptionsData, 'about', 4)}
          <img
            id="wireframe-image"
            src={Wireframe}
            alt="Wireframe illustrations" />
        </section>

      </div>

    </div>
  );
};

export default About;
