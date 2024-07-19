import React from 'react';
import { Link } from 'react-scroll';

import Linkedin from '../../../Styles/Assets/Icons/linkedin-icon-01.svg';
import GitHub from '../../../Styles/Assets/Icons/github-icon-01.svg';
import Close from '../../../Styles/Assets/Icons/close-vector.svg';

const DropDownItems = ({ onCloseClick }) => {
  return (
    <section className="section-dropdown hide-lg">

      <div className="closer">
        <img src={Close} alt="Close icon" onClick={onCloseClick} />
      </div>

      <Link className="nav-link" activeClass="active" spy={true} smooth={true} to="about-title" duration={500}>
        About
      </Link>

      <Link className="nav-link" activeClass="active" spy={true} smooth={true} to="projects-title" duration={500}>
        Projects
      </Link>

      <Link className="nav-link hide-lg" activeClass="active" spy={true} smooth={true} to="contacts-title" duration={500}>
        Career
      </Link>

      <Link className="nav-link" activeClass="active" spy={true} smooth={true} to="contacts-title" duration={500}>
        Contacts
      </Link>

      <div className="section-socialmedia-items">

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

    </section>
  );
};

export default DropDownItems;