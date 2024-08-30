import React from 'react';

import PrimaryMenu from '../Components/PrimaryMenu/PrimaryMenu';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Carousel from '../Components/About/Carousel';
import Projects from '../Components/Projects/Projects';
import Career from '../Components/Career/Career';
import Contacts from '../Components/Contacts/Contacts';
import Footer from '../Components/Footer/Footer';
import ScrollToTopBtn from '../Components/Features/ScrollToTopBtn';


const MainPage = () => {
  return (
    <div>
      <PrimaryMenu/>
      <Hero />
      <About />
      <Carousel />
      <Projects />
      <Career />
      <Contacts />
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
};

export default MainPage;
