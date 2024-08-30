import React from 'react';

import HeroButton from './SubComponents/HeroBtn';

import { useLanguage } from '../../ContextAPI/LanguageContext';
import { descriptionsData  as descriptionsDataEN } from '../../Data/English/Descriptions';
import { descriptionsData as descriptionsDataPT } from '../../Data/Portuguese/Descriptions';
import PortraitSVG from '../../Styles/Assets/Pictures/SVG/portrait.svg';

import '../../Styles/Components/Hero/Hero.css';

const Hero = () => {
  const { language } = useLanguage();

  const descriptionsData = language === 'EN' ? descriptionsDataEN : descriptionsDataPT;

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
