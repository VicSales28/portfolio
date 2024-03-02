import React from 'react';

import PortraitSVG from '../../Styles/Assets/Pictures/SVG/portrait.svg';
import { descriptionsData } from '../../Data/Descriptions';

import '../../Styles/Components/Hero/Hero.css';

const Hero = () => {
  return (
    <div className="div-hero">

      <div className="div-content">
        {descriptionsData
          .filter(item => item.section === 'hero')
          .map(item => (
            <p key={item.id} id={`description-${item.id}`}>{item.description}</p>
          ))}
        <button id="hero-btn">Send me a message</button>
      </div>

      <div>
        <img src={PortraitSVG} alt="Portfolio Owner" className="div-img-hero" />
      </div>

    </div>
  );
};

export default Hero;
