import React from 'react';

import Linkedin from '../../../Styles/Assets/Icons/linkedin-icon-01.svg';
import GitHub from '../../../Styles/Assets/Icons/github-icon-01.svg';

const NavItems = () => {
  return (
    <div className="div-socialmedia-items">

      <a
        href="https://www.linkedin.com/in/victoria-sales-dev/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="Link to access the portfolio owners Linkedin" className="media-links" />
      </a>

      <a
        href="https://github.com/VicSales28"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GitHub} alt="Link to access the portfolio owners GitHub" className="media-links" />
      </a>

    </div>
  );
};

export default NavItems;
