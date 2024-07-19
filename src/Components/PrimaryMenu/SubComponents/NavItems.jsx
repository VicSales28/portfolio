import React from 'react';
import { Link } from 'react-scroll';

const NavItems = () => {
  return (
    <section className="section-nav-items hide-sm">

          <Link className="nav-link" activeClass="active" spy={true} smooth={true} to="about-title" duration={500}>
            About
          </Link>

          <Link className="nav-link" activeClass="active" spy={true} smooth={true} to="career-title" duration={500}>
            Projects
          </Link>


          <Link className="nav-link hide-lg" activeClass="active" spy={true} smooth={true} to="contacts-title" duration={500}>
            Career
          </Link>

          <Link className="nav-link" activeClass="active" spy={true} smooth={true} to="contacts-title" duration={500}>
            Contacts
          </Link>

    </section>
  );
};

export default NavItems;
