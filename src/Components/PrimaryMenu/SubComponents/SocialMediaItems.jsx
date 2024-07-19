import React from 'react';

import Linkedin from '../../../Styles/Assets/Icons/linkedin-icon-01.svg';
import GitHub from '../../../Styles/Assets/Icons/github-icon-01.svg';
import Menu from '../../../Styles/Assets/Icons/menu-vector.svg';

const NavItems = ({ onMenuClick }) => {
  return (
    <section className="section-socialmedia-items">

      <a
        href="https://www.linkedin.com/in/victoria-sales-dev/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="Link to access the portfolio owners Linkedin" className="media-links hide-sm" />
      </a>

      <a
        href="https://github.com/VicSales28"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GitHub} alt="Link to access the portfolio owners GitHub" className="media-links hide-sm" />
      </a>


      <div className="section-socialmedia-items hide-lg">
        <img src={Menu} alt="Menu icon" onClick={onMenuClick} />
      </div>

    </section>
  );
};

export default NavItems;
