import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { useLanguage } from '../../ContextAPI/LanguageContext';
import { renderDescription } from './Utils/DescriptionRenderUtils';
import { descriptionsData as descriptionsDataEN } from '../../Data/English/Descriptions';
import { descriptionsData as descriptionsDataPT } from '../../Data/Portuguese/Descriptions';
import Charts from '../../Styles/Assets/Illustrations/charts.svg';
import Coding from '../../Styles/Assets/Illustrations/coding.svg';
import Wireframe from '../../Styles/Assets/Illustrations/wireframe.svg';

import "../../Styles/Components/About/About.css";

const Carousel = () => {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);

  const descriptionsData = language === 'EN' ? descriptionsDataEN : descriptionsDataPT;

  const swipeableSections = [
    <div className="swipeable-section" key="chart">
      <div className="text-content">
        {renderDescription(descriptionsData, 'about', 8)}
      </div>
      <img src={Charts} alt="Chart Illustrations" />
    </div>,
    <div className="swipeable-section" key="coding">
      <div className="text-content">
        {renderDescription(descriptionsData, 'about', 6)}
      </div>
      <img src={Coding} alt="Code illustrations" />
    </div>,
    <div className="swipeable-section" key="wireframe">
      <div className="text-content">
        {renderDescription(descriptionsData, 'about', 4)}
      </div>
      <img src={Wireframe} alt="Wireframe illustrations" />
    </div>
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prevIndex) => Math.min(prevIndex + 1, swipeableSections.length - 1)),
    onSwipedRight: () => setIndex((prevIndex) => Math.max(prevIndex - 1, 0)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div>
      <div {...handlers} className="swipe-container hide-lg">
        <div
          className="swipeable-sections"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {swipeableSections.map((section, i) => (
            <div key={i} className="swipeable-section">
              {section}
            </div>
          ))}
        </div>
        <div className="navigation-dots">
          {swipeableSections.map((_, i) => (
            <div
              key={i}
              className={`dot ${index === i ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
