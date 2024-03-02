import React from 'react';
import { Link } from 'react-scroll';

const NavItems = () => {
  return (
    <div className="div-nav-items">

          <Link activeClass="active" spy={true} smooth={true} to="about" duration={500}>
            About
          </Link>

          <Link activeClass="active" spy={true} smooth={true} to="projects" duration={500}>
            Projects
          </Link>

          <Link activeClass="active" spy={true} smooth={true} to="contacts" duration={500}>
            Contacts
          </Link>

    </div>
  );
};

export default NavItems;
