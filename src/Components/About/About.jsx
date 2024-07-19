import React from 'react';
import { renderDescription } from './Utils/DescriptionRenderUtils';
import { descriptionsData } from '../../Data/Descriptions';

import Charts from '../../Styles/Assets/Illustrations/charts.svg';
import Coding from '../../Styles/Assets/Illustrations/coding.svg';
import Wireframe from '../../Styles/Assets/Illustrations/wireframe.svg';

import "../../Styles/Components/About/About.css";

const About = () => {
  return (
    <div className="about-div">

      <p
        id="about-title"
        className="poppins-extrabold">
        about.
      </p>

      <div className="about-content-div hide-sm">

        <section className="chart-section">
          {renderDescription(descriptionsData, 'about', 8)}
          <img
            id="chart-image"
            src={Charts}
            alt="Chart Illustrations"
          />
        </section>

        <section className="coding-section">
          <img
            id="coding-image"
            src={Coding}
            alt="Code illustrations"
          />
          {renderDescription(descriptionsData, 'about', 6)}
        </section>

        <section className="wireframe-section">
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
