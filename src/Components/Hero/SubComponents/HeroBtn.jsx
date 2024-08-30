import React from 'react';

import { useLanguage } from '../../../ContextAPI/LanguageContext';

const HeroButton = () => {
  const { messages } = useLanguage();
  return (
    <button className="hero-btn">
      <div className="rtgle1-hero-btn"></div>
      <div className="rtgle2-hero-btn"></div>
      <a
        href="https://www.linkedin.com/in/victoria-sales-dev/"
        target="_blank"
        rel="noreferrer"
        id="text-hero-btn"
        className="poppins-regular">
        {messages.buttonText}
      </a>
    </button>
  );
};

export default HeroButton;
