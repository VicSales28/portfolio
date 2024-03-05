import React from 'react';

import PortraitSVG from '../../Styles/Assets/Pictures/SVG/portrait.svg';
import HeroButton from './SubComponents/HeroBtn';
import { descriptionsData } from '../../Data/Descriptions';

import '../../Styles/Components/Hero/Hero.css';

const Hero = () => {
  return (
    <div className="div-hero">

      <section className="section-content">
        {descriptionsData
          .filter(item => item.section === 'hero')
          .map(item => (
            <p key={item.id} id={`hero-description-${item.id}`}>{item.description}</p>
          ))}

        <HeroButton />
      </section>

      <section>
        <img src={PortraitSVG} alt="Portfolio Owner" id="img-hero" />
      </section>

    </div>
  );
};

export default Hero;
