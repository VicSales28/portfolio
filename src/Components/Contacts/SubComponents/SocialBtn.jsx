import React from 'react';

const SocialButton = ({ buttonText, href, svgImage }) => {
  return (
    <button className="social-btn">
      <div className="rtgle1-social-btn"></div>
      <div className="rtgle2-social-btn"></div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        id="text-social-btn"
        className="poppins-regular">
        <img src={svgImage} alt="Social Icon" className="social-icon" />
        {' '}
        {buttonText}
      </a>
    </button>
  );
};

export default SocialButton;

