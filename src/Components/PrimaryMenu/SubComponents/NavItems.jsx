import React from 'react';
import { Link } from 'react-scroll';

import { useLanguage } from '../../../ContextAPI/LanguageContext';

const NavItems = () => {
  const { navItems } = useLanguage();
  return (
    <section className="section-nav-items hide-sm">

          <Link className="nav-link" activeClass="active" spy={true} smooth={true} to="about-title" duration={500}>
            {navItems.about}
          </Link>

          <Link className="nav-link" activeClass="active" spy={true} smooth={true} to="career-title" duration={500}>
            {navItems.projects}
          </Link>


          <Link className="nav-link hide-lg" activeClass="active" spy={true} smooth={true} to="contacts-title" duration={500}>
            {navItems.career}
          </Link>

          <Link className="nav-link" activeClass="active" spy={true} smooth={true} to="contacts-title" duration={500}>
            {navItems.contacts}
          </Link>

    </section>
  );
};

export default NavItems;
